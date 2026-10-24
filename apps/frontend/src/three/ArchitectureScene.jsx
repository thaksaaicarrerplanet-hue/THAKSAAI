import * as THREE from 'three';
import { createReactorMaterials, disposeReactorMaterials } from './materials';
import { createPathwayModuleMesh } from './PathwayModule';

/**
 * Custom GLSL Shaders for Lusion-inspired GPU Flow-Field Particle Swarm
 * Zero CPU array allocations per frame — 100% computed in the Vertex/Fragment shader.
 */
const PARTICLE_VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  attribute float aScale;
  attribute float aPhase;
  varying float vAlpha;
  varying float vColorMix;

  void main() {
    vec3 pos = position;

    // Orbital curl-like wave motion around the central teaching core
    float angle = uTime * 0.35 + aPhase * 6.2831;
    float radiusOffset = sin(uTime * 1.1 + aPhase * 12.0) * 0.18;
    pos.x += cos(angle) * radiusOffset;
    pos.z += sin(angle) * radiusOffset;
    pos.y += sin(uTime * 0.9 + pos.x * 1.6 + aPhase * 6.0) * 0.16;

    // Cursor repulsion & swirl in 3D stage space
    vec2 pointerWorld = uPointer * 2.2;
    vec2 diff = pos.xz - pointerWorld;
    float dist = length(diff);
    if (dist < 1.5) {
      float force = (1.5 - dist) / 1.5;
      pos.xz += normalize(diff + vec2(0.0001)) * force * 0.45;
      pos.y += force * 0.32;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aScale * (155.0 / -mvPosition.z);

    vAlpha = clamp(0.42 + 0.55 * sin(uTime * 1.5 + aPhase * 10.0), 0.25, 0.96);
    vColorMix = aPhase;
  }
`;

const PARTICLE_FRAGMENT_SHADER = /* glsl */ `
  varying float vAlpha;
  varying float vColorMix;

  void main() {
    vec2 uv = gl_PointCoord.xy - 0.5;
    float d = length(uv);
    if (d > 0.5) discard;

    // Soft radial glow particle
    float strength = smoothstep(0.5, 0.04, d);
    vec3 electricLime = vec3(0.78, 0.95, 0.42);
    vec3 precisionBlue = vec3(0.32, 0.58, 1.0);
    vec3 color = mix(precisionBlue, electricLime, step(0.48, vColorMix));

    gl_FragColor = vec4(color, strength * vAlpha);
  }
`;

/**
 * ArchitectureSceneController
 * Combines:
 * 1. Igloo-style Refractive Crystalline Teaching Core + Dual Orbital Gyro Rings
 * 2. Lusion-style GPU Flow-Field Particles reacting to pointer coordinates
 * 3. 4 Orbiting Pillar Monoliths (Workshops, CRT, Internships, Projects) that elevate & focus on selection
 */
export class ArchitectureSceneController {
  constructor({ canvas, modules, selectedId, onSelect, onHover, tier = "mid", reducedMotion = false }) {
    this.canvas = canvas;
    this.modules = modules || [];
    this.selectedId = selectedId;
    this.onSelect = onSelect;
    this.onHover = onHover;
    this.tier = tier || 'mid';
    this.reducedMotion = Boolean(reducedMotion);
    this.staticFrameRendered = false;

    this.disposed = false;
    this.isVisible = true;
    this.rafId = null;
    this.hoveredId = null;
    this.clock = new THREE.Clock();

    this.pointer = new THREE.Vector2(0, 0);
    this.smoothPointer = new THREE.Vector2(0, 0);
    this.targetRotation = new THREE.Vector2(0, 0);
    this.currentRotation = new THREE.Vector2(0, 0);
    this.focusAngle = 0;
    this.currentFocusAngle = 0;

    this.raycaster = new THREE.Raycaster();
    this.interactiveMeshes = [];
    this.moduleGroups = new Map();

    this.init();
  }

  init() {
    const width = this.canvas.clientWidth || 560;
    const height = this.canvas.clientHeight || 460;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.tier === 'high',
      alpha: true,
      powerPreference: 'high-performance',
    });
    const pixelRatioCap = this.tier === 'high' ? 1.75 : this.tier === 'mid' ? 1.25 : 1;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatioCap));
    this.renderer.setSize(width, height, false);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 50);
    this.camera.position.set(4.4, 3.85, 4.85);
    this.camera.lookAt(0, 0.25, 0);

    // Cinematic 3-point lighting
    const ambientLight = new THREE.AmbientLight(0xdbe4ff, 1.05);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.3);
    keyLight.position.set(5, 8, 6);
    const rimLight = new THREE.DirectionalLight(0xc7f36b, 1.45);
    rimLight.position.set(-5, 4, -4);
    const corePointLight = new THREE.PointLight(0x3659d9, 2.8, 7);
    corePointLight.position.set(0, 0.7, 0);
    this.corePointLight = corePointLight;
    this.scene.add(ambientLight, keyLight, rimLight, corePointLight);

    this.stageGroup = new THREE.Group();
    this.scene.add(this.stageGroup);

    this.materials = createReactorMaterials();

    // 1. Machined Octagonal Substrate Base + Telemetry Rings
    const plinthGeo = new THREE.CylinderGeometry(2.38, 2.52, 0.16, 8);
    const plinthMesh = new THREE.Mesh(plinthGeo, this.materials.substrateBase);
    plinthMesh.position.set(0, -0.14, 0);
    this.stageGroup.add(plinthMesh);

    const ringGeo1 = new THREE.RingGeometry(1.12, 1.16, 64);
    ringGeo1.rotateX(-Math.PI / 2);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x3659d9,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.position.set(0, -0.04, 0);
    this.stageGroup.add(ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(1.88, 1.92, 64);
    ringGeo2.rotateX(-Math.PI / 2);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xc7f36b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    this.outerRingMesh = new THREE.Mesh(ringGeo2, ringMat2);
    this.outerRingMesh.position.set(0, -0.04, 0);
    this.stageGroup.add(this.outerRingMesh);

    // 2. Igloo-inspired Central Refractive Crystalline Core + Dual Orbital Gyro Rings
    const crystalGeo = new THREE.IcosahedronGeometry(0.62, 0);
    this.coreMesh = new THREE.Mesh(crystalGeo, this.materials.translucentPrism);
    this.coreMesh.position.set(0, 0.62, 0);
    this.stageGroup.add(this.coreMesh);

    const crystalWireGeo = new THREE.EdgesGeometry(crystalGeo);
    this.crystalWire = new THREE.LineSegments(
      crystalWireGeo,
      new THREE.LineBasicMaterial({ color: 0xc7f36b, transparent: true, opacity: 0.85 })
    );
    this.coreMesh.add(this.crystalWire);

    const innerCoreGeo = new THREE.OctahedronGeometry(0.32, 0);
    this.innerCoreMesh = new THREE.Mesh(innerCoreGeo, this.materials.electricSignal);
    this.innerCoreMesh.position.set(0, 0.62, 0);
    this.stageGroup.add(this.innerCoreMesh);

    const gyroGeo1 = new THREE.TorusGeometry(0.84, 0.018, 16, 64);
    this.gyroRing1 = new THREE.Mesh(
      gyroGeo1,
      new THREE.MeshBasicMaterial({ color: 0xc7f36b, transparent: true, opacity: 0.65 })
    );
    this.gyroRing1.position.set(0, 0.62, 0);
    this.gyroRing1.rotation.x = Math.PI / 3;
    this.stageGroup.add(this.gyroRing1);

    const gyroGeo2 = new THREE.TorusGeometry(0.98, 0.014, 16, 64);
    this.gyroRing2 = new THREE.Mesh(
      gyroGeo2,
      new THREE.MeshBasicMaterial({ color: 0x6d8dff, transparent: true, opacity: 0.5 })
    );
    this.gyroRing2.position.set(0, 0.62, 0);
    this.gyroRing2.rotation.y = Math.PI / 4;
    this.stageGroup.add(this.gyroRing2);

    // 3. Lusion-inspired GPU Flow-Field Particle Swarm
    const particleCount = this.tier === 'high' ? 1200 : this.tier === 'mid' ? 500 : 120;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const r = 0.6 + Math.random() * 2.25;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.25) * 1.55;
      positions[i * 3] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r;
      scales[i] = 0.7 + Math.random() * 1.5;
      phases[i] = Math.random();
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    particleGeo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    this.particleUniforms = {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    };

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: PARTICLE_VERTEX_SHADER,
      fragmentShader: PARTICLE_FRAGMENT_SHADER,
      uniforms: this.particleUniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.particleSystem = new THREE.Points(particleGeo, particleMat);
    this.stageGroup.add(this.particleSystem);

    // 4. Four Orbiting Pathway Monoliths + Energy Traces
    this.traceLines = new Map();
    this.modules.forEach((mod) => {
      const [mx, , mz] = mod.position || [0, 0.25, 0];
      const points = [
        new THREE.Vector3(0, 0.06, 0),
        new THREE.Vector3(mx * 0.55, 0.18, mz * 0.55),
        new THREE.Vector3(mx, 0.06, mz),
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: mod.id === this.selectedId ? 0xc7f36b : 0x3659d9,
        transparent: true,
        opacity: mod.id === this.selectedId ? 0.95 : 0.45,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      this.stageGroup.add(line);
      this.traceLines.set(mod.id, lineMat);

      const modGroup = createPathwayModuleMesh(mod, this.materials);
      this.stageGroup.add(modGroup);
      this.moduleGroups.set(mod.id, modGroup);

      modGroup.traverse((child) => {
        if (child.isMesh) {
          this.interactiveMeshes.push(child);
        }
      });
    });

    this.syncSelectionState();
    this.startLoop();
  }

  setSelectedId(id) {
    if (this.selectedId === id) return;
    this.selectedId = id;
    this.syncSelectionState();
  }

  syncSelectionState() {
    const angleMap = {
      workshops: 0.18,
      crt: -0.18,
      internships: 0.28,
      projects: -0.28,
    };
    this.focusAngle = angleMap[this.selectedId] || 0;

    this.moduleGroups.forEach((group, id) => {
      const isSelected = id === this.selectedId;
      const isHovered = id === this.hoveredId;
      const active = isSelected || isHovered;

      group.userData.isSelected = isSelected;
      group.userData.isHovered = isHovered;
      group.userData.targetY = active ? 0.52 : 0.25;

      const { blockMat, barMat, edgeMat } = group.userData.refs;
      if (isSelected) {
        blockMat.color.setHex(0x233454);
        blockMat.emissive.setHex(0x162955);
        blockMat.emissiveIntensity = 0.85;
        barMat.color.setHex(0xc7f36b);
        barMat.emissive.setHex(0xc7f36b);
        barMat.emissiveIntensity = 0.9;
        edgeMat.color.setHex(0xc7f36b);
        edgeMat.opacity = 1.0;
      } else if (isHovered) {
        blockMat.color.setHex(0x1f2d47);
        blockMat.emissive.setHex(0x102042);
        blockMat.emissiveIntensity = 0.5;
        barMat.color.setHex(0x38bdf8);
        barMat.emissive.setHex(0x38bdf8);
        barMat.emissiveIntensity = 0.65;
        edgeMat.color.setHex(0x6d8dff);
        edgeMat.opacity = 0.85;
      } else {
        blockMat.color.setHex(0x172033);
        blockMat.emissive.setHex(0x000000);
        blockMat.emissiveIntensity = 0;
        barMat.color.setHex(0x3659d9);
        barMat.emissive.setHex(0x3659d9);
        barMat.emissiveIntensity = 0.3;
        edgeMat.color.setHex(0x3659d9);
        edgeMat.opacity = 0.4;
      }

      const traceMat = this.traceLines.get(id);
      if (traceMat) {
        traceMat.color.setHex(active ? 0xc7f36b : 0x3659d9);
        traceMat.opacity = active ? 1.0 : 0.42;
      }
    });
  }

  handlePointerMove(clientX, clientY) {
    if (this.disposed) return;
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ny = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.pointer.set(nx, ny);
    this.targetRotation.set(ny * 0.12, nx * 0.16);

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hits = this.raycaster.intersectObjects(this.interactiveMeshes, false);
    const hitId = hits.length > 0 ? hits[0].object.userData.moduleId : null;

    if (hitId !== this.hoveredId) {
      this.hoveredId = hitId;
      this.canvas.style.cursor = hitId ? 'pointer' : 'grab';
      if (this.onHover) this.onHover(hitId);
      this.syncSelectionState();
    }
  }

  handlePointerLeave() {
    this.targetRotation.set(0, 0);
    this.pointer.set(0, 0);
    if (this.hoveredId !== null) {
      this.hoveredId = null;
      this.canvas.style.cursor = 'default';
      if (this.onHover) this.onHover(null);
      this.syncSelectionState();
    }
  }

  handleClick() {
    if (this.hoveredId && this.onSelect) {
      this.onSelect(this.hoveredId);
    }
  }

  resize() {
    if (this.disposed || !this.canvas) return;
    const width = this.canvas.clientWidth || 560;
    const height = this.canvas.clientHeight || 460;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    if (this.reducedMotion && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
      this.staticFrameRendered = true;
    }
  }

  setVisibility(visible) {
    this.isVisible = visible;
    if (visible) {
      this.clock.start();
      this.startLoop();
    } else if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  startLoop() {
    if (!this.rafId && this.isVisible && !this.disposed && !(this.reducedMotion && this.staticFrameRendered)) {
      this.rafId = requestAnimationFrame(() => this.tick());
    }
  }

  tick() {
    this.rafId = null;
    if (this.disposed || !this.isVisible) return;

    if (this.reducedMotion) {
      this.renderer.render(this.scene, this.camera);
      this.staticFrameRendered = true;
      return;
    }

    const elapsed = this.clock.getElapsedTime();
    const damping = 0.1;

    // 1. Update GPU Particle Shader Uniforms
    this.smoothPointer.lerp(this.pointer, 0.12);
    if (this.particleUniforms) {
      this.particleUniforms.uTime.value = elapsed;
      this.particleUniforms.uPointer.value.copy(this.smoothPointer);
    }

    // 2. Animate Igloo-style Refractive Core & Dual Gyro Rings
    this.coreMesh.rotation.y = elapsed * 0.45;
    this.coreMesh.rotation.x = Math.sin(elapsed * 0.6) * 0.18;
    this.coreMesh.position.y = 0.62 + Math.sin(elapsed * 1.8) * 0.06;

    this.innerCoreMesh.rotation.y = -elapsed * 0.85;
    this.innerCoreMesh.rotation.z = elapsed * 0.55;
    this.innerCoreMesh.position.y = this.coreMesh.position.y;

    this.gyroRing1.rotation.z = elapsed * 0.65;
    this.gyroRing1.rotation.y = Math.cos(elapsed * 0.5) * 0.4;

    this.gyroRing2.rotation.x = -elapsed * 0.5;
    this.gyroRing2.rotation.z = Math.sin(elapsed * 0.45) * 0.45;

    // 3. Interpolate Stage Parallax & Pillar Focus Angle
    this.currentFocusAngle += (this.focusAngle - this.currentFocusAngle) * damping;
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * damping;
    this.currentRotation.y +=
      (this.targetRotation.y + this.currentFocusAngle + elapsed * 0.06 - this.currentRotation.y) *
      damping;

    this.stageGroup.rotation.x = this.currentRotation.x;
    this.stageGroup.rotation.y = this.currentRotation.y;

    // 4. Interpolate 4 Orbiting Pillar Monoliths Y-Lift
    this.moduleGroups.forEach((group) => {
      group.position.y += (group.userData.targetY - group.position.y) * 0.16;
    });

    this.renderer.render(this.scene, this.camera);
    this.startLoop();
  }

  dispose() {
    this.disposed = true;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    });
    disposeReactorMaterials(this.materials);
    this.renderer.dispose();
  }
}

export default ArchitectureSceneController;
