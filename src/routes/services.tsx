import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { GridBackground, Reveal, TiltCard } from "@/components/animations/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Hammad Siddiqui" },
      { name: "description", content: "Website development, AI development, AI automation, custom software, APIs, cloud and consulting services." },
      { property: "og:title", content: "Services - Hammad Siddiqui" },
      { property: "og:description", content: "Web, AI and automation services for ambitious teams." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-10 overflow-hidden">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">Services</div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Web, AI and automation<br /><span className="text-gradient">- end to end.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            From marketing sites and Shopify storefronts to full agentic AI systems, I take on projects where design,
            engineering and AI intersect.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <TiltCard className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl glass p-8">
                  <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition group-hover:opacity-100"
                       style={{ boxShadow: "0 0 60px -20px rgba(59,130,246,0.5)" }} />
                  <div className="flex items-start justify-between">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg`}>
                      <s.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-1 text-sm text-brand-cyan">{s.tagline}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{s.description}</p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {s.offerings.map((o) => (
                      <div key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-3.5 w-3.5 text-brand-cyan flex-shrink-0" />
                        {o}
                      </div>
                    ))}
                  </div>
                  {s.outcomes && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.outcomes.map((o) => (
                        <span key={o} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-muted-foreground">{o}</span>
                      ))}
                    </div>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight">Not sure where to start?</h2>
          <p className="mt-4 text-muted-foreground">Tell me about your project - I'll suggest the smallest useful next step.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-7 py-3.5 text-sm font-medium text-white">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
