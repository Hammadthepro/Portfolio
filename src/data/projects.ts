import type { ProjectCategory } from "./categories";

import advanceWayAsset from "@/assets/projects/advance_way_logistics.asset.json";
import beautyKartAsset from "@/assets/projects/beauty_kart.jpg";
import creticalAsset from "@/assets/projects/cretical_expitide.asset.json";
import biPlatformAsset from "@/assets/projects/business-intelligence-platform.asset.json";
import nexusBiAsset from "@/assets/projects/image.asset.json";
import realEstateAiAsset from "@/assets/projects/image-2.asset.json";
import n8nDataAsset from "@/assets/projects/n8n_data_system.asset.json";
import n8nApiAgentAsset from "@/assets/projects/n8n_api_agent.asset.json";
import n8nContentAsset from "@/assets/projects/n8n_content_analysis.asset.json";
import n8nUserMgmtAsset from "@/assets/projects/n8n_user_management.asset.json";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  solution?: string;
  results?: string;
  features?: string[];
  challenges?: string[];
  categories: ProjectCategory[];
  techStack: string[];
  clientType?: string;
  year: number;
  timeline?: string;
  thumbnail: string;
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "advance-way-logistics",
    title: "Advance Way Logistics - WordPress Website",
    description:
      "Professional, responsive WordPress site for a logistics and freight forwarding company, built with Elementor.",
    longDescription:
      "I designed and built a WordPress website for Advance Way Logistics LLC, a logistics and freight forwarding company. Using Elementor, I created a professional and responsive theme that showcases their services, builds trust, and makes it easy for customers to get in touch.",
    problem:
      "Advance Way needed a credible online presence that clearly presented their services and made it easy for prospects to request quotes.",
    solution:
      "A clean, on-brand Elementor build with a services-first structure, quote CTAs on every page, mobile-first layouts and on-page SEO baked in.",
    results:
      "A fast, mobile-optimized website that improved lead capture and gave the sales team a professional platform to point prospects to.",
    features: [
      "Custom Elementor theme aligned to brand",
      "Services, About and Contact flows with quote CTAs",
      "Mobile-first responsive layouts",
      "On-page SEO and performance optimization",
    ],
    categories: ["website-development"],
    techStack: ["WordPress", "Elementor", "PHP", "SEO", "Responsive Design"],
    clientType: "Logistics & Freight",
    year: 2025,
    timeline: "Apr 2025 – May 2025",
    thumbnail: advanceWayAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "raps-co-ecommerce-optimization",
    title: "Raps Co - E-commerce Technical Optimization",
    description:
      "Resolved urgent frontend issues on a lifestyle & wellness Shopify/WordPress store, restoring speed and visual consistency.",
    longDescription:
      "I worked with the client to resolve urgent technical problems on their Raps Co e-commerce platform, which specializes in lifestyle and wellness products. The goal was to improve UX by fixing Elementor slider loop issues and ensuring images loaded correctly on product pages and banners.",
    problem:
      "Broken Elementor sliders, missing product imagery and frontend slowdowns were hurting UX and driving bounce rates up on a live store.",
    solution:
      "A careful audit of the frontend, targeted clean-code fixes and image/loading optimizations applied without disrupting live traffic.",
    results:
      "The site is now faster, more reliable and visually consistent across desktop and mobile - with measurable bounce-rate improvements.",
    features: [
      "Elementor slider loop debugging & fixes",
      "Product & banner image loading fixes",
      "Frontend performance tuning",
      "Zero-downtime deployment on a live store",
    ],
    categories: ["website-development"],
    techStack: ["WordPress", "Elementor", "JavaScript", "CSS", "Performance"],
    clientType: "E-commerce · Lifestyle & Wellness",
    year: 2025,
    timeline: "Apr 2025 – May 2025",
    thumbnail: "/projects/raps_co.jpg",
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "beauty-kart-shopify",
    title: "Beauty Kart - Shopify E-commerce Store",
    description:
      "Stylish, mobile-first Shopify storefront for a beauty & skincare brand, customized with Modylist.",
    longDescription:
      "I designed and built a complete Shopify store for Beauty Kart, a beauty and skincare brand. The goal was a stylish, user-friendly shopping experience optimized for conversion and aligned with the modern beauty aesthetic.",
    problem:
      "Beauty Kart needed a launch-ready Shopify store that felt premium, converted well and matched their clean, modern brand identity.",
    solution:
      "A Modylist-customized Shopify build with a visually rich storefront, easy navigation, mobile-first layouts and a frictionless checkout.",
    results:
      "A fast, on-brand storefront with smooth product browsing and a checkout flow tuned for conversion.",
    features: [
      "Custom Shopify theme customization with Modylist",
      "Mobile-first responsive design",
      "Optimized product browsing & category flows",
      "Streamlined checkout experience",
    ],
    categories: ["website-development"],
    techStack: ["Shopify", "Modylist", "Liquid", "Theme Customization"],
    clientType: "E-commerce · Beauty & Skincare",
    year: 2025,
    timeline: "Mar 2025 – Apr 2025",
    thumbnail: beautyKartAsset.url,
    liveUrl: "#",
  },
  {
    slug: "critical-expedite-freight",
    title: "Critical Expedite Freight - Custom Node.js Site",
    description:
      "Asset-based freight brokerage website - custom Node.js build deployed alongside WordPress. \"Delivering The Future Of Logistics - Where Trust Travels.\"",
    longDescription:
      "A website for Critical Expedite Freight LLC, an asset-based freight brokerage. I built a custom Node.js frontend around their positioning - \"Delivering The Future Of Logistics. Where Trust Travels.\" - and deployed it in tandem with WordPress for content management.",
    problem:
      "Critical Expedite needed a modern, tech-forward site that reflected 15+ years of experience and their asset-based brokerage model - beyond what a stock WordPress theme could deliver.",
    solution:
      "A custom Node.js frontend deployed with WordPress on the backend, featuring a bold hero, clear service positioning and prominent quote CTAs.",
    results:
      "A distinctive, tech-driven brand presence with clear conversion paths to \"Get A Quote\" and services.",
    features: [
      "Custom Node.js frontend with WordPress CMS backend",
      "Hero storytelling: \"Delivering The Future Of Logistics\"",
      "Prominent Get A Quote and Services CTAs",
      "Responsive, brand-forward layout",
    ],
    categories: ["website-development", "custom-software"],
    techStack: ["Node.js", "WordPress", "JavaScript", "REST APIs"],
    clientType: "Asset-Based Freight Brokerage",
    year: 2025,
    thumbnail: creticalAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "business-intelligence-platform",
    title: "Business Intelligence Platform - Full-Stack Web App",
    description:
      "Full-stack BI platform turning raw business data into actionable insights via interactive dashboards, real-time analytics and automated reporting.",
    longDescription:
      "I developed a Business Intelligence Platform that helps organizations transform raw business data into actionable insights through interactive dashboards, real-time analytics and automated reporting. The platform lets teams monitor KPIs, visualize trends and make data-driven decisions from a centralized interface.",
    problem:
      "Leadership needed a single place to monitor KPIs and trends across the business without waiting on manual reports from analysts.",
    solution:
      "A full-stack platform with dynamic dashboards, advanced filtering, customizable reports, secure auth and responsive data visualizations - engineered for performance and scale.",
    results:
      "A centralized decision-making surface with real-time analytics, smooth UX on desktop and mobile, and headroom for future integrations.",
    features: [
      "Dynamic, interactive dashboards",
      "Advanced data filtering & customizable reports",
      "Secure user authentication and roles",
      "Responsive data visualizations",
      "Scalable architecture for future integrations",
    ],
    categories: ["custom-software", "ai-development"],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Charting",
    ],
    clientType: "SaaS / Enterprise",
    year: 2026,
    timeline: "May 2026 – Jun 2026",
    thumbnail: biPlatformAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "nexus-bi-platform",
    title: "NexusBI - Multi-Agent Business Intelligence Platform",
    description:
      "AI-powered multi-agent BI platform where specialized agents analyze business data and generate dashboards and executive-ready reports.",
    longDescription:
      "I developed NexusBI, an AI-powered multi-agent business intelligence platform that lets organizations analyze business data through specialized AI agents. It transforms complex datasets into actionable insights by automating analysis, generating interactive dashboards and producing intelligent reports for faster, data-driven decisions.",
    problem:
      "BI teams were bottlenecked answering cross-functional questions; leaders needed answers, not more dashboards to configure manually.",
    solution:
      "A multi-agent system with dedicated agents for sales, finance, operations and customer analytics - coordinated over a shared business brief, with secure auth, real-time processing and interactive visualizations.",
    results:
      "Faster time-to-insight, self-serve analytics for non-technical leaders and a scalable foundation for adding new agents and integrations.",
    features: [
      "5+ specialized AI agents (Analyst, Strategist, Prospector, Copywriter, Synthesizer)",
      "Sequential agent pipeline with shared business profile",
      "Interactive dashboards & automated reporting",
      "Secure authentication and role-based access",
      "Real-time data processing",
      "Scalable architecture for future agents & integrations",
    ],
    categories: ["ai-development", "custom-software"],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "OpenAI",
      "LangChain",
      "PostgreSQL",
    ],
    clientType: "SaaS / Enterprise",
    year: 2026,
    timeline: "Jun 2026 – Jul 2026",
    thumbnail: nexusBiAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "real-estate-ai-assistant",
    title: "Real Estate AI Assistant - Cost Estimation Platform",
    description:
      "AI-powered assistant that generates property renovation and construction cost estimates from user inputs, project requirements and market data.",
    longDescription:
      "I developed an AI-powered real estate assistant that generates property renovation and construction cost estimates based on user inputs, project requirements and market data. The platform helps homeowners, investors and real estate professionals quickly evaluate project feasibility and make informed investment decisions.",
    problem:
      "Renovation and construction cost estimates traditionally take hours of manual calculation, delaying deals and investment decisions.",
    solution:
      "A guided-interview AI platform that captures project requirements, applies country-aware pricing and returns a professional, detailed breakdown in minutes.",
    results:
      "Estimates that previously took hours are delivered in minutes with a clean, project-grade breakdown and downloadable report.",
    features: [
      "Guided 20-question project interview",
      "Country-aware materials & labor pricing",
      "Detailed breakdown: foundation, structure, finishing & more",
      "AI-generated recommendations",
      "Downloadable, project-grade reports",
    ],
    categories: ["ai-development", "ai-automation"],
    techStack: [
      "React",
      "TypeScript",
      "OpenAI",
      "Node.js",
      "Prompt Engineering",
      "REST APIs",
    ],
    clientType: "Real Estate & Construction",
    year: 2026,
    timeline: "Jun 2026",
    thumbnail: realEstateAiAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "n8n-automated-data-system",
    title: "Automated Data System - n8n Web Scraping Pipeline",
    description:
      "n8n workflow that scrapes websites via HTTP requests, extracts structured data from HTML and pipes it into Google Sheets, databases and JSON.",
    longDescription:
      "The client needed automated data collection from websites, eliminating manual input. I built an n8n scraping and processing system that retrieves data via HTTP requests, extracts and structures HTML content, then writes it to Google Sheets, a database and JSON files for downstream use.",
    problem:
      "Manual data collection from multiple websites was slow, error-prone and impossible to scale as the target list grew.",
    solution:
      "An n8n pipeline that fetches pages, extracts HTML content, splits results and fans them out to Google Sheets, MySQL and JSON - with adaptable parsing rules to handle differing site structures.",
    results:
      "A dependable, repeatable data process that replaced manual work and scales to new sources by adding a node - not a new script.",
    features: [
      "HTTP Request → HTML extract → Split Out pipeline",
      "Google Sheets append/update integration",
      "MySQL upsert into structured tables",
      "Convert to JSON for downstream systems",
      "Adaptable parsing rules for varied HTML structures",
    ],
    categories: ["ai-automation"],
    techStack: ["n8n", "HTTP Request", "HTML Extract", "Google Sheets", "MySQL", "JSON"],
    clientType: "Business Services & Consulting",
    year: 2026,
    timeline: "1–7 days",
    thumbnail: n8nDataAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "n8n-ai-agent-api-decisions",
    title: "AI Agent with API & Auto Decisions - n8n Webhook Agent",
    description:
      "Webhook-triggered n8n AI agent that reads a knowledge base, decides between GET / POST / DELETE and returns strictly structured responses.",
    longDescription:
      "This project built an AI system that manages API requests and automates decisions. Using n8n, I built an AI agent that receives webhook requests, reads Proxmox API documentation as tools, decides the correct action and calls the right endpoint - with an auto-fixing output parser guaranteeing structured responses.",
    problem:
      "The team needed a single endpoint that could accept a natural-language request and route it to the correct API operation without human triage.",
    solution:
      "An n8n Tools Agent (Gemini) with Proxmox API docs as tools, a Switch node routing GET / POST / DELETE, and an auto-fixing output parser backed by a Groq structured-output parser to enforce a strict response schema.",
    results:
      "Backend API management is now automated end-to-end from a single webhook, with consistent, machine-readable outputs downstream systems can trust.",
    features: [
      "Webhook trigger with AI Tools Agent",
      "Proxmox API docs loaded as agent tools",
      "Switch routing across GET / POST / DELETE",
      "Auto-fixing structured output parser",
      "Consistent, schema-valid response formatting",
    ],
    categories: ["ai-automation", "ai-development"],
    techStack: ["n8n", "Google Gemini", "Groq", "Webhooks", "REST APIs", "Structured Output"],
    clientType: "Business Services",
    year: 2026,
    timeline: "1–7 days",
    thumbnail: n8nApiAgentAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "n8n-content-analysis-sentiment",
    title: "AI Content Analysis & Sentiment - n8n Workflow",
    description:
      "n8n workflow that pulls Reddit posts, summarizes with Anthropic, runs sentiment analysis and ships insights to Slack and Google Sheets.",
    longDescription:
      "I automated content analysis and sentiment tracking from external sources. The n8n workflow gathers Reddit data, filters it, summarizes with an Anthropic-powered chain, runs a sentiment analysis agent and posts structured insights to Slack and Google Sheets.",
    problem:
      "Marketing wanted to track sentiment and conversation trends from external platforms in near real time - without an analyst manually reading threads.",
    solution:
      "A branched n8n workflow: Reddit → filter → Conversational Agent → Summarization Chain → Sentiment Analysis Agent → Slack + Google Sheets, all backed by Anthropic Chat models.",
    results:
      "Marketing gets structured, ready-to-read summaries and sentiment signals in Slack and a Sheets log - saving hours of manual monitoring per week.",
    features: [
      "Reddit search & keyword filtering",
      "Conversational Agent for content prep",
      "Summarization Chain over long posts",
      "Sentiment Analysis Agent with structured output",
      "Slack notifications + Google Sheets append",
    ],
    categories: ["ai-automation", "ai-development"],
    techStack: ["n8n", "Anthropic Claude", "Reddit API", "Slack", "Google Sheets"],
    clientType: "Marketing Agency",
    year: 2026,
    timeline: "1–7 days",
    thumbnail: n8nContentAsset.url,
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "n8n-ai-user-management",
    title: "AI-Powered User Management - n8n Onboarding Automation",
    description:
      "Form-triggered n8n workflow that uses an AI agent to create users in Microsoft Entra ID, open Jira tickets and route Slack updates by role.",
    longDescription:
      "I built an AI-powered onboarding workflow in n8n. When a Create User form is submitted, an AI Tools Agent (Anthropic + Postgres memory) processes the request, creates the user in Microsoft Entra ID, opens a Jira ticket and - based on whether the new user is a manager - either adds them to a Slack channel or updates their profile.",
    problem:
      "New-hire onboarding required admins to touch Entra ID, Jira and Slack manually for every user, with different steps depending on role.",
    solution:
      "An n8n workflow: Form Submission → Anthropic Tools Agent (with Postgres chat memory) → Microsoft Entra ID getAll + Jira create → Is Manager? branch → Slack add-to-channel or Slack update-profile.",
    results:
      "Onboarding is now hands-off end-to-end, with role-aware branching and a full audit trail across the three systems.",
    features: [
      "Form-submission trigger",
      "Anthropic Tools Agent with Postgres memory",
      "Microsoft Entra ID user creation",
      "Jira ticket creation",
      "Role-based Slack routing (add to channel vs update profile)",
    ],
    categories: ["ai-automation", "ai-development"],
    techStack: ["n8n", "Anthropic Claude", "PostgreSQL", "Microsoft Entra ID", "Jira", "Slack"],
    clientType: "HR & Recruiting Services",
    year: 2026,
    timeline: "1–7 days",
    thumbnail: n8nUserMgmtAsset.url,
    liveUrl: "#",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
export function getFeaturedProjects(limit = 4) {
  return projects.filter((p) => p.featured).slice(0, limit);
}
