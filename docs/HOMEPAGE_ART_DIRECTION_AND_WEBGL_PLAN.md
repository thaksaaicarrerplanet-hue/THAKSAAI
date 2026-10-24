# THAKSA.AI Homepage Hero Restoration & Real 3D Background Plan

**Scope for this PR:** preserve the homepage's established copy, colors, composition, and sections while restoring the visual depth expected from the hero background. Replace the current Canvas 2D perspective illusion with a real Three.js/WebGL displaced wave surface, keep the blue/lime grid language, and make the effect robust on mobile, reduced-motion devices, and browsers without WebGL.

## 1. Non-negotiable design decisions

- **Restore, don't redesign.** Keep the original centered hero, type hierarchy, copy, specialization labels, CTAs, and program dock. Do not turn this into a new marketing page.
- **Use actual 3D rendering.** The hero background must use Three.js with a perspective camera and a displaced PlaneGeometry rendered through WebGL shaders. A 2D canvas perspective drawing is not an acceptable substitute for this requirement.
- **Preserve the original art direction.** Keep the near-black navy base, electric-blue and lime accents, perspective grid, subtle dots, atmospheric glow, and restrained movement. No metallic knot, floating product sculpture, stock video, or new art direction.
- **Protect the foreground.** Keep the background decorative, fixed, aria-hidden, and pointer-events: none; ensure hero text, CTAs, navigation, and ordinary page scrolling remain usable.
- **Respect motion and hardware.** Use capped device pixel ratio and lower mesh density on smaller screens; pause while the document is hidden; clean up event listeners, animation frames, geometry, material, and renderer; render a static frame when reduced motion is requested.
- **One delivery unit.** Commit the renderer and this plan together to the existing work branch and PR #111. Do not merge into preview or main without explicit approval.

## 2. File-by-file implementation checklist

### A. apps/frontend/src/components/ui/HeroBackgroundCanvas.jsx

- Replace Canvas 2D drawing with a real Three.js WebGLRenderer, PerspectiveCamera, subdivided PlaneGeometry, and ShaderMaterial.
- Animate vertex displacement with multiple smooth waves to create real mesh depth and change surface geometry over time.
- Draw the wave-grid and subtle intersection dots in the fragment shader, using the original navy/blue/lime palette and a pointer-responsive glow.
- Add smooth mouse, stylus, and touch tracking using Pointer Events; add a brief touch/click ripple, return the target toward center on touch release, and never prevent native scrolling.
- Add subtle camera parallax and frame-rate-independent smoothing with a capped delta to avoid a jump after tab suspension.
- Cap pixel ratio at 1.15 on mobile and 1.5 on desktop; use a lower mesh subdivision on mobile.
- Respect reduced-motion settings (static wave, no pointer/camera animation), pause while hidden, and safely dispose all GPU resources/listeners/frames on unmount.
- Detect WebGL initialization failure and preserve the dark blue/lime atmosphere with a CSS grid fallback. Mark the renderer mode in a data attribute for debugging.
- Keep the canvas transparent so its background glow and the site's original visual style remain intact.

### B. apps/frontend/src/pages/HomePage/sections/PaperHero.jsx

- Keep the original headline “Real Engineers. Real Code. Real Careers.”, existing body copy, specialization pills, CTAs, and three-item program dock.
- Preserve existing entrance animations and spring-smoothed scroll parallax.
- Keep the previously rejected institutional eyebrow removed.
- Respect reduced-motion preferences for scroll-linked text and in-page smooth scrolling.

### C. apps/frontend/src/pages/HomePage/HomePage.jsx

- Keep the 3D canvas scoped to the homepage rather than all public routes.
- Preserve the existing home section order and content, including Capability Reactor as a separate section after the hero.
- Keep restrained opacity-only reveal transitions for lower sections; do not add transformed ancestor wrappers that can interfere with sticky or scroll-scrubbed elements.
- Disable reveal transitions when reduced motion is requested or IntersectionObserver is unavailable.

### D. Validation and preview

- Run frontend lint, Vite production build, compressed bundle-budget check, backend JavaScript syntax, and Playwright browser smoke/auth regression checks.
- Verify that the component reports data-background-renderer="webgl" when hardware/browser WebGL is available and falls back gracefully otherwise.
- Review desktop/mobile sizing, pointer/touch response, reduced-motion behavior, page scrolling, and text contrast.
- Confirm a Vercel preview belongs to the exact pushed commit before presenting it as current. A READY deployment built from an older SHA is not the final preview.
- Keep the PR draft and unmerged until the user approves.

## 3. Art-direction references (inspiration, not templates)

- Lusion — https://lusion.co/ — atmospheric depth and light.
- Active Theory — https://activetheory.net/ — motion timing and hierarchy.
- Bruno Simon — https://bruno-simon.com/ — direct interaction and mobile awareness.
- Utsubo — https://www.utsubo.com/webgl-threejs-development — performance-minded WebGL craft.
- Unseen Studio — https://unseen.co/world/ — pacing and exploration cues.
- makemepulse — https://www.makemepulse.com/what-we-do/ — motion that serves a concept.

## 4. Known delivery constraint

The previously checked Vercel project rejected a manual deploy because its free-tier daily deployment quota had been exceeded. Do not misrepresent an older READY deployment as the new 3D build. After the single consolidated Git update, inspect GitHub checks and Vercel's deployment state for the exact new commit.