import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const VERTEX_SHADER = [
  "uniform float uTime;",
  "uniform vec2 uPointer;",
  "uniform float uPulse;",
  "varying vec2 vGridPosition;",
  "varying float vWave;",
  "void main() {",
  "  vec3 displaced = position;",
  "  float waveA = sin(position.x * 0.105 + uTime * 0.74 + position.y * 0.028) * 1.55;",
  "  float waveB = cos(position.y * 0.118 - uTime * 0.58 + position.x * 0.045) * 1.05;",
  "  float pointerDistance = distance(position.xy, uPointer);",
  "  float pointerField = exp(-pointerDistance * 0.055);",
  "  float ripple = sin(pointerDistance * 0.42 - uTime * 3.0) * pointerField * uPulse * 1.9;",
  "  float wave = waveA + waveB + ripple;",
  "  displaced.z += wave;",
  "  vGridPosition = position.xy;",
  "  vWave = wave;",
  "  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);",
  "}",
].join("\n");

const FRAGMENT_SHADER = [
  "uniform float uTime;",
  "uniform vec2 uPointer;",
  "uniform float uPulse;",
  "varying vec2 vGridPosition;",
  "varying float vWave;",
  "void main() {",
  "  vec2 gridCoordinates = vGridPosition / 3.25;",
  "  vec2 gridCell = abs(fract(gridCoordinates - 0.5) - 0.5);",
  "  vec2 lineWidth = max(fwidth(gridCoordinates), vec2(0.0001));",
  "  float lineDistance = min(gridCell.x / lineWidth.x, gridCell.y / lineWidth.y);",
  "  float gridLine = 1.0 - smoothstep(0.0, 1.15, lineDistance);",
  "  vec2 dotCell = abs(fract(gridCoordinates + 0.5) - 0.5);",
  "  float dotPattern = 1.0 - smoothstep(0.035, 0.105, length(dotCell));",
  "  float limeBias = smoothstep(-0.15, 0.9, sin(vGridPosition.x * 0.046 + uTime * 0.18));",
  "  vec3 electricBlue = vec3(0.24, 0.39, 1.0);",
  "  vec3 acidLime = vec3(0.79, 0.96, 0.43);",
  "  vec3 lineColor = mix(electricBlue, acidLime, limeBias * 0.5);",
  "  float pointerDistance = length(vGridPosition - uPointer);",
  "  float pointerGlow = exp(-pointerDistance * 0.038);",
  "  float waveHighlight = 0.5 + 0.5 * sin(vWave * 1.1 + uTime * 0.5);",
  "  float depthFade = 0.24 + 0.76 * (1.0 - smoothstep(-56.0, 20.0, vGridPosition.y));",
  "  float edgeFade = 1.0 - smoothstep(55.0, 79.0, abs(vGridPosition.x));",
  "  vec3 color = lineColor * (0.72 + waveHighlight * 0.28);",
  "  color += vec3(0.12, 0.20, 0.52) * pointerGlow * (0.25 + uPulse * 0.8);",
  "  float alpha = 0.025 + gridLine * 0.39 + dotPattern * 0.2;",
  "  alpha += pointerGlow * (0.035 + uPulse * 0.13);",
  "  alpha *= depthFade * edgeFade;",
  "  alpha = clamp(alpha, 0.0, 0.58);",
  "  gl_FragColor = vec4(color, alpha);",
  "}",
].join("\n");

/**
 * Real WebGL ambience: a displaced Three.js wave surface with a shader-drawn
 * grid, blue/lime highlights and pointer-driven ripples. It is decorative,
 * pauses when hidden, and uses capped pixel density for mobile performance.
 */
export default function HeroBackgroundCanvas() {
  const canvasRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const isMobile = window.innerWidth < 768;
    let renderer;
    let geometry;
    let material;
    let mesh;
    let frameId = null;
    let isVisible = document.visibilityState === "visible";
    let lastFrameTime = 0;
    let elapsed = 0;

    const baseBackground = [
      "radial-gradient(ellipse at 50% 42%, rgba(54, 89, 217, 0.2) 0%, transparent 62%)",
      "radial-gradient(ellipse at 68% 68%, rgba(199, 243, 107, 0.055) 0%, transparent 56%)",
      "#050811",
    ].join(", ");
    const fallbackBackground = [
      "radial-gradient(ellipse at 50% 42%, rgba(54, 89, 217, 0.2) 0%, transparent 62%)",
      "radial-gradient(ellipse at 68% 68%, rgba(199, 243, 107, 0.055) 0%, transparent 56%)",
      "repeating-linear-gradient(0deg, rgba(82, 126, 255, 0.075) 0 1px, transparent 1px 38px)",
      "repeating-linear-gradient(90deg, rgba(82, 126, 255, 0.075) 0 1px, transparent 1px 38px)",
      "#050811",
    ].join(", ");

    canvas.style.background = baseBackground;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: "low-power",
        preserveDrawingBuffer: false,
      });
    } catch {
      // Keep the page visually coherent on browsers/devices without WebGL.
      canvas.style.background = fallbackBackground;
      canvas.dataset.backgroundRenderer = "css-fallback";
      return undefined;
    }

    canvas.dataset.backgroundRenderer = "webgl";
    renderer.setClearColor(0x050811, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.15 : 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(49, 1, 0.1, 260);
    camera.position.set(0, 34, 52);
    camera.lookAt(0, 0, -15);

    geometry = new THREE.PlaneGeometry(
      158,
      150,
      isMobile ? 88 : 132,
      isMobile ? 82 : 116
    );
    material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, -10) },
        uPulse: { value: 0 },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(0, -3, -15);
    scene.add(mesh);

    const pointer = {
      x: 0,
      y: -10,
      targetX: 0,
      targetY: -10,
      pulse: 0,
    };

    const resetPointer = () => {
      pointer.targetX = 0;
      pointer.targetY = -10;
    };

    const movePointerToEvent = (event) => {
      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      pointer.targetX = (event.clientX / width - 0.5) * 142;
      pointer.targetY = (0.5 - event.clientY / height) * 132;
    };

    const resize = () => {
      const width = Math.max(window.innerWidth, 1);
      const height = Math.max(window.innerHeight, 1);
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, width < 768 ? 1.15 : 1.5)
      );
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      requestFrame();
    };

    const renderFrame = () => {
      frameId = null;
      if (!isVisible) return;

      const now = performance.now();
      const delta = lastFrameTime === 0 ? 1 / 60 : Math.min((now - lastFrameTime) / 1000, 0.05);
      lastFrameTime = now;

      if (!reducedMotion) {
        elapsed += delta;
        const easing = 1 - Math.exp(-delta * 7.5);
        pointer.x += (pointer.targetX - pointer.x) * easing;
        pointer.y += (pointer.targetY - pointer.y) * easing;
        pointer.pulse = Math.max(0, pointer.pulse - delta * 1.65);

        material.uniforms.uTime.value = elapsed;
        material.uniforms.uPointer.value.set(pointer.x, pointer.y);
        material.uniforms.uPulse.value = pointer.pulse;

        // Restrained camera parallax makes the surface depth legible without steering page scroll.
        camera.position.x += (pointer.x * 0.018 - camera.position.x) * easing;
        camera.lookAt(pointer.x * 0.009, 0, -15);
      }

      renderer.render(scene, camera);
      if (!reducedMotion && isVisible) {
        frameId = window.requestAnimationFrame(renderFrame);
      }
    };

    function requestFrame() {
      if (isVisible && frameId === null) {
        frameId = window.requestAnimationFrame(renderFrame);
      }
    }

    const handlePointerMove = (event) => {
      if (reducedMotion) return;
      movePointerToEvent(event);
      requestFrame();
    };

    const handlePointerDown = (event) => {
      if (reducedMotion) return;
      movePointerToEvent(event);
      pointer.pulse = event.pointerType === "touch" ? 1 : 0.5;
      requestFrame();
    };

    const handlePointerUp = (event) => {
      if (reducedMotion || event.pointerType !== "touch") return;
      resetPointer();
      requestFrame();
    };

    const handlePointerOut = (event) => {
      if (reducedMotion || event.pointerType === "touch" || event.relatedTarget !== null) return;
      resetPointer();
      requestFrame();
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (!isVisible && frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      } else if (isVisible) {
        lastFrameTime = 0;
        requestFrame();
      }
    };

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    if (!reducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("pointerdown", handlePointerDown, { passive: true });
      window.addEventListener("pointerup", handlePointerUp, { passive: true });
      window.addEventListener("pointercancel", handlePointerUp, { passive: true });
      window.addEventListener("pointerout", handlePointerOut, { passive: true });
    }

    resize();

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (!reducedMotion) {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointercancel", handlePointerUp);
        window.removeEventListener("pointerout", handlePointerOut);
      }
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-testid="hero-background-webgl"
      data-background-renderer="pending"
      className="fixed inset-0 z-0 block h-screen w-screen pointer-events-none"
    />
  );
}
