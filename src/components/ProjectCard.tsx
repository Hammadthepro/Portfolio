import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryMap } from "@/data/categories";
import { TiltCard } from "@/components/animations/primitives";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const primary = categoryMap[project.categories[0]];
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <TiltCard className="h-full">
        <div className="relative h-full overflow-hidden rounded-3xl glass p-1.5">
          <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br opacity-0 blur-lg transition group-hover:opacity-50"
               style={{ backgroundImage: `linear-gradient(135deg, ${primary.accent}, transparent 60%)` }} />
          <div className="relative rounded-[calc(theme(borderRadius.3xl)-4px)] overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
                {project.categories.map((c) => {
                  const meta = categoryMap[c];
                  return (
                    <span key={c} className="rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium backdrop-blur"
                          style={{ color: meta.accent }}>
                      {meta.label}
                    </span>
                  );
                })}
              </div>
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] backdrop-blur">
                {project.year}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted-foreground">{t}</span>
                ))}
                {project.techStack.length > 5 && (
                  <span className="text-[11px] text-muted-foreground">+{project.techStack.length - 5}</span>
                )}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: project.slug }}
                  className="text-sm font-medium text-foreground/90 inline-flex items-center gap-1.5 hover:text-brand-cyan transition"
                >
                  Case Study
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </Link>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live" className="grid h-8 w-8 place-items-center rounded-full glass hover:glow-blue transition">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label="Repository" className="grid h-8 w-8 place-items-center rounded-full glass hover:glow-purple transition">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.article>
  );
}
