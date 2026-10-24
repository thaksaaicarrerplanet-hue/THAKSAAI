# THAKSA.AI Homepage Hero Restoration & Smooth-Scroll Plan

**Scope for this PR:** restore the homepage to its existing GitHub visual direction and copy; keep the original perspective-wave grid background; make its interaction work with touch; add subtle transitions to the existing home sections without redesigning them. This plan deliberately does not introduce a new 3D sculpture, change brand styling, rewrite marketing copy, or add a custom scroll-jacking engine.

## 1. Non-negotiable design decisions

- **Restore, don't redesign.** Use the original `PaperHero.jsx` and original homepage composition from `preview` as the source of truth.
- **Keep the original ambient background.** Restore the established dark perspective-wave grid, blue/lime glow, dots, and floating orbs in `HeroBackgroundCanvas.jsx`. Do not replace it with a new Three.js object or a different art direction.
- **Keep the original copy and layout.** Retain the hero headline, description, specialization labels, button labels, and program dock as originally authored. The explicitly unwanted eyebrow “Industry–Academia Engineering Institution” remains removed.
- **Keep existing home sections.** Retain the original section order and each section's existing interactions; don't insert a new reactor/3D showcase as a substitute for the background.
- **Motion should support the existing design.** Use spring-smoothed hero parallax, natural native scrolling, reduced-motion-aware scroll-to-section actions, and restrained enter transitions. No scroll hijacking or transformed parent containers that could disrupt scroll-linked/sticky content.
- **One delivery unit.** Update the existing draft PR #111 on `work/preview-world-class-upgrade`. Prepare the page, canvas, motion behavior, and this plan in one consolidated Git commit; do not create more PRs or push a sequence of small commits. Check Vercel only after the complete code batch is pushed.

## 2. Implementation checklist

### A. `PaperHero.jsx`
- Restore the original centered headline, original body copy, specialization pills, primary/secondary CTA labels, and three-item bottom dock.
- Preserve the existing Framer Motion entrance timings and scroll-linked spring.
- Keep the requested institutional eyebrow removed.
- Make the CTA's in-page scroll honor `prefers-reduced-motion`.
- In reduced-motion mode, do not move/fade the headline in response to scroll.

### B. `HeroBackgroundCanvas.jsx`
- Restore the original 2D perspective-wave grid, ambient blue/lime radial glow, orbs, and vignette.
- Keep the existing lightweight Canvas renderer; do not introduce a heavyweight 3D model, shader material, postprocessing, or additional graphics dependency.
- Retain responsive grid density and capped pixel ratio.
- Replace fine-pointer-only tracking with Pointer Events so mouse, stylus, and touch can move the light field.
- On touch-down, update the reflection target immediately and briefly intensify the glow; while a finger moves, smoothly follow it; on touch release, ease the glow back toward center. Do not prevent native page scrolling or add forced device-orientation permissions.
- Use time-based smoothing so touch-follow feels similar across different refresh rates; cap frame delta after tab suspension.
- Pause the animation when the document is hidden; clean up all listeners on unmount. Honor reduced-motion preferences.

### C. `HomePage.jsx`
- Scope the ambient canvas to the homepage so unrelated public pages do not carry its animation.
- Restore the original order of the existing homepage sections and retain the branch's separate Capability Reactor immediately after the hero.
- Add an IntersectionObserver-driven, opacity-only reveal for below-the-fold sections. Reveal each section once as it enters the viewport.
- Use opacity only on the section root so no new transformed ancestor interferes with scroll-scrubbed text or sticky/pinned visuals.
- Disable section reveals under reduced-motion preferences or when IntersectionObserver is unavailable. Preserve all text and layouts.

### D. Existing section behavior
- Preserve the scroll-scrubbed manifesto and marquee in the proof strip.
- Preserve the animated program-selection interactions.
- Preserve the gallery's horizontal filmstrip behavior and its reduced-motion static browsing alternative.
- Preserve the founder/vision and Software Studio transitions already present.
- Do not change the content, layout, navigation, or design system of non-homepage routes as part of this correction.

## 3. Research references: inspiration, not templates

- **Lusion** — https://lusion.co/ and https://lusion.co/projects/  
  Study the cohesion between ambience, light, and motion. Apply that restraint to the existing wave-grid art rather than copying another studio's 3D objects.
- **Active Theory** — https://activetheory.net/  
  Study atmosphere, timing, visual hierarchy, and the way transitions guide attention; keep THAKSA's existing page composition.
- **Bruno Simon** — https://bruno-simon.com/  
  Study direct, understandable interaction and mobile-awareness. Do not turn this educational homepage into a game.
- **Utsubo** — https://www.utsubo.com/webgl-threejs-development  
  Performance as a design requirement; prefer simple, efficient effects where they provide the intended feel.
- **Unseen Studio** — https://unseen.co/world/  
  Study pacing and exploration cues without making content navigation obscure.
- **makemepulse** — https://www.makemepulse.com/what-we-do/  
  Study how motion and interactive technology can express a concept rather than decorate every component.

## 4. Acceptance criteria

### Visual fidelity
- Hero composition, headline, body copy, specialization pills, CTAs, and program dock match the original homepage, except the specifically rejected institutional eyebrow.
- The original wave-grid / dots / blue-lime glow background remains visible behind the homepage and remains fixed as content scrolls over it.
- No newly introduced metallic-knot scene or full-height editorial redesign.

### Interaction and motion
- Mouse movement changes the background glow smoothly.
- Touch-down/movement produces a visible reflection response aligned to the finger; release returns the glow smoothly without trapping page scroll.
- Existing hero parallax and scroll-linked section content continue to work.
- Below-the-fold sections softly fade in once as they enter view.
- Reduced-motion users see stable text and section content, with no forced smooth scroll.

### Performance and quality
- Canvas stays decorative with pointer-events disabled.
- DPR remains capped and the mobile grid uses fewer rows/columns.
- Animation pauses when the tab is hidden; listeners and pending frames are cleaned up.
- Lint, production build, bundle budgets, and browser smoke tests pass before review is marked ready.
- Verify the finished preview visually on desktop and a real touch device where available. A Vercel READY state verifies build/deployment status, not the quality of the physical-device experience.

## 5. Execution order

1. Record this plan in the repository.
2. Apply the original hero and original background restoration plus touch and section-transition behavior.
3. Commit all code and plan updates once on the existing work branch, updating the one existing PR.
4. After that consolidated push, inspect the one resulting Vercel preview and confirm CI status.
5. Keep the PR draft and do not merge to `preview` or `main` without the user's approval.


## 6. Validation record

The consolidated application-code commit `40f5a031d6b707e3588a98326144570a425fa696` passed these checks on October 24, 2026:

- Frontend ESLint: **passed**
- Vite production build: **passed**
- Compressed bundle budget: **passed**
- Backend JavaScript syntax: **passed**
- Playwright browser smoke and authentication regression tests: **passed** in [GitHub Actions run 40111802476](https://github.com/MuhammadMinhaj229/THAKSA_E-LEARNING/actions/runs/40111802476)

The validation run originally exposed a mismatch between the homepage restoration and the existing test: the Capability Reactor was expected to remain as a separate home section. It is now retained after the hero; it does not replace the original wave-grid background.

The remaining release step is to verify a preview deployment built from this corrected head. The manual Vercel deployment API hit the team's free-tier daily deployment limit, so the next attempt uses the repository's linked Git deployment flow instead of another manual deployment request.
