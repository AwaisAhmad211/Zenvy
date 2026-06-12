import { stepsData } from "@/data/how-it-works";
import { FadeIn } from "../ui/FadeIn";
import { FiArrowRight } from "react-icons/fi";

export default function HowItWorks() {
  return (
    <section
      className="relative mx-auto max-w-340 overflow-hidden bg-bg px-6 py-15 sm:px-12 lg:px-16"
      aria-labelledby="how-it-works-title"
    >
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4">
        <div>
          <h2
            id="how-it-works-title"
            className="font-display text-3xl font-extrabold tracking-tight text-text sm:text-[2rem] lg:text-[2.35rem]"
          >
            How It Works
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-2 sm:text-[15px]">
            Get any international product in 3 simple steps
          </p>
        </div>
      </div>

      {/* Cards */}
      <ol className="relative z-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {stepsData.map((step, index) => (
          <li key={step.id} className="flex">
            <FadeIn delay={index * 0.15}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-surface p-[28px] transition-all duration-300 hover:-translate-y-1 hover:border-[#0b2e3333]">
                {/* Step Number */}
                <div className="mb-[18px] flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#0B2E33,#93B1B5)] font-display text-[22px] font-bold text-white shadow-[0_6px_20px_rgba(11,46,51,0.2)]">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-[8px] font-display text-[17px] font-bold text-text">
                    {step.name}
                  </h3>

                  <p className="text-[14px] leading-[1.7] text-text-2">
                    {step.text}
                  </p>

                  {step.cta && (
                    <div className="mt-auto pt-6">
                      <a
                        href={step.cta.href ?? "#"}
                        className="inline-flex h-10 items-center rounded-xl bg-[linear-gradient(135deg,#0B2E33,#93B1B5)] px-4 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(15,63,70,0.22)] transition-transform duration-200 group-hover:translate-x-0.5"
                      >
                        {step.cta.label}
                        <FiArrowRight className="ml-2 text-[0.9rem]" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
}
