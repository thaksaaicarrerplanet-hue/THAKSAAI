import React, { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PATHWAY_MODULES } from "../../data/pathways";
import { useDeviceTier } from "../../hooks/useDeviceTier";
import { SceneFallback } from "../../three/SceneFallback";

const SceneCanvas = lazy(() => import("../../three/SceneCanvas"));

export default function CapabilityReactor() {
  const sectionRef = useRef(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [selectedId, setSelectedId] = useState("workshops");
  const [sceneReady, setSceneReady] = useState(false);
  const { tier, reducedMotion, canRenderWebGL } = useDeviceTier();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setNearViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px", threshold: 0.01 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const selectModule = useCallback((id) => {
    setSelectedId(id);
  }, []);
  const markSceneReady = useCallback(() => setSceneReady(true), []);

  const selectedModule =
    PATHWAY_MODULES.find((module) => module.id === selectedId) || PATHWAY_MODULES[0];
  const enableWebGL =
    nearViewport && canRenderWebGL && tier !== "low" && !reducedMotion;

  useEffect(() => {
    if (!enableWebGL) setSceneReady(false);
  }, [enableWebGL]);

  return (
    <section
      ref={sectionRef}
      id="capability-reactor"
      aria-labelledby="capability-reactor-title"
      className="relative isolate overflow-hidden border-y border-white/10 bg-[#060B17]/90 px-4 py-20 text-white sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 22%, rgba(54,89,217,.28), transparent 34%), radial-gradient(circle at 80% 72%, rgba(199,243,107,.12), transparent 28%), linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 40px 40px, 40px 40px",
        }}
      />

      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C7F36B]/30 bg-[#C7F36B]/[0.07] px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C7F36B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C7F36B]" aria-hidden="true" />
              Interactive capability map · 04 modules
            </div>
            <h2
              id="capability-reactor-title"
              className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
            >
              See how capability is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7F36B] via-white to-[#6D8DFF]">
                engineered.
              </span>
            </h2>
            <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-slate-300 sm:text-lg">
              Four connected pathways. One practical progression from the first lab exercise to
              a system students can build, ship, and explain.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-300 md:self-auto">
            <span className={sceneReady ? "h-2 w-2 rounded-full bg-[#C7F36B] shadow-[0_0_12px_#C7F36B]" : "h-2 w-2 rounded-full bg-[#6D8DFF]"} aria-hidden="true" />
            {sceneReady ? "WebGL reactor active" : reducedMotion ? "Reduced-motion mode" : "Adaptive rendering"}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[600/390] min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-[#070D1C] shadow-[0_30px_100px_-34px_rgba(0,0,0,.9)] sm:min-h-[420px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(54,89,217,.13),transparent_58%)]"
              />
              <div className={`absolute inset-0 transition-opacity duration-300 ${sceneReady ? "opacity-0" : "opacity-100"}`}>
                <SceneFallback
                  modules={PATHWAY_MODULES}
                  selectedId={selectedId}
                  activeId={selectedId}
                  onSelect={selectModule}
                  className="transition-opacity duration-300"
                />
              </div>
              {enableWebGL && (
                <Suspense
                  fallback={
                    <div role="status" className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-[#050811]/80 px-3 py-2 font-mono text-[10px] text-slate-300">
                      Loading 3D reactor…
                    </div>
                  }
                >
                  <SceneCanvas
                    modules={PATHWAY_MODULES}
                    selectedId={selectedId}
                    onSelect={selectModule}
                    tier={tier}
                    onReady={markSceneReady}
                  />
                </Suspense>
              )}
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                <span className="rounded-md border border-white/10 bg-[#050811]/80 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-300">
                  THK / ARCH-04
                </span>
                <span className="rounded-md border border-white/10 bg-[#050811]/80 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-300">
                  {tier.toUpperCase()} RENDER PROFILE
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-400">
              {enableWebGL
                ? "Select a module in the map or use the pathway controls to inspect each track."
                : "The pathway map remains interactive without WebGL and becomes a still illustration when reduced motion is enabled."}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div role="group" aria-label="Choose a THAKSAAI learning pathway" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {PATHWAY_MODULES.map((module) => {
                const active = module.id === selectedId;
                return (
                  <button
                    key={module.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => selectModule(module.id)}
                    className={`group w-full rounded-2xl border p-4 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#C7F36B] sm:p-5 ${active
                      ? "border-[#C7F36B]/65 bg-[#C7F36B]/[0.08] shadow-[0_16px_42px_-28px_rgba(199,243,107,.6)]"
                      : "border-white/10 bg-white/[0.025] hover:border-white/25 hover:bg-white/[0.055]"}`}
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span>
                        <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: module.accent }}>
                          {module.code}
                        </span>
                        <span className="block font-display text-base font-bold text-white sm:text-lg">
                          {module.title}
                        </span>
                      </span>
                      <span className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-xs transition-colors ${active ? "border-[#C7F36B]/50 bg-[#C7F36B] text-[#101828]" : "border-white/10 bg-white/[0.04] text-slate-300"}`}>
                        {active ? "01" : "↗"}
                      </span>
                    </span>
                    <span className="mt-2 block text-xs leading-relaxed text-slate-400 sm:text-sm">{module.subtitle}</span>
                  </button>
                );
              })}
            </div>

            <div aria-live="polite" className="mt-5 rounded-2xl border border-white/10 bg-[#0B1224]/85 p-5 sm:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#C7F36B]">Selected pathway</span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">{selectedModule.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{selectedModule.description}</p>
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-slate-400">Outcome: {selectedModule.deliverable}</span>
                <Link
                  to={selectedModule.href || selectedModule.path}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#C7F36B] px-4 py-2.5 text-sm font-bold text-[#101828] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  Explore pathway <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
