import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects, type Project } from "@/data/projects";
import { categoryMap } from "@/data/categories";
import { GridBackground, Reveal } from "@/components/animations/primitives";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = (loaderData as { project: Project } | undefined)?.project;
    return {
      meta: p ? [
        { title: `${p.title} - Case Study` },
        { name: "description", content: p.description },
        { property: "og:title", content: `${p.title} - Case Study` },
        { property: "og:description", content: p.description },
        { property: "og:image", content: p.thumbnail },
        { property: "og:type", content: "article" },
        { name: "twitter:image", content: p.thumbnail },
      ] : [{ title: "Case Study" }],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <h1 className="font-display text-5xl font-semibold text-gradient">Project not found</h1>
        <Link to="/portfolio" search={{ category: "all" }} className="mt-6 inline-flex rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm text-white">Back to portfolio</Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="relative pt-36 pb-10 overflow-hidden">
        <GridBackground />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link to="/portfolio" search={{ category: "all" }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.categories.map((c) => {
              const meta = categoryMap[c];
              return (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs" style={{ color: meta.accent }}>
                  {meta.label}
                </span>
              );
            })}
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">{project.year}</span>
            {project.clientType && (
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">{project.clientType}</span>
            )}
          </div>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{project.description}</p>
          <div className="mt-6 flex gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm font-medium text-white">
                Live demo <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm">
                Repository <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-8">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-3xl glass p-2">
            <img src={project.thumbnail} alt={project.title} className="w-full rounded-2xl object-cover aspect-[16/9]" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-10">
            {project.longDescription && (
              <Block title="Overview">{project.longDescription}</Block>
            )}
            {project.problem && <Block title="Problem">{project.problem}</Block>}
            {project.solution && <Block title="Solution">{project.solution}</Block>}
            {project.features && (
              <Reveal>
                <h2 className="font-display text-2xl font-semibold">Key features</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="rounded-2xl glass p-4 text-sm">
                      <span className="mr-2 text-brand-cyan">◆</span>{f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {project.challenges && (
              <Reveal>
                <h2 className="font-display text-2xl font-semibold">Challenges</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {project.challenges.map((c) => (<li key={c}>- {c}</li>))}
                </ul>
              </Reveal>
            )}
            {project.results && (
              <Reveal>
                <div className="rounded-3xl bg-gradient-to-br from-brand-blue/15 via-brand-purple/10 to-brand-cyan/15 p-8 border border-white/10">
                  <div className="text-xs uppercase tracking-widest text-brand-cyan">Business Impact</div>
                  <p className="mt-2 font-display text-2xl leading-snug">{project.results}</p>
                </div>
              </Reveal>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl glass p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Tech stack</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl glass p-6">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">At a glance</div>
              <dl className="mt-4 space-y-3 text-sm">
                <Row k="Year" v={String(project.year)} />
                {project.clientType && <Row k="Client" v={project.clientType} />}
                <Row k="Categories" v={project.categories.map((c) => categoryMap[c].label).join(", ")} />
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/portfolio/$slug" params={{ slug: next.slug }} className="group block overflow-hidden rounded-3xl glass p-8 hover:glow-blue transition">
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Next project</div>
                <div className="mt-2 font-display text-3xl font-semibold group-hover:text-gradient transition">{next.title}</div>
              </div>
              <ArrowRight className="h-6 w-6 transition group-hover:translate-x-2" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>
    </Reveal>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/5 pb-2 last:border-0">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}
