import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useMemo } from "react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { projects } from "@/data/projects";
import { categories, type ProjectCategory } from "@/data/categories";
import { ProjectCard } from "@/components/ProjectCard";
import { GridBackground, Reveal } from "@/components/animations/primitives";

const categoryIds = categories.map((c) => c.id) as [ProjectCategory, ...ProjectCategory[]];
const filterSchema = z.object({
  category: fallback(z.enum(["all", ...categoryIds]), "all").default("all"),
});

export const Route = createFileRoute("/portfolio")({
  validateSearch: zodValidator(filterSchema),
  head: () => ({
    meta: [
      { title: "Portfolio - Hammad Siddiqui" },
      { name: "description", content: "Selected websites, AI systems and automation projects delivered by Hammad Siddiqui." },
      { property: "og:title", content: "Portfolio - Hammad Siddiqui" },
      { property: "og:description", content: "Explore recent projects across web, AI and automation." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/portfolio" });

  const tabs = useMemo(
    () => [{ id: "all" as const, label: "All", accent: "#FFFFFF" }, ...categories.map((c) => ({ id: c.id, label: c.label, accent: c.accent }))],
    [],
  );

  const filtered = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((p) => p.categories.includes(category as ProjectCategory));
  }, [category]);

  return (
    <>
      <section className="relative pt-36 pb-10 overflow-hidden">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">Portfolio</div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Selected work across <span className="text-gradient">web, AI & automation.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            A living archive of recent projects. Filter by category, or open a case study to see the problem, solution and business impact.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-24 z-30 py-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass rounded-full p-1.5 inline-flex flex-wrap items-center gap-1">
            <LayoutGroup id="portfolio-filter">
              {tabs.map((t) => {
                const active = t.id === category;
                return (
                  <button
                    key={t.id}
                    onClick={() => navigate({ search: { category: t.id }, resetScroll: false })}
                    className="relative rounded-full px-4 py-2 text-xs font-medium text-muted-foreground transition hover:text-foreground"
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple shadow-[0_0_18px_-4px_rgba(59,130,246,0.7)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className={`relative z-10 ${active ? "text-white" : ""}`}>{t.label}</span>
                  </button>
                );
              })}
            </LayoutGroup>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">{filtered.length} project{filtered.length === 1 ? "" : "s"}</div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <LayoutGroup>
            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (<ProjectCard key={p.slug} project={p} index={i} />))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {filtered.length === 0 && (
            <Reveal>
              <div className="mt-16 rounded-3xl glass p-16 text-center">
                <div className="text-2xl font-display font-semibold">No projects in this category yet.</div>
                <p className="mt-2 text-sm text-muted-foreground">More case studies are being written up.</p>
                <Link to="/portfolio" search={{ category: "all" }} className="mt-6 inline-flex rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2.5 text-sm font-medium text-white">
                  View all projects
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
