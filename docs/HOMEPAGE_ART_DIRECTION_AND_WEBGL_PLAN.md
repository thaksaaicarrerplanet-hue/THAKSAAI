# THAKSA.AI Homepage — Artistic Direction & WebGL Integration Plan

**Status:** First implementation pass on `work/preview-world-class-upgrade`. This is a draft for review; it has not been merged into `preview` or `main`.

## Creative north star

Create a dark, editorial digital-art environment that feels authored for THAKSA.AI rather than assembled from generic SaaS cards. The site should balance three things:

1. **An unmistakable visual signature:** one sculptural, metallic/iridescent artwork and a restrained electric-lime / ultramarine palette.
2. **Interaction with purpose:** cursor and touch change the artwork's light/reflection and orientation; section motion explains content instead of competing with it.
3. **Quiet engineering:** defer expensive work, cap pixel ratio and particle count, pause out of view, respect reduced motion, and keep every core page/action usable without WebGL.

This is an original interpretation of creative-web references, not a reproduction of their designs.

## Research references

### 1. Lusion — expressive realtime art
- Website: https://lusion.co/
- About: https://lusion.co/about/
- Work: https://lusion.co/projects/
- Why it matters: Lusion frames the site as an interactive creative production, using authored real-time 3D, procedural motion, and playful interactions. Communication Arts' Interactive Annual 30 write-up describes its astronaut-led experience, fluid simulation, mobile movement interactions, and asynchronous loading/compression approach: https://biblio.udb.edu.sv/biblioteca/contenido/pdf/ca/24-2024.pdf
- THAKSA adaptation: a metallic abstract knot and translucent light field rather than a literal object or imported studio asset; a pointer-driven specular highlight; use touch events on mobile; never require tilt or motion permissions for the base experience.

### 2. Active Theory — cinematic spatial atmosphere
- Website: https://activetheory.net/
- Awwwards reference: https://www.awwwards.com/sites/active-theory-v5
- Why it matters: cinematic environments, depth, atmospheric lighting, restrained calls to action, and motion choreographed as a whole.
- Research note: the current official homepage is JavaScript-rendered and did not expose useful page text in the available text view. The recommendation here is based on the public site and its visual portfolio references, not claims about its internal implementation.
- THAKSA adaptation: stronger dark-to-light composition, less card chrome, art with a focal point, controlled section transitions, and headline typography that remains legible in front of the scene.

### 3. Bruno Simon — interaction discipline
- Website: https://bruno-simon.com/
- Why it matters: a genuinely interactive 3D world, explicit mobile controls, and visible quality/renderer controls. The site identifies Three.js as its renderer.
- THAKSA adaptation: keep the controls natural (move a finger to move the light), provide a graceful no-WebGL fallback, and keep the experience lightweight rather than turning the homepage into a game.

### 4. Utsubo — production-minded realtime graphics
- Website: https://www.utsubo.com/
- WebGL / Three.js: https://www.utsubo.com/webgl-threejs-development
- Why it matters: it explicitly presents performance as a design decision and describes deferred 3D, static fallback, asset compression, and rendering alternatives.
- THAKSA adaptation: treat frame rate, startup cost, responsive behavior, and SEO/content as part of the design specification—not a cleanup task after the visuals.

### 5. Unseen Studio — a navigable visual world
- Website: https://unseen.co/world/
- Why it matters: the portfolio's “drag to explore” concept makes exploration itself part of the identity.
- THAKSA adaptation: add restrained interactive moments to the program gallery and Software Studio showcase, but keep standard links and buttons discoverable and functional.

### 6. makemepulse — emotion with a purpose
- Website: https://www.makemepulse.com/what-we-do/
- Why it matters: the studio joins creative direction, UX, motion and realtime technology, and describes mobile interaction as a first-class experience.
- THAKSA adaptation: every animation should reinforce the learning journey or proof of work rather than exist only as decoration.

## Homepage integration map

| Section / component | Art direction | Motion / interaction | Purpose and guardrails |
|---|---|---|---|
| Navbar + footer | Minimal editorial chrome; thin borders, strong spacing, small deliberate active states | Underline/marker transitions; mobile menu with clear focus management | Keep navigation obvious. Never let 3D effects impair reading, focus, or tap targets. |
| Hero — `PaperHero.jsx` | Oversized three-line manifesto, editorial italic accent, original sculptural WebGL artwork, less panel-heavy CTA and program links | Pointer/touch moves the reflection light; the sculpture gently shifts; no cursor lock or gesture requirement | The hero should be the site's signature. The “Industry–Academia Engineering Institution” eyebrow was removed. |
| Hero background — `HeroBackgroundCanvas.jsx` | Real Three.js metallic knot, orbit lines, subtle translucent wave field and sparse star points | Smoothed Pointer Events position drives light and orientation; local to hero | Dynamic import, no post-processing, capped DPR/particles, pause when hidden/outside viewport, single-frame reduced-motion mode, CSS fallback. |
| Capability Reactor | Retain as the main explanatory 3D “artifact,” with one selected learning pathway clearly linked to its outcomes | Lazily mount near viewport; selected module updates visible details | Avoid simultaneously animating multiple high-cost scenes; keep accessible pathway controls available if WebGL is unavailable. |
| Proof / manifesto strip — `PaperProofStrip.jsx` | Big typographic statement, deliberate whitespace, contrast between the manifesto and proof cards | Scroll-linked word emphasis; make the marquee optional/static for reduced motion | Use proof and outcomes, not unsupported numerical claims. Ensure scroll animation never hides content. |
| Program routing — `PaperAudienceRouting.jsx` | Three distinct program panels as an editorial triptych; each gets its own accent and sculptural icon language | Selecting a program changes the content and accent; subtle depth on hover only | Selection must work by touch and keyboard, with visible selected state. Reduce visual chrome and avoid tilt on small screens. |
| Methodology — `PaperMethodology.jsx` | A single continuous “Assess → Train → Build → Demonstrate” track with numbered milestones and a strong path motif | Scroll draws the path; milestone details reveal on entry | Keep the full process in the DOM/readable without animation; no mandatory scroll-jacking. |
| Gallery — `PaperGallery.jsx` | Asymmetric editorial image wall, varied crop ratios, clear captions, real workshop proof | Slow horizontal drift only where motion is allowed; touch-scroll as the default mobile interaction | Keep duplicate marquee items decorative, defer images, supply intrinsic dimensions/srcset, and allow reduced-motion users to browse a static strip. |
| Founder / vision — `PaperFounderQuote.jsx` | Human portrait as a photographic anchor against large typographic quote; reduce decorative effects competing with the person | One restrained scroll reveal; interactive commitments use clear hover/focus/selected states | Do not let the visual treatment feel like a dashboard. Avoid perpetual blinking if it is not meaningfully informative. |
| Software Studio — `PaperStudioHighlight.jsx` | Treat one real capability as a miniature case study: problem → approach → shipped outcome, with a device/browser mockup or code artifact | One controlled spotlight/detail reveal; links route to real work/contact paths | Prefer genuine screenshots and verified project details. Never fabricate metrics, customer logos, or outcomes. |
| Closing CTA — `PaperClosingCTA.jsx` | A quiet final composition with two unmistakable routes: training and software studio | Selected service changes the message/context; use a small, meaningful hover response | Make the primary next step clear, preserve query context, and keep WhatsApp/contact links usable on mobile. |

## WebGL behavior and performance budget

The hero background should be beautiful without becoming the page's main performance risk.

- **Load:** import Three.js only after the hero component mounts. Do not add a model/video download or post-processing pipeline for the ambient layer.
- **Resolution:** cap device pixel ratio at 1.5 on desktop, 1.2 on ordinary mobile, and 1.0 for constrained devices.
- **Particles:** target a maximum of ~620 on desktop, ~300 on mobile, and ~180–280 on constrained devices.
- **Frame pacing:** target 45 fps on desktop and 30 fps on mobile/constrained hardware; prefer stable animation over a noisy 60 fps loop that drains battery.
- **Lifecycle:** pause when the tab is hidden or the hero is outside the viewport; cancel animation frames and dispose geometry/materials on unmount.
- **Touch sync:** use Pointer Events for mouse, stylus, and touch. Normalize coordinates against the hero's actual bounding box and apply time-based damping so the highlight does not lag differently at different frame rates.
- **Fallbacks:** preserve an atmospheric CSS background when WebGL is unsupported, fails, or loses its context. Reduced-motion mode renders a still scene.
- **Visual integrity:** keep the art behind the text, with a responsive overlay to protect contrast. No overlay or canvas should intercept taps.
- **Validation targets:** verify no console errors, no leaked frames after route changes, no horizontal overflow at 320/360/390/768/1024/1440 px, and touch feedback feels immediate on an actual phone. Test Safari/iOS as well as Chromium; a successful Vercel build alone does not validate those device behaviors.

## Delivery sequence

1. **Pass A — art foundation:** implement the hero-scoped Three.js artwork, remove the institutional eyebrow, tune editorial typography, and add mouse/touch reactive lighting with adaptive resource caps.
2. **Pass B — section rhythm:** give the proof strip, program routing, methodology, gallery, founder story, and studio highlight different compositions so the page does not repeat the same card pattern.
3. **Pass C — motion quality:** unify easing and reveal timing, remove redundant perpetual animation, and enforce reduced-motion behavior across all motion-heavy sections.
4. **Pass D — visual QA:** test on mobile hardware and a large desktop; inspect Vercel's actual preview deployment; measure Core Web Vitals and bundle impact; only then promote the work after review.

## Scope / claims

The hero and background changes in this branch are an initial implementation pass. The rest of the homepage section ideas above are the recommended integration backlog—not a claim that all sections have already been rebuilt. The external preview is protected, so a real browser-based visual inspection must still be performed in an authenticated preview session before calling the work finished.


## Research refresh — current references and specific integration ideas

This addendum incorporates a live review of Lusion's current homepage and the available Active Theory portfolio case study, plus current Three.js and MDN guidance. The source sites evolve; these are design observations, not promises that every detail remains unchanged.

### Lusion: order the story, not just the effects

The [current Lusion homepage](https://lusion.co/) moves from an interactive creative promise into an approach statement, featured work, a more immersive closing passage and a contact invitation. Its official copy describes combining design, motion, 3D and development into distinctive digital experiences. A [mesh3d case study of an earlier homepage](https://mesh3d.gallery/website/lusion-realise-your-creative-ideas) documents cursor-reactive glossy geometry, scroll-connected scenes and a featured-project gallery. The useful lesson is **one unmistakable visual signature → proof of craft → explanation of method → a clear CTA**. The exact prior scene is historical inspiration, not a requirement to copy.

### Active Theory: make input visibly matter

The [current official Active Theory site](https://activetheory.net/) is JavaScript-rendered, so a static text view cannot completely verify its live details. In its [Communication Arts portfolio interview](https://www.commarts.com/webpicks/active-theory-2), Active Theory described a simple work/contact pill affected by scroll velocity, AI-assisted project discovery, and WebGL interactions reacting to mouse or touch. Its [Experiments Hub interview](https://www.commarts.com/webpicks/experiments-hub) describes a functional catalog whose experiments receive room to stand on their own.

**THAKSA integration:** keep navigation conventional but give the active marker slight velocity-aware easing; let the hero light and sculpture directly reflect a pointer or tap; make each section have one memorable reaction. Avoid adding AI chat or multiplayer effects without a real product need.

### Additional touch-first reference: Bruno Simon

[Bruno Simon's 3D portfolio](https://bruno-simon.com/) offers a drivable scene and explicit desktop/mobile controls. This is useful proof that unusual interactions need obvious instructions and fallback controls. THAKSA should borrow the **clear touch affordance and quality-conscious approach**, not the game-like whole-site navigation: visitors still need to quickly find workshops, CRT, internships, final-year projects and studio services.

### Deeper section integrations

- **Hero:** use the hero sculpture as a responsive cover-art composition. Keep the headline left on desktop; on narrow screens position the art high/back with a darker gradient behind text. Touch-down should trigger a short highlight pulse—not long camera movement—and must not disable normal page scrolling.
- **Capability Reactor:** let one active node create a luminance/geometry response and update the explanatory panel. The SVG fallback must keep all four choices visible.
- **Proof strip:** prioritize a single strong manifesto with scroll-linked word emphasis; make a looped technology ribbon visually secondary. Facts and counts remain editorial proof only when verified.
- **Audience routing:** make student / college / studio choices explicit, then reveal a tactile detail surface. Keep selected state, route/query state and content legible if all animation is disabled.
- **Methodology:** the four stages become one connecting thread with a single active milestone; avoid four concurrent WebGL renderers or scroll-jacking.
- **Gallery:** make the photography feel like an edited magazine spread, not an infinite ticker. Use real event/build imagery, different but controlled crop ratios, captions, lazy-loading and touch-scrolling.
- **Founder/vision:** keep this as the human pause—authentic portrait or restrained monogram and one attributable statement. Avoid fake results, unverifiable customer claims or additional 3D just to fill space.
- **Software Studio:** show real project/process proof where available, with capability demos explicitly labeled as demos. Use screenshots/device frames and problem → approach → outcome, not three identical cards.
- **Closing CTA:** echo the hero's filament/light motif to close the story. Give separate and obvious next steps for training and software studio. No forced scroll, autoplay audio or animation-dependent controls.

### Source notes and technical guardrails

- [Lusion — official current homepage](https://lusion.co/): interactive 3D storytelling, approach, featured work and closing call to action.
- [Lusion — historical homepage description on mesh3d](https://mesh3d.gallery/website/lusion-realise-your-creative-ideas): glossy cursor-reactive sculpture and scroll-connected visual journey; useful as a past-version case study.
- [Active Theory — official site](https://activetheory.net/): live scene should be examined in a real browser; text scraping alone is incomplete.
- [Active Theory — Communication Arts interview](https://www.commarts.com/webpicks/active-theory-2): scroll-velocity navigation and mouse/touch-driven WebGL effects were described for the portfolio version discussed in the article.
- [Active Theory Experiments Hub](https://www.commarts.com/webpicks/experiments-hub): experiments grouped into a discoverable catalog.
- [Bruno Simon](https://bruno-simon.com/): interactive 3D navigation with explicit mobile controls.
- [mesh3d's current Three.js gallery](https://www.mesh3d.gallery/): use as a live moodboard for current projects including work attributed to Lusion and Active Theory.
- [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer): renderer pixel ratio, sizing, lifecycle and resource disposal APIs; see also the [responsive-rendering guide](https://threejs.org/manual/pages/responsive.html), which warns about excessive high-DPR buffers on heavy scenes.
- [MDN reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion): non-essential motion should be reduced or replaced when the visitor requests it.

### Integration priorities

1. **First — hero reliability:** exactly one hero-scoped renderer, working light movement, touch pulse and mobile composition; verify on a real phone and not only in a desktop emulator.
2. **Second — composition diversity:** vary section rhythms (typographic statement, interactive artifact, audience chooser, timeline, photo wall, human quote, case studies, CTA) so the page doesn't repeat the same card template.
3. **Third — interaction polish:** shared easing and material language, purposeful hover/focus/pressed states, no canvas hit-testing over controls.
4. **Fourth — measured validation:** lint, production build, bundle budget, Playwright smoke tests, reduced-motion check, mobile pointer test, hidden-tab/offscreen resume, resize and WebGL context-loss fallback. A READY deployment alone is not a visual or touch QA result.

All section ideas beyond the changes explicitly called out as completed in the pull request remain the **design backlog**, not a claim that the whole site has already been rebuilt.
