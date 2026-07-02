import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animations/primitives";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full transition-all duration-500",
          "px-3 py-2",
          scrolled
            ? "glass border-white/10 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.35)]"
            : "bg-transparent border-transparent",
        )}
      >
        <nav className="flex items-center gap-1 sm:gap-2">
          <Link to="/" className="group flex items-center rounded-full px-3 py-1.5">
            <span className="font-display text-base sm:text-lg font-semibold tracking-tight whitespace-nowrap">
              Hammad Siddiqui<span className="text-brand-blue">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link key={l.to} to={l.to} className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground">
                  <span className="relative z-10">{l.label}</span>
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <Magnetic className="hidden md:inline-block">
            <a
              href="/Hammad-Siddiqui-Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="ml-1 inline-flex items-center rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.7)] hover:shadow-[0_0_30px_-4px_rgba(139,92,246,0.85)] transition"
            >
              Resume
            </a>
          </Magnetic>

          <button
            className="md:hidden ml-1 grid h-9 w-9 place-items-center rounded-full glass"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
            <div className="relative flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full glass">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-16 flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.div key={l.to} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                    <Link to={l.to} className="block font-display text-4xl font-semibold py-2 hover:text-gradient">
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto">
                <a href="/Hammad-Siddiqui-Resume.pdf" className="block w-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple py-3 text-center text-sm font-medium text-white">Download Resume</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
