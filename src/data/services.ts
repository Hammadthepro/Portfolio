import {
  Globe, Bot, Workflow, Code2, Puzzle, Lightbulb, ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  offerings: string[];
  outcomes?: string[];
}

export const services: Service[] = [
  {
    id: "website-development",
    title: "Website Development",
    tagline: "Marketing sites, storefronts and headless commerce that convert.",
    description:
      "From Shopify and WordPress to fully custom Next.js builds - performant, on-brand, and built to scale.",
    icon: Globe,
    gradient: "from-sky-400 via-blue-500 to-cyan-400",
    offerings: [
      "Shopify & Shopify Plus",
      "WordPress (custom themes + ACF)",
      "BigCommerce",
      "Wix",
      "Custom websites & web templates",
    ],
    outcomes: ["Higher Lighthouse scores", "Improved SEO & conversion", "Editor-friendly CMS"],
  },
  {
    id: "ai-development",
    title: "AI Development",
    tagline: "Ship real AI products - not demos.",
    description:
      "Production LLM apps, RAG pipelines, agents and agentic AI wired into the tools your business already uses.",
    icon: Bot,
    gradient: "from-violet-500 via-fuchsia-500 to-purple-500",
    offerings: [
      "AI applications & assistants",
      "AI chatbots (Web / WhatsApp / Slack)",
      "RAG pipelines & vector search",
      "Agents & agentic AI",
      "LLM integration (OpenAI, Anthropic, open-source)",
    ],
    outcomes: ["Faster workflows", "New product surfaces", "Measurable time savings"],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    tagline: "Automate the boring 40% of your operations.",
    description:
      "n8n, Make, Zapier and custom agents that quietly run your CRM, marketing and back-office.",
    icon: Workflow,
    gradient: "from-cyan-400 via-teal-400 to-emerald-400",
    offerings: [
      "n8n / Make / Zapier workflows",
      "CRM automation (HubSpot, Pipedrive, GHL)",
      "Lead generation pipelines",
      "AI automation & agentic AI",
      "Email automation & nurture sequences",
    ],
    outcomes: ["Fewer manual hours", "Higher lead conversion", "Consistent operations"],
  },
  {
    id: "custom-software",
    title: "Custom Software",
    tagline: "Dashboards, portals and internal tools built to fit.",
    description:
      "When off-the-shelf stops fitting, I design and build durable software that matches your operations.",
    icon: Code2,
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    offerings: [
      "Admin dashboards & analytics",
      "Client / partner portals",
      "Internal tools & operations software",
      "SaaS MVPs",
    ],
  },
  {
    id: "api-development",
    title: "API Development",
    tagline: "Robust APIs and integrations.",
    description:
      "REST & GraphQL APIs, third-party integrations, webhook systems and secure API gateways.",
    icon: Puzzle,
    gradient: "from-rose-400 via-pink-500 to-fuchsia-500",
    offerings: ["REST & GraphQL APIs", "3rd-party integrations", "Webhook systems", "Auth & rate limiting"],
  },
  {
    id: "consulting",
    title: "Consulting",
    tagline: "Strategy for AI, product and engineering.",
    description:
      "Architecture reviews, AI roadmap workshops and hands-on technical leadership.",
    icon: Lightbulb,
    gradient: "from-yellow-400 via-amber-400 to-orange-400",
    offerings: ["AI strategy & roadmap", "Architecture reviews", "Team enablement", "Fractional CTO"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    tagline: "Stores designed to sell.",
    description:
      "Shopify, headless commerce, subscriptions, and CRO - from launch to scale.",
    icon: ShoppingBag,
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    offerings: ["Shopify / Hydrogen", "Subscription commerce", "CRO & analytics"],
  },
];
