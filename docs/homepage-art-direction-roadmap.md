# THAKSA.AI Homepage — Artistic Direction & Integration Roadmap

**Status:** Research-led implementation plan for the `work/preview-world-class-upgrade` branch.  
**Design objective:** Make THAKSA.AI feel like an original, art-directed digital learning studio—not a generic education template—while keeping the programs understandable, the site usable on touch devices, and the visual experience fast.

## 1. What to learn from the references

### Lusion — visual storytelling with a clear narrative
Reference: [lusion.co](https://lusion.co/) · [Lusion on mesh3d](https://mesh3d.gallery/website/lusion-realise-your-creative-ideas)

Lusion’s current homepage describes its work as “3D visual storytelling and interactive web experiences”, then moves through an approach statement, featured projects, a more immersive closing, and a direct contact invitation. The lesson is the sequence: **make a memorable visual promise first, prove the craft with selected work, explain the method, and finish with a clear next action**. See the [official homepage](https://lusion.co/).

An older, award-recognized Lusion homepage documented by mesh3d used a cursor-reactive 3D sculpture, scroll-connected scenes and a project gallery. Treat that as a visual case study rather than a guarantee of the current site's exact implementation: [case study](https://mesh3d.gallery/website/lusion-realise-your-creative-ideas).

**Adapt for THAKSA:** one signature metallic / iridescent sculpture, a small set of deliberate motion cues, an edited portfolio/gallery, and a coherent narrative connecting learning to tangible output. Do not reproduce Lusion’s objects or exact compositions.

### Active Theory — interaction as part of the studio identity
Reference: [activetheory.net](https://activetheory.net/) · [Communication Arts case study](https://www.commarts.com/webpicks/active-theory-2) · [Active Theory experiments hub](https://www.commarts.com/webpicks/experiments-hub)

Active Theory's official site is JavaScript-rendered, so a static text inspection does not reveal all of the live experience. In a Communication Arts interview about a recent portfolio version, the studio describes a minimal work/contact navigation pill that responds to scroll velocity, an AI-assisted way to browse projects, and WebGL effects driven by mouse or touch. Its experiments hub deliberately gives each experiment space rather than treating effects as decoration ([case study](https://www.commarts.com/webpicks/active-theory-2), [experiments hub](https://www.commarts.com/webpicks/experiments-hub)).

**Adapt for THAKSA:** a restrained velocity-aware nav indicator; lighting and material responses that are directly connected to the user’s touch/pointer; and one purposeful micro-interaction per section. The navigation and page copy must still work normally without WebGL.

### Bruno Simon — a useful boundary, not the target structure
Reference: [bruno-simon.com](https://bruno-simon.com/)

Bruno Simon turns portfolio navigation into a drivable 3D world and documents explicit desktop/mobile controls. This shows how clear input affordances can make an unusual experience learnable. However, THAKSA is a training and software-services website with conversion goals. **Do not turn the whole website into a driving game**; take the idea of obvious touch controls and quality choices, not the full navigation model.

### Production principles from the platform documentation
- [Three.js WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer): documents renderer sizing, pixel ratio, resource disposal and `setAnimationLoop`. Keep rendering work measurable and dispose of GPU resources.
- [Three.js responsive rendering guidance](https://threejs.org/manual/pages/responsive.html): high device pixel ratios can produce excessive drawing-buffer work, high power use and slow frame rates; cap internal resolution on demanding scenes.
- [MDN: reduced-motion accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion): honor a user’s reduced-motion setting by reducing or replacing non-essential movement.
- [mesh3d gallery](https://www.mesh3d.gallery/): a living source of Three.js experiments, including current work attributed to Lusion and Active Theory. Use it as a periodically refreshed moodboard rather than copying individual projects.

## 2. Visual language to establish once

**Mood:** experimental engineering studio; tactile, precise, cinematic, human.

**Palette:** near-black/navy for the canvas; ultramarine/ice blue for depth; electric lime used sparingly as the interaction signal; porcelain white for type. Keep the existing brand palette unless a later brand decision explicitly changes it.

**Materials:** one hero-quality metallic/iridescent object, thin light filaments, soft volumetric-looking gradients built without expensive volumetric rendering, restrained grain and technical grid marks. Avoid putting the brightest reflection directly behind important copy.

**Typography:** oversized editorial display type plus small monospace labels. Use a deliberate serif italic accent only where it strengthens the story; keep paragraph widths and line length readable.

**Motion rules:**
1. Every effect communicates a state, a path or depth. No random animation for its own sake.
2. Pointer movement smoothly eases to a target; touch tap/pointerdown triggers a short, decaying light pulse. Never vibrate the camera or make the whole page jump.
3. One continuous high-cost 3D scene at a time. The hero scene pauses when offscreen or when the tab is hidden.
4. Respect reduced-motion preferences with a still composition or greatly reduced motion.
5. All links, buttons, content and routing remain usable when WebGL fails or is unavailable.

## 3. Homepage section-by-section design

| Existing section | Artistic direction | Interaction and content integration |
| --- | --- | --- |
| **1. Hero — `PaperHero`** | Keep the “Real Engineers. Real Code. Real Careers.” headline, but frame it as an editorial cover: generous negative space, a bespoke reflective knot/ribbon on the right, restrained grain, and a quiet technical grid. The eyebrow should stay short and human (“Learning, in motion”), with no “Industry–Academia Engineering Institution” tagline. | Pointer/touch position moves the key light, not the content. Touch-down produces a brief specular pulse and particle response. Keep one primary CTA and one quieter contact CTA. On mobile, recompose the sculpture behind/above the text rather than merely shrinking a desktop layout. |
| **2. Capability Reactor — `CapabilityReactor`** | Treat the four pathways as four machined / glass-like nodes joined by a luminous path. The nodes should feel like a physical system, not a generic dashboard widget. | Selecting Workshops, CRT, Internships or Projects updates both the active node and the adjacent details panel. Lazy-load the WebGL scene near the viewport; preserve the existing SVG fallback and keyboard-accessible pathway buttons. |
| **3. Manifesto / proof — `PaperProofStrip`** | Make the message a short kinetic typography sequence, with words revealing in a carefully paced scroll progression and a thin light trace passing through the text. Avoid having a huge marquee compete with the primary statement. | Use a low-cost scroll-linked transform/opacity effect. Keep all text fully available to screen readers; render a static statement for reduced motion. Only show real, verifiable counts or outcomes—never invent placement, cohort or client statistics. |
| **4. Audience / programs — `PaperAudienceRouting`** | Design it as an editorial “choose your path” moment: clear choices for students, colleges and software-studio clients, each with distinct art direction but shared layout rules. Let selected states feel tactile and material-led. | A selected pathway can reveal a layered detail panel and a small lightweight SVG/CSS emblem. Preserve route/query state, labels, focus indicators, keyboard operation and direct links; do not hide the actual offer behind a mysterious 3D interaction. |
| **5. Methodology — `PaperMethodology`** | Turn the four steps into a scroll story: diagnose → live-code → deploy → defend. Each stage gets one distinct abstract emblem (signal node, terminal frame, deployment volume, orbit/checkpoint) connected by a thin progress filament. | Animate the active step only when it approaches the viewport; do not run four concurrent 3D scenes. On mobile, keep the vertical reading order. Use a static timeline when reduced motion is enabled. |
| **6. Gallery — `PaperGallery`** | Replace the feeling of an endless duplicated ticker with an editorial image wall: one large lead image, two offset supporting images, and a selected-photo detail view. If the source images support it, use a restrained horizontal rail rather than identical-width repeated tiles. | Lazy-load and decode images, keep captions, support swipe plus keyboard arrows, avoid auto-moving the rail for reduced-motion visitors, and ensure each photo is an authentic documented session or build. Use real alt text for informative images; decorative duplicates should be hidden from assistive technology. |
| **7. Founder / vision — `PaperFounderQuote`** | Use a genuine human portrait or minimal monogram sculpture, asymmetric layout, and one concise, attributable statement. This should warm up the otherwise dark, technical sequence. | Keep credentials and quote attribution factual. Prefer a subtle image reveal over another large 3D animation; this section should feel human rather than like another product card. |
| **8. Software Studio — `PaperStudioHighlight`** | Replace three visually similar capability cards over time with project-led case studies: one result-oriented visual for web platforms, one cloud/infrastructure view, and one AI/workflow view. The work itself should become the artwork. | Each tile should link to a concrete case study or an accurately described service page. If no published case study is available, label it as a capability/demo rather than implying a real client result. Use a small hover light response, not three concurrent heavy scenes. |
| **9. Closing CTA — `PaperClosingCTA`** | Return to the hero’s light filament as a quiet closing motif: an abstract ribbon recedes into a dark horizon behind “What will you build next?” | Keep two direct conversion paths—training and software studio—with clear labels. The CTA must be usable without animation and easy to reach on touch. Do not add forced-scroll or autoplay audio. |

## 4. Integration plan

### Pass A — reliability and interaction (current branch)
- Scope the background to the hero only; avoid a second page-level canvas.
- Keep Three.js dynamically imported and render at capped DPR with device-tier-aware geometry and particle budgets.
- Use pointer coordinates as a smoothed target shared by sculpture rotation, light position and shaders.
- Use a short pulse envelope for tap/touch; verify the browser dispatches pointer events as expected on a physical phone.
- Pause while the hero is outside the viewport or the page is hidden; dispose of geometries/materials and listeners.
- Provide a non-WebGL fallback and honor reduced motion.

### Pass B — visual system
- Establish section spacing, heading scale, label style, border treatment and motion durations as reusable tokens/components.
- Use one interaction motif per section; keep the most expressive motion in Hero and Capability Reactor.
- Replace repeated generic card treatment with a mix of editorial text, image proof, process narrative and case-study layouts.
- Keep headings, service names and route paths clear to both search engines and visitors.

### Pass C — interaction details
- Add pointer/touch-aware lighting to only the hero sculpture; do not make the entire canvas intercept touch.
- Introduce section-linked navigation feedback if it remains helpful with the existing navbar.
- Add touch/swipe controls only where an actual carousel/gallery needs them; don't invent game controls for the whole page.
- Ensure every interactive component has hover, focus-visible, pressed/selected and reduced-motion states.

### Pass D — validation before merging
- Build and lint on the exact final branch head; pass compressed bundle budgets and Playwright smoke/regression tests.
- Test at minimum: desktop mouse, Android Chrome touch, compact viewport, reduced-motion enabled, hidden-tab resume, WebGL unavailable, resize, and context loss.
- Record browser/viewport/device details for each manual visual check.
- Compare the hero frame budget and layout shifts before/after; don't declare performance improved solely from lower DPR.
- Validate touch reflection response in a real mobile browser. A READY deployment alone is not proof that pointer/touch behavior was visually verified.
- Leave the PR in draft and do not merge until explicitly approved.

## 5. Definition of done

- The hero contains exactly one background renderer and no opaque canvas covers following sections.
- Moving a mouse produces a smooth, low-latency lighting response; tapping produces a clearly perceptible but brief reflection pulse on touch hardware.
- The animation remains behind content, never blocks buttons/links, and doesn't hijack page scrolling.
- CPU/GPU work stops when the scene is hidden; DPR/particle limits are active on compact devices.
- Reduced-motion and WebGL-failure fallbacks remain legible and functional.
- The home page reads as one intentional visual story, but the major offers and contact paths are still obvious.
- Latest lint, production build, bundle-size checks and browser regression tests pass; protected preview limitations and any remaining manual checks are documented.

## Sources
- Lusion official homepage: https://lusion.co/
- Lusion case study / historical homepage notes: https://mesh3d.gallery/website/lusion-realise-your-creative-ideas
- Active Theory official site: https://activetheory.net/
- Active Theory portfolio case study: https://www.commarts.com/webpicks/active-theory-2
- Active Theory Experiments Hub: https://www.commarts.com/webpicks/experiments-hub
- Bruno Simon's 3D portfolio: https://bruno-simon.com/
- Three.js WebGLRenderer docs: https://threejs.org/docs/pages/WebGLRenderer
- Three.js responsive rendering guide: https://threejs.org/manual/pages/responsive.html
- MDN reduced-motion reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
- Mesh3d current Three.js gallery: https://www.mesh3d.gallery/
