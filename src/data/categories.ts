import { Globe, Bot, Workflow, Code2, type LucideIcon } from "lucide-react";

export type ProjectCategory =
  | "website-development"
  | "ai-development"
  | "ai-automation"
  | "custom-software";

export interface CategoryMeta {
  id: ProjectCategory;
  label: string;
  short: string;
  description: string;
  icon: LucideIcon;
  gradient: string; // tailwind gradient
  glow: string;    // rgba
  accent: string;  // hex
}

export const categories: CategoryMeta[] = [
  {
    id: "website-development",
    label: "Website Development",
    short: "Web",
    description:
      "Shopify, WordPress, BigCommerce, Headless CMS & fully custom marketing / product websites.",
    icon: Globe,
    gradient: "from-sky-400 via-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.55)",
    accent: "#3B82F6",
  },
  {
    id: "ai-development",
    label: "AI Development",
    short: "AI",
    description:
      "AI applications, chatbots, RAG pipelines, LLM integration, MCP servers & AI dashboards.",
    icon: Bot,
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
    glow: "rgba(139,92,246,0.55)",
    accent: "#8B5CF6",
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    short: "Automation",
    description:
      "n8n, Make, Zapier, agentic workflows, CRM automation, lead-gen & email systems.",
    icon: Workflow,
    gradient: "from-cyan-400 via-teal-400 to-emerald-400",
    glow: "rgba(6,182,212,0.55)",
    accent: "#06B6D4",
  },
  {
    id: "custom-software",
    label: "Custom Software",
    short: "Software",
    description:
      "Dashboards, portals, APIs and internal tools tailored to your operations.",
    icon: Code2,
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    glow: "rgba(99,102,241,0.55)",
    accent: "#6366F1",
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.id, c]),
) as Record<ProjectCategory, CategoryMeta>;
