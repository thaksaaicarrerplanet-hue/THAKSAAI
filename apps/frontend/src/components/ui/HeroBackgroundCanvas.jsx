import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * THAKSA's abstract, touch-reactive WebGL art direction.
 *
 * Performance strategy:
 * - Three.js is imported only after the component mounts.
 * - No post-processing, environment-map downloads, or video assets.
 * - Pixel ratio and particle count are capped on mobile / low-memory devices.
 * - Rendering pauses outside the hero and when the tab is hidden.
 * - Reduced-motion users get one still render; WebGL failures get a CSS fallback.
 */
export default function HeroBackgroundCanvas({ className = "" }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [renderState, setRenderState] = useState("loading");

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    let disposed = false;
    let renderer;
    let frameId = null;
    let resizeObserver;
    let intersectionObserver;
    let visible = true;
    let width = 1;
    let height = 1;
    let lastFrame = 0;
    let elapsed = 0;
    let minFrameMs = 1000 / 45;
    let scene;
    let camera;
    let pointerLight;
    let sculpture;
    let particles;
    let ribbonMaterial;
    let particleMaterial;
    let three;

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const setFallback = () => {
      if (!disposed) setRenderState("fallback");
    };

    const onPointer = (event) => {
      if (reducedMotion || !visible) return;
      const bounds = host.getBoundingClientRect();
      if (
        bounds.width <= 0 ||
        bounds.height <= 0 ||
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        return;
      }

      // Pointer events include mouse, stylus, and one-finger touch on modern mobile browsers.
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.targetY = 1 - ((event.clientY - bounds.top) / bounds.height) * 2;
      if (renderer && reducedMotion === false) scheduleFrame();
    };

    const scheduleFrame = () => {
      if (!disposed && visible && document.visibilityState === "visible" && frameId === null) {
        frameId = window.requestAnimationFrame(renderFrame);
      }
    };

    const renderFrame = (timestamp) => {
      frameId = null;
      if (
        disposed ||
        !renderer ||
        !visible ||
        document.visibilityState !== "visible"
      ) {
        return;
      }

      if (!reducedMotion && timestamp - lastFrame < minFrameMs) {
        scheduleFrame();
        return;
      }

      const delta = lastFrame === 0 ? 0.016 : Math.min((timestamp - lastFrame) / 1000, 0.05);
      lastFrame = timestamp;
      if (!reducedMotion) {
        elapsed += delta;
        const easing = 1 - Math.exp(-delta * 8.5);
        pointer.x += (pointer.targetX - pointer.x) * easing;
        pointer.y += (pointer.targetY - pointer.y) * easing;

        if (ribbonMaterial) {
          ribbonMaterial.uniforms.uTime.value = elapsed;
          ribbonMaterial.uniforms.uPointer.value.set(pointer.x, pointer.y);
        }
        if (particleMaterial) {
          particleMaterial.uniforms.uTime.value = elapsed;
          particleMaterial.uniforms.uPointer.value.set(pointer.x, pointer.y);
        }
        if (sculpture) {
          sculpture.rotation.y += (0.13 + pointer.x * 0.12) * delta;
          sculpture.rotation.x += ((pointer.y * 0.14) - sculpture.rotation.x) * easing;
          sculpture.rotation.z += ((pointer.x * -0.07) - sculpture.rotation.z) * easing;
        }
        if (pointerLight) {
          pointerLight.position.x += (pointer.x * 4.8 - pointerLight.position.x) * easing;
          pointerLight.position.y += (pointer.y * 3.2 - pointerLight.position.y) * easing;
        }
      }

      renderer.render(scene, camera);
      if (!disposed) setRenderState("active");
      if (!reducedMotion) scheduleFrame();
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (frameId !== null) window.cancelAnimationFrame(frameId);
        frameId = null;
      } else {
        lastFrame = 0;
        scheduleFrame();
      }
    };

    const onContextLost = (event) => {
      event.preventDefault();
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      frameId = null;
      setFallback();
    };

    const resizeScene = () => {
      if (!renderer || !camera) return;
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const mobile = width < 700;
      const memory = Number(navigator.deviceMemory || 8);
      const cores = Number(navigator.hardwareConcurrency || 8);
      const constrained = memory <= 4 || cores <= 4;
      const maxDpr = constrained ? 1 : mobile ? 1.2 : 1.5;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      minFrameMs = 1000 / (mobile || constrained ? 30 : 45);

      if (sculpture) {
        sculpture.position.set(mobile ? 1.15 : 3.15, mobile ? -1.45 : -0.05, 0);
        const scale = mobile ? 0.68 : width < 1100 ? 0.82 : 1;
        sculpture.scale.setScalar(scale);
      }
      scheduleFrame();
    };

    const initialise = async () => {
      try {
        three = await import("three");
        if (disposed) return;

        const mobile = window.innerWidth < 700;
        const memory = Number(navigator.deviceMemory || 8);
        const cores = Number(navigator.hardwareConcurrency || 8);
        const constrained = memory <= 4 || cores <= 4;

        renderer = new three.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !mobile && !constrained,
          powerPreference: "low-power",
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false,
        });
        renderer.outputColorSpace = three.SRGBColorSpace;
        renderer.toneMapping = three.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.12;
        renderer.setClearColor(0x050811, 0);

        scene = new three.Scene();
        camera = new three.PerspectiveCamera(42, 1, 0.1, 80);
        camera.position.set(0, 0, 11.5);

        scene.add(new three.AmbientLight(0x9fb6ff, 1.0));
        const blueLight = new three.PointLight(0x557cff, 34, 24, 2);
        blueLight.position.set(-4.2, 2.9, 3.5);
        scene.add(blueLight);

        const limeLight = new three.PointLight(0xc7f36b, 18, 16, 2);
        limeLight.position.set(3.7, -2.1, 2.4);
        scene.add(limeLight);

        pointerLight = new three.PointLight(0xb7d1ff, 42, 17, 2);
        pointerLight.position.set(0, 0, 3.5);
        scene.add(pointerLight);

        // A softly deforming, translucent field gives the whole canvas depth.
        const ribbonGeometry = new three.PlaneGeometry(20, 11, mobile ? 42 : 70, mobile ? 22 : 34);
        ribbonMaterial = new three.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          side: three.DoubleSide,
          uniforms: {
            uTime: { value: 0 },
            uPointer: { value: new three.Vector2(0, 0) },
          },
          vertexShader: `
            uniform float uTime;
            uniform vec2 uPointer;
            varying vec2 vUv;
            void main() {
              vUv = uv;
              vec3 p = position;
              float wideWave = sin(uv.x * 9.0 + uTime * 0.38) * 0.20;
              float fineWave = cos(uv.y * 8.0 - uTime * 0.29) * 0.10;
              float pointerGlow = exp(-length(vec2(uv.x - (0.5 + uPointer.x * 0.22), uv.y - (0.5 - uPointer.y * 0.20))) * 8.0);
              p.z += wideWave + fineWave + pointerGlow * 0.35;
              p.y += sin(uv.x * 7.0 - uTime * 0.22) * 0.10;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime;
            uniform vec2 uPointer;
            varying vec2 vUv;
            void main() {
              float curve = sin(vUv.x * 8.0 + uTime * 0.22) * 0.075;
              float pointerLine = uPointer.y * 0.018;
              float ridge = exp(-pow((vUv.y - 0.52 - curve - pointerLine) * 10.0, 2.0));
              float arc = exp(-length((vUv - vec2(0.5 + uPointer.x * 0.12, 0.5 - uPointer.y * 0.08)) * vec2(1.0, 1.6)) * 5.0);
              vec3 deep = vec3(0.008, 0.017, 0.052);
              vec3 blue = vec3(0.055, 0.15, 0.42);
              vec3 lime = vec3(0.58, 0.91, 0.31);
              vec3 color = mix(deep, blue, smoothstep(0.0, 0.8, ridge + arc * 0.25));
              color = mix(color, lime, pow(max(arc, 0.0), 3.0) * 0.5);
              float alpha = 0.035 + ridge * 0.12 + arc * 0.05;
              gl_FragColor = vec4(color, alpha);
            }
          `,
        });
        const ribbon = new three.Mesh(ribbonGeometry, ribbonMaterial);
        ribbon.position.set(0, 0, -2.1);
        scene.add(ribbon);

        // Metallic sculpture: direct light moves with touch/mouse for a synchronized specular response.
        sculpture = new three.Group();
        const shellMaterial = new three.MeshPhysicalMaterial({
          color: 0x526fff,
          metalness: 0.78,
          roughness: 0.22,
          clearcoat: 1,
          clearcoatRoughness: 0.16,
          emissive: 0x10265f,
          emissiveIntensity: 0.28,
        });
        const shell = new three.Mesh(
          new three.TorusKnotGeometry(1.38, 0.19, mobile ? 116 : 184, 12, 2, 3),
          shellMaterial
        );
        sculpture.add(shell);

        const innerMaterial = new three.MeshPhysicalMaterial({
          color: 0xc7f36b,
          metalness: 0.62,
          roughness: 0.26,
          clearcoat: 0.9,
          transparent: true,
          opacity: 0.74,
          emissive: 0x253e0a,
          emissiveIntensity: 0.25,
        });
        const innerKnot = new three.Mesh(
          new three.TorusKnotGeometry(0.76, 0.065, mobile ? 92 : 144, 9, 3, 5),
          innerMaterial
        );
        innerKnot.rotation.set(0.75, 0.25, 0.35);
        sculpture.add(innerKnot);

        const core = new three.Mesh(
          new three.SphereGeometry(0.46, mobile ? 24 : 36, mobile ? 18 : 28),
          new three.MeshPhysicalMaterial({
            color: 0x101d47,
            metalness: 0.88,
            roughness: 0.18,
            clearcoat: 1,
            emissive: 0x071a4c,
            emissiveIntensity: 0.55,
          })
        );
        sculpture.add(core);

        const orbitBlue = new three.Mesh(
          new three.TorusGeometry(2.0, 0.012, 5, mobile ? 72 : 112),
          new three.MeshBasicMaterial({ color: 0x7ba2ff, transparent: true, opacity: 0.72 })
        );
        orbitBlue.rotation.set(0.7, 0.3, -0.5);
        sculpture.add(orbitBlue);

        const orbitLime = new three.Mesh(
          new three.TorusGeometry(2.18, 0.008, 4, mobile ? 64 : 96),
          new three.MeshBasicMaterial({ color: 0xc7f36b, transparent: true, opacity: 0.46 })
        );
        orbitLime.rotation.set(-0.45, 0.9, 0.3);
        sculpture.add(orbitLime);
        sculpture.position.set(mobile ? 1.15 : 3.15, mobile ? -1.45 : -0.05, 0);
        const sculptureScale = mobile ? 0.68 : 1;
        sculpture.scale.setScalar(sculptureScale);
        scene.add(sculpture);

        // Low-cost additive starfield; a per-particle phase drives its shimmer on the GPU.
        const particleCount = constrained ? (mobile ? 180 : 280) : (mobile ? 300 : 620);
        const positions = new Float32Array(particleCount * 3);
        const phases = new Float32Array(particleCount);
        for (let index = 0; index < particleCount; index += 1) {
          positions[index * 3] = (Math.random() - 0.5) * 19;
          positions[index * 3 + 1] = (Math.random() - 0.5) * 10;
          positions[index * 3 + 2] = -5 + Math.random() * 7;
          phases[index] = Math.random();
        }
        const particleGeometry = new three.BufferGeometry();
        particleGeometry.setAttribute("position", new three.BufferAttribute(positions, 3));
        particleGeometry.setAttribute("aPhase", new three.BufferAttribute(phases, 1));
        particleMaterial = new three.ShaderMaterial({
          transparent: true,
          depthWrite: false,
          blending: three.AdditiveBlending,
          uniforms: {
            uTime: { value: 0 },
            uPointer: { value: new three.Vector2(0, 0) },
          },
          vertexShader: `
            attribute float aPhase;
            uniform float uTime;
            uniform vec2 uPointer;
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
              vec3 p = position;
              p.z += sin(uTime * 0.65 + aPhase * 6.283) * 0.16;
              p.x += uPointer.x * 0.035 * (0.35 + aPhase);
              p.y += uPointer.y * 0.025 * (0.35 + aPhase);
              vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
              gl_Position = projectionMatrix * mvPosition;
              gl_PointSize = (1.2 + 2.0 * abs(sin(uTime * 0.9 + aPhase * 6.283))) * (18.0 / max(1.0, -mvPosition.z));
              vAlpha = 0.20 + 0.42 * abs(sin(uTime + aPhase * 6.283));
              vColor = mix(vec3(0.30, 0.48, 1.0), vec3(0.76, 0.96, 0.45), step(0.84, aPhase));
            }
          `,
          fragmentShader: `
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
              float distanceToCenter = length(gl_PointCoord - vec2(0.5));
              float glow = 1.0 - smoothstep(0.06, 0.5, distanceToCenter);
              gl_FragColor = vec4(vColor, glow * vAlpha);
            }
          `,
        });
        particles = new three.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        canvas.addEventListener("webglcontextlost", onContextLost, false);
        window.addEventListener("pointermove", onPointer, { passive: true });
        window.addEventListener("pointerdown", onPointer, { passive: true });
        document.addEventListener("visibilitychange", onVisibilityChange);
        resizeObserver = new ResizeObserver(resizeScene);
        resizeObserver.observe(host);
        intersectionObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (!visible && frameId !== null) {
            window.cancelAnimationFrame(frameId);
            frameId = null;
          } else {
            lastFrame = 0;
            scheduleFrame();
          }
        }, { threshold: 0.01 });
        intersectionObserver.observe(host);

        resizeScene();
      } catch {
        setFallback();
      }
    };

    setRenderState("loading");
    initialise();

    return () => {
      disposed = true;
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      if (resizeObserver) resizeObserver.disconnect();
      if (intersectionObserver) intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.removeEventListener("webglcontextlost", onContextLost);

      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => material.dispose());
          }
        });
      }
      if (renderer) renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      data-art-render={renderState}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${renderState === "active" ? "opacity-0" : "opacity-100"}`}
      >
        <div className="absolute inset-0 bg-[#050811]" />
        <div className="absolute -right-[18%] top-[5%] h-[74%] w-[76%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,89,217,0.32),transparent_67%)]" />
        <div className="absolute -left-[22%] bottom-[-18%] h-[60%] w-[72%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(199,243,107,0.12),transparent_68%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,8,17,0.06),rgba(5,8,17,0.52)_55%,rgba(5,8,17,0.12))]" />
      </div>
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 block h-full w-full transition-opacity duration-500 ${renderState === "active" ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,17,0.08),rgba(5,8,17,0.0)_42%,rgba(5,8,17,0.35))]" />
    </div>
  );
}
