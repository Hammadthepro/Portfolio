import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles, Zap } from "lucide-react";
import { GridBackground, Particles, Spotlight, Magnetic, Reveal, Counter, TiltCard } from "@/components/animations/primitives";
import { site } from "@/data/site";
// services list is now inlined in the What I build section
import { skillGroups } from "@/data/skills";
import { testimonials } from "@/data/testimonials";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import heroPhoto from "@/assets/photos/hammad-2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hammad Siddiqui - Full-Stack & AI Automation Engineer" },
      { name: "description", content: "Websites, AI systems and intelligent automations that generate measurable business value." },
      { property: "og:title", content: "Hammad Siddiqui - Full-Stack & AI Automation Engineer" },
      { property: "og:description", content: "Websites, AI systems and automations for ambitious teams." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = getFeaturedProjects(4);
  return (
    <>
      {/* ------------------ HERO ------------------ */}
      <section className="relative min-h-[100svh] overflow-hidden pt-32">
        <GridBackground />
        <Particles />
        <Spotlight />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
              {site.availability}
            </motion.div>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.03em]">
              Building{" "}
              <span className="text-gradient">AI Systems</span>,
              <br />
              Intelligent{" "}
              <span className="text-gradient">Automation</span>
              <br />
              & Modern Web Experiences.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">{site.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link to="/portfolio" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.75)]">
                  <Sparkles className="h-4 w-4" />
                  View Portfolio
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:glow-blue transition">
                  Contact Me
                </Link>
              </Magnetic>
            </div>
            <div className="mt-14 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-semibold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-blue/40 via-brand-purple/30 to-brand-cyan/40 blur-2xl" />
            <TiltCard max={10} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] glass p-2">
                <img src={heroPhoto} alt="Hammad Siddiqui" className="rounded-[calc(2rem-8px)] object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl glass px-4 py-3 text-xs shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-brand-cyan" />
                  Shipping this week: <span className="text-foreground">AI sales agent</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-2xl glass px-4 py-3 text-xs">
                <div className="text-muted-foreground">Currently</div>
                <div className="font-medium">Full-Stack + AI</div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
            <ArrowDown className="h-3 w-3" />
          </motion.div>
        </div>
      </section>

      {/* ------------------ TRUSTED / MARQUEE ------------------ */}
      <section className="relative border-y border-white/5 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6">
          <LogoMarquee />
        </div>
      </section>

      {/* ------------------ ABOUT PREVIEW ------------------ */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <SectionKicker>About</SectionKicker>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Engineer, builder,<br /><span className="text-gradient">shipping partner.</span>
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>I'm Hammad - a full-stack developer and AI automation engineer helping founders and teams turn ideas into production systems.</p>
                <p>For 3+ years I've been shipping websites, AI products and automations across e-commerce, real estate, logistics, healthcare and SaaS industries.</p>
                <Link to="/about" className="inline-flex items-center gap-2 text-foreground hover:text-brand-cyan transition">
                  More about me <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------ WHAT I BUILD ------------------ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionKicker>Services</SectionKicker>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">What I build.</h2>
            </div>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "WordPress (custom themes + ACF)",
              "BigCommerce, Wix, custom websites & web templates",
              "AI applications & assistants",
              "AI chatbots (Web / WhatsApp / Slack)",
              "RAG pipelines, vector search, agents & agentic AI",
              "n8n / Make / Zapier workflows",
              "CRM automation (HubSpot, Pipedrive, GHL)",
              "Lead generation pipelines & AI automation (agentic AI)",
              "Shopify & Shopify Plus storefronts",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 0.04}>
                <TiltCard className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple text-[11px] font-semibold text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm font-medium leading-relaxed">{item}</p>
                    </div>
                    <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition group-hover:opacity-100"
                         style={{ boxShadow: "0 0 40px -10px rgba(79,70,229,0.35)" }} />
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ FEATURED PROJECTS ------------------ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionKicker>Selected Work</SectionKicker>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Recent projects.</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2">
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (<ProjectCard key={p.slug} project={p} index={i} />))}
          </div>
        </div>
      </section>

      {/* ------------------ SKILLS ------------------ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionKicker>Stack</SectionKicker>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Tools of the trade.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.04}>
                <div className="rounded-3xl glass p-6">
                  <div className="text-sm font-semibold text-brand-cyan">{g.title}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-white/25 transition">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ TESTIMONIALS ------------------ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionKicker>Testimonials</SectionKicker>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Kind words.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="relative h-full rounded-3xl glass p-8">
                  <div className="absolute right-6 top-6 font-display text-5xl text-brand-blue/40">"</div>
                  <blockquote className="text-base leading-relaxed text-foreground/90">{t.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-display text-sm font-semibold text-white">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ CTA ------------------ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] p-12 sm:p-16 text-center glass">
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute inset-0 bg-grid mask-fade-b animate-grid" />
              <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-blue/40 blur-3xl" />
              <div className="absolute -bottom-40 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-purple/40 blur-3xl" />
            </div>
            <div className="relative">
              <SectionKicker>Let's build</SectionKicker>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                Let's build <span className="text-gradient">something amazing.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Have a project in mind? I'm currently taking on a small number of new engagements.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.7)]">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm">
                    See the work
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-brand-cyan" />
      {children}
    </div>
  );
}
