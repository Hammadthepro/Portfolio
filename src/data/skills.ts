export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { title: "CMS", skills: ["WordPress", "Shopify", "BigCommerce", "Wix"] },
  { title: "AI / ML", skills: ["OpenAI", "Anthropic", "LangChain", "LangGraph", "LlamaIndex", "RAG", "Pinecone"] },
  { title: "Automation", skills: ["n8n", "Zapier", "HubSpot", "GoHighLevel"] },
  { title: "Cloud", skills: ["AWS", "Cloudflare", "Vercel", "Docker", "Kubernetes"] },
  { title: "Database", skills: ["PostgreSQL", "MongoDB", "Supabase", "MySQL"] },
];

export const marqueeLogos = [
  "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
  "OpenAI", "Anthropic", "LangChain", "n8n", "Zapier",
  "PostgreSQL", "Supabase", "AWS", "Cloudflare", "Shopify", "WordPress", "BigCommerce", "Wix",
];
