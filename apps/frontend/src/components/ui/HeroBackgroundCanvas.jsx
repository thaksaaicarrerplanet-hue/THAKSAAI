import React, { useEffect, useRef } from 'react';

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;

  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  varying vec2 v_uv;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_pointer;

  void main() {
    vec2 uv = v_uv;
    float aspect = u_resolution.x / max(u_resolution.y, 1.0);
    float t = u_time;

    vec2 pointerDelta = (uv - u_pointer) * vec2(aspect, 1.0);
    float pointerGlow = exp(-dot(pointerDelta, pointerDelta) * 10.0);
    float pointerWave = exp(-length(pointerDelta) * 7.0)
      * sin(length(pointerDelta) * 31.0 - t * 2.1) * 0.012;

    float wave = sin(uv.x * 7.5 + t * 0.44) * 0.020
      + cos(uv.x * 3.3 - t * 0.27) * 0.032
      + pointerWave;

    float horizon = 0.34 + 0.035 * sin(uv.x * 2.0 + t * 0.13) + wave * 0.25;
    float warpedY = uv.y + wave * smoothstep(0.25, 0.90, uv.y);
    float depth = max(0.075, warpedY - horizon);

    float xCoord = (uv.x - 0.5) * aspect * 7.8 / depth + wave * 0.8;
    float yCoord = 0.37 / depth + wave * 4.5;

    float xDistance = abs(fract(xCoord + 0.5) - 0.5);
    float yDistance = abs(fract(yCoord + 0.5) - 0.5);
    float lineX = 1.0 - smoothstep(0.012, 0.035, xDistance);
    float lineY = 1.0 - smoothstep(0.014, 0.040, yDistance);
    float intersections = lineX * lineY;

    float gridFade = smoothstep(0.34, 0.53, uv.y)
      * (1.0 - smoothstep(0.91, 1.0, uv.y));
    float ridge = 0.5 + 0.5 * sin(uv.x * 8.0 + t * 0.38 + wave * 16.0);

    vec3 blue = vec3(0.21, 0.36, 0.96);
    vec3 lime = vec3(0.78, 0.95, 0.43);
    vec3 lineColor = mix(blue, lime, 0.14 + ridge * 0.30 + pointerGlow * 0.16);

    float alpha = (max(lineX, lineY) * 0.22 + intersections * 0.24) * gridFade;
    alpha += pointerGlow * 0.09;
    alpha = clamp(alpha, 0.0, 0.48);

    gl_FragColor = vec4(lineColor, alpha);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Unable to allocate WebGL shader.');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'Unknown shader compilation error.';
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
}

/**
 * Transparent WebGL wave-grid backdrop for the homepage hero only.
 * The containing hero owns positioning; this component never sticks to the viewport
 * and therefore cannot affect the other pages as visitors scroll.
 */
export default function HeroBackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let gl;
    let program;
    let buffer;
    let animationFrame = 0;
    let resizeObserver;
    let disposed = false;
    let reducedMotion = false;
    let currentX = 0.5;
    let currentY = 0.44;
    let targetX = 0.5;
    let targetY = 0.44;

    const pointerUniform = null;
    const timeUniform = null;
    const resolutionUniform = null;
    let activePointerUniform = pointerUniform;
    let activeTimeUniform = timeUniform;
    let activeResolutionUniform = resolutionUniform;
    let positionAttribute = -1;

    const mediaQuery = typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    reducedMotion = Boolean(mediaQuery?.matches);

    try {
      gl = canvas.getContext('webgl', {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: 'low-power',
      });

      if (!gl) return undefined;

      const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
      const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
      program = gl.createProgram();
      if (!program) throw new Error('Unable to allocate WebGL program.');

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || 'Unable to link WebGL program.');
      }

      buffer = gl.createBuffer();
      if (!buffer) throw new Error('Unable to allocate WebGL buffer.');

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );

      gl.useProgram(program);
      positionAttribute = gl.getAttribLocation(program, 'a_position');
      activeResolutionUniform = gl.getUniformLocation(program, 'u_resolution');
      activeTimeUniform = gl.getUniformLocation(program, 'u_time');
      activePointerUniform = gl.getUniformLocation(program, 'u_pointer');

      gl.enableVertexAttribArray(positionAttribute);
      gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    } catch {
      // The CSS atmosphere/grid remains visible when WebGL is unavailable.
      if (gl && program) gl.deleteProgram(program);
      if (gl && buffer) gl.deleteBuffer(buffer);
      return undefined;
    }

    const draw = (timeSeconds) => {
      if (!gl || disposed) return;

      if (reducedMotion) {
        currentX = targetX;
        currentY = targetY;
      } else {
        currentX += (targetX - currentX) * 0.055;
        currentY += (targetY - currentY) * 0.055;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(activeResolutionUniform, canvas.clientWidth, canvas.clientHeight);
      gl.uniform1f(activeTimeUniform, reducedMotion ? 0.0 : timeSeconds);
      gl.uniform2f(activePointerUniform, currentX, 1.0 - currentY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.15 : 1.5);
      const width = Math.max(1, Math.round(rect.width * ratio));
      const height = Math.max(1, Math.round(rect.height * ratio));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      if (reducedMotion) draw(0);
    };

    const render = (timestamp) => {
      animationFrame = 0;
      if (disposed || document.visibilityState === 'hidden') return;
      draw(timestamp / 1000);
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(render);
    };

    const startAnimation = () => {
      if (!disposed && !reducedMotion && document.visibilityState !== 'hidden' && !animationFrame) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right
        && event.clientY >= rect.top && event.clientY <= rect.bottom;

      if (inside) {
        targetX = Math.min(1, Math.max(0, (event.clientX - rect.left) / Math.max(1, rect.width)));
        targetY = Math.min(1, Math.max(0, (event.clientY - rect.top) / Math.max(1, rect.height)));
      } else {
        targetX = 0.5;
        targetY = 0.44;
      }

      if (reducedMotion) draw(0);
    };

    const handleMotionPreference = (event) => {
      reducedMotion = Boolean(event.matches);
      if (reducedMotion) {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        draw(0);
      } else {
        startAnimation();
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      } else {
        draw(0);
        startAnimation();
      }
    };

    resize();
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);
    }
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    mediaQuery?.addEventListener?.('change', handleMotionPreference);
    draw(0);
    startAnimation();

    return () => {
      disposed = true;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibility);
      mediaQuery?.removeEventListener?.('change', handleMotionPreference);
      if (gl) {
        if (program) gl.deleteProgram(program);
        if (buffer) gl.deleteBuffer(buffer);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        backgroundColor: '#050811',
        backgroundImage: [
          'radial-gradient(ellipse at 18% 25%, rgba(54, 89, 217, 0.23), transparent 45%)',
          'radial-gradient(ellipse at 82% 62%, rgba(199, 243, 107, 0.10), transparent 38%)',
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
          'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: 'auto, auto, 44px 44px, 44px 44px',
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  );
}
