export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hammad delivered our Shopify Plus migration two weeks ahead of schedule. Store speed jumped from a 42 to a 91 on mobile Lighthouse and checkout conversion is up 27% since launch.",
    name: "Sarah Whitmore",
    role: "Head of E-commerce",
    company: "Beauty Kart",
  },
  {
    quote:
      "Hammad ne humari puri lead pipeline n8n aur GoHighLevel pe automate kar di. Ab har lead 30 seconds ke andar qualify hoke sales team ke pass pohanchti hai - game changer for us.",
    name: "Rohit Malhotra",
    role: "Founder",
    company: "GrowthKraft Digital",
  },
  {
    quote:
      "The AI cost-estimation assistant Hammad built for our team replaced 3 spreadsheets and roughly 6 hours of daily manual work. It just works - in front of clients, every day.",
    name: "Daniel Reyes",
    role: "COO",
    company: "Northline Construction",
  },
  {
    quote:
      "Bohot professional banda hai. Humari WordPress site ka custom theme, ACF setup aur speed optimization - sab kuch on time deliver kiya. Bilkul same-day communication bhi.",
    name: "Ayesha Siddiqa",
    role: "Marketing Lead",
    company: "Karachi Threads Co.",
  },
  {
    quote:
      "We hired Hammad to prototype a RAG assistant and he shipped a production system in three weeks - HubSpot integrated, evaluated, and running against real customer data.",
    name: "Priya Menon",
    role: "Head of Product",
    company: "NexusBI",
  },
  {
    quote:
      "Our BigCommerce storefront was bleeding performance. Hammad rewrote the theme, cleaned up the app stack and set up n8n flows for our order ops. Sales team finally has their weekends back.",
    name: "Marcus Whitfield",
    role: "Founder",
    company: "Whitfield Supply Co.",
  },
];
