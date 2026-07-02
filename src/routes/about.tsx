import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { GridBackground, Reveal, TiltCard } from "@/components/animations/primitives";
import { skillGroups } from "@/data/skills";
import { site } from "@/data/site";
import photo1 from "@/assets/photos/hammad-1.png";
import photo3 from "@/assets/photos/hammad-3.png";
import photo4 from "@/assets/photos/hammad-4.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Hammad Siddiqui" },
      { name: "description", content: "AI Automation Engineer and Full Stack Developer with 3+ years building smart systems, websites and automations that solve real problems." },
      { property: "og:title", content: "About - Hammad Siddiqui" },
      { property: "og:description", content: "The story, values and tools behind the work." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2025", icon: Rocket, title: "AI Automation Engineer", body: "Building agentic workflows, RAG systems and AI-first products for growth-stage teams." },
  { year: "2024", icon: Briefcase, title: "Full-Stack Freelance", body: "Delivered 40+ web, e-commerce and internal-tool projects for clients across 12 countries." },
  { year: "2023", icon: Award, title: "Shopify & WordPress specialist", body: "Focused on custom themes, Shopify Plus builds and CRO - shipped a 3.2× improvement in page speed for two brands." },
  { year: "2022", icon: GraduationCap, title: "Started building", body: "First production launches - small business sites, then custom dashboards, then AI." },
];

function About() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
                About Me
              </div>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Hi, I'm <span className="text-gradient">Hammad Siddiqui</span>.
              </h1>
              <div className="mt-6 max-w-xl space-y-4 text-muted-foreground">
                <p>
                  I'm an AI Automation Engineer and Full Stack Developer who enjoys building smart systems that make work easier.
                </p>
                <p>
                  I help businesses automate repetitive tasks, build AI powered solutions, and create websites and applications that are fast, modern, and easy to use. Whether it's an AI agent, workflow automation, or a custom web application, my goal is always the same: build something that saves time and solves real problems.
                </p>
                <p>
                  What makes me different is that I don't just focus on AI or web development. I combine both to create complete solutions that fit the way a business already works.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2">
                  Work with me <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="/Hammad-Siddiqui-Resume.pdf" className="rounded-full glass px-5 py-2.5 text-sm">Download Resume</a>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-3">
              <TiltCard className="col-span-4 row-span-2">
                <div className="rounded-3xl glass p-2 overflow-hidden">
                  <img src={photo1} alt="Hammad portrait" className="rounded-2xl aspect-[4/5] object-cover w-full" />
                </div>
              </TiltCard>
              <TiltCard className="col-span-2">
                <div className="rounded-3xl glass p-2 overflow-hidden">
                  <img src={photo3} alt="Hammad casual" className="rounded-2xl aspect-square object-cover w-full" />
                </div>
              </TiltCard>
              <TiltCard className="col-span-2">
                <div className="rounded-3xl glass p-2 overflow-hidden">
                  <img src={photo4} alt="Hammad in suit" className="rounded-2xl aspect-square object-cover w-full" />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="rounded-3xl glass p-8 md:p-10">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">My Story.</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  My journey started with web development because I loved creating things on the internet. Building websites was exciting, but after working on different projects, I realized that many businesses needed more than just a good looking website.
                </p>
                <p>
                  They were spending hours on repetitive tasks like replying to leads, updating spreadsheets, sending emails, and managing different tools. I wanted to find a better way to solve those problems.
                </p>
                <p>
                  That's what led me to AI and automation.
                </p>
                <p>
                  I started learning how to build systems that could handle these tasks automatically. The more I learned, the more I realized that AI could do much more than answer questions. It could save businesses time, reduce manual work, and make everyday processes much more efficient.
                </p>
                <p>
                  Today, I build AI agents, automation workflows, and modern web applications that help businesses work smarter. I enjoy taking complex ideas and turning them into simple, practical solutions that people can rely on.
                </p>
                <p>
                  I'm always learning because technology never stands still. Every project teaches me something new, and that's what keeps me excited about building the next solution.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Ship the real thing", b: "Prototypes are cheap. Production is the deliverable - with tests, telemetry and docs." },
              { t: "Design as engineering", b: "Interfaces are systems. Motion, spacing and hierarchy are engineering decisions, not decoration." },
              { t: "AI that earns its keep", b: "Every AI feature should replace measurable manual work or unlock revenue - otherwise it doesn't ship." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="h-full rounded-3xl glass p-6">
                  <div className="font-display text-lg font-semibold">{v.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-4xl font-semibold tracking-tight">Journey.</h2>
          <div className="relative mt-12">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue via-brand-purple to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple shadow-[0_0_20px_-5px_rgba(59,130,246,0.7)]">
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{item.year}</div>
                  <div className="mt-1 font-display text-xl font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground max-w-lg">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech cloud */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl font-semibold tracking-tight">Tech stack cloud.</h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {skillGroups.flatMap((g) => g.skills).map((s, i) => (
              <motion.span key={s + i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 20) * 0.02 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-white/25 hover:glow-blue transition"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-muted-foreground">{site.availability} · Based {site.location}</p>
        </div>
      </section>
    </>
  );
}
