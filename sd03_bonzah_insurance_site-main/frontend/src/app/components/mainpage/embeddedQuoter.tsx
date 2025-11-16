// src/app/components/mainpage/embeddedQuoter.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/** Choose ONE behavior. */
type Mode = "widget" | "modal" | "page";
const MODE: Mode = "widget";


const EZLYNX_URL = "";                  
const CANOPY_URL = "https://app.usecanopy.com/c/bonzahins";                 
const QUOTE_PAGE = "/get-quote";   

export default function EmbeddedQuoter() {
  const router = useRouter();

  const hasEzlynx = !!EZLYNX_URL && /^https?:\/\//i.test(EZLYNX_URL);
  const hasCanopy = !!CANOPY_URL && /^https?:\/\//i.test(CANOPY_URL);
  const action = useMemo<Mode>(() => MODE, []);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const onClickCTA = () => {
    if (action === "page") {
      if (hasEzlynx) window.open(EZLYNX_URL, "_blank", "noopener,noreferrer");
      else router.push(QUOTE_PAGE);
      return;
    }
    setOpen(true);
  };

  return (
    // Full-bleed white background
    <section id="embeddedQuoter" className="w-full bg-[var(--color-white)]">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        {/* Single CTA button */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={onClickCTA}
            className="btn-primary rounded-2xl cursor-pointer
                       px-10 sm:px-12 md:px-16 py-4 md:py-5
                       text-lg md:text-xl
                       min-w-[14rem] sm:min-w-[18rem] md:min-w-[20rem]"
            style={{ background: "var(--color-pink)" }}
          >
            Get Your Quote
          </button>
        </div>

        {/* Inline widget */}
        {action === "widget" && open && (
          <div className="mt-10 rounded-2xl border bg-white p-4 md:p-6">
            {hasEzlynx ? (
              <IFramePanel title="Instant Quote" url={EZLYNX_URL} />
            ) : (
              <Wizard step={step} setStep={setStep} canopyUrl={hasCanopy ? CANOPY_URL : ""} />
            )}
          </div>
        )}

        {/* Modal */}
        {action === "modal" && open && (
          <Modal onClose={() => setOpen(false)}>
            <div className="w-full max-w-3xl">
              {hasEzlynx ? (
                <IFramePanel title="Instant Quote" url={EZLYNX_URL} />
              ) : (
                <Wizard step={step} setStep={setStep} canopyUrl={hasCanopy ? CANOPY_URL : ""} />
              )}
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}

/* -------------------- Panels -------------------- */

function IFramePanel({ title, url }: { title: string; url: string }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--color-black)]">{title}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-xl px-4 py-2"
          style={{ background: "var(--color-pink)" }}
        >
          Open in new tab
        </a>
      </div>
      {/* Portrait on phones; landscape on larger screens */}
      <div className="mt-4 overflow-hidden rounded-xl border aspect-[9/16] sm:aspect-[16/10]">
        <iframe src={url} className="h-full w-full" loading="lazy" title="Embedded Quote" />
      </div>
    </div>
  );
}

/** Book-style stepper with Canopy Connect question built in. */
function Wizard({
  step,
  setStep,
  canopyUrl,
}: {
  step: number;
  setStep: (n: number) => void;
  canopyUrl: string;
}) {
  const next = () => setStep(Math.min(step + 1, STEPS.length - 1));
  const prev = () => setStep(Math.max(step - 1, 0));

  // Local UI state for the "Already insured?" question
  const [insured, setInsured] = useState<"" | "yes" | "no">("");

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--color-black)]">Quick Questions</h3>
        <StepDots total={STEPS.length} current={step} />
      </div>

      <div className="mt-4 rounded-xl border p-4">
        {/* Step 0: line + zip */}
        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="What are you insuring?">
              <select className="w-full rounded-xl border px-3 py-2">
                <option>Auto</option>
                <option>Home</option>
                <option>Renters</option>
                <option>Business</option>
                <option>Motorcycle</option>
                <option>RV</option>
                <option>Classic/Collector</option>
                <option>Non-Owners</option>
              </select>
            </Field>
            <Field label="ZIP Code">
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]{5}"
                placeholder="e.g., 50311"
                className="w-full rounded-xl border px-3 py-2"
              />
            </Field>
          </div>
        )}

        {/* Step 1: already insured + canopy CTA */}
        {step === 1 && (
          <div className="space-y-4">
            <Field label="Do you already have insurance?">
              <div className="flex items-center gap-6">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="insured"
                    value="yes"
                    checked={insured === "yes"}
                    onChange={() => setInsured("yes")}
                  />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="insured"
                    value="no"
                    checked={insured === "no"}
                    onChange={() => setInsured("no")}
                  />
                  <span>No</span>
                </label>
              </div>
            </Field>

            {insured === "yes" && (
              <div className="rounded-xl border p-4 bg-[var(--color-bg)]">
                <p className="text-[var(--color-dark-grey)]">
                  Great! Link your current policy so we can pre-fill your info and compare options.
                </p>
                <div className="mt-3">
                  {canopyUrl ? (
                    <a
                      href={canopyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary rounded-xl px-4 py-2"
                      style={{ background: "var(--color-pink)" }}
                    >
                      Connect with Canopy
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--color-light-grey)]">
                      (Canopy link not configured yet.)
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: contact basics */}
        {step === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name">
              <input type="text" placeholder="Jane Doe" className="w-full rounded-xl border px-3 py-2" />
            </Field>
            <Field label="Email">
              <input type="email" placeholder="you@example.com" className="w-full rounded-xl border px-3 py-2" />
            </Field>
            <Field label="Phone (optional)">
              <input type="tel" placeholder="(555) 555-5555" className="w-full rounded-xl border px-3 py-2" />
            </Field>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          className="rounded-xl border px-4 py-2 disabled:opacity-40"
        >
          Back
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="btn-primary rounded-xl px-5 py-2"
            style={{ background: "var(--color-pink)" }}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            onClick={() => alert("Submit to backend or open EZLynx/Canopy here.")}
            className="btn-primary rounded-xl px-5 py-2"
            style={{ background: "var(--color-pink)" }}
          >
            Get My Options
          </button>
        )}
      </div>
    </div>
  );
}

// Number of steps used above (0,1,2)
const STEPS = [0, 1, 2];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-[var(--color-dark-grey)]">{label}</span>
      {children}
    </label>
  );
}

function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${
            i === current ? "bg-[var(--color-pink)]" : "bg-[var(--color-light-pink)]"
          }`}
        />
      ))}
    </div>
  );
}

/* -------------------- Modal -------------------- */

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    ref.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative z-10 max-h-[90vh] w-[96vw] sm:w-[90vw] md:w-[80vw] overflow-auto rounded-2xl bg-white p-4 md:p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border px-2 py-1 text-sm"
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
