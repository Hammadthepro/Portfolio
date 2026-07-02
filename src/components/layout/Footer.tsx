import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-background/80">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-semibold">Hammad Siddiqui<span className="text-brand-blue">.</span></div>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">{site.description}</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: `mailto:${site.email}`, Icon: Mail, label: "Email" },
                { href: site.socials.github, Icon: Github, label: "GitHub" },
                { href: site.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} aria-label={label} className="grid h-10 w-10 place-items-center rounded-full glass hover:glow-blue transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[["/", "Home"], ["/about", "About"], ["/portfolio", "Portfolio"], ["/services", "Services"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-foreground transition">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Get in touch</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{site.email}</li>
              <li>{site.location}</li>
              <li><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse-glow" />{site.availability}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/5 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© 2025 Hammad Siddiqui. All Rights Reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs hover:glow-blue transition"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
