import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, CheckCircle2, Loader2, Send } from "lucide-react";
import { GridBackground, Reveal } from "@/components/animations/primitives";
import { site } from "@/data/site";
import { services as serviceList } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Hammad Siddiqui" },
      { name: "description", content: "Let's build something. Get in touch to discuss your website, AI or automation project." },
      { property: "og:title", content: "Contact - Hammad Siddiqui" },
      { property: "og:description", content: "Start a conversation about your next project." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().min(1, "Please enter your budget"),
  service: z.string().min(1, "Pick a service"),
  message: z.string().trim().min(10, "Tell me a little more (10+ characters)").max(2000),
});
type FormData = z.infer<typeof schema>;

const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

function ContactPage() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { budget: "", service: "" },
  });

  const onSubmit = async (data: FormData) => {
    setState("sending");
    try {
      if (!endpoint) {
        // Local/dev fallback - succeed after a beat so the flow is testable.
        await new Promise((r) => setTimeout(r, 900));
      } else {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            subject: `New enquiry from ${data.name}`,
            name: data.name,
            email: data.email,
            company: data.company,
            budget: data.budget,
            service: data.service,
            message: data.message,
          }),
        });
        const result = await res.json();

        if (!result.success) {
          throw new Error(result.message || "Failed to send message");
        }
      }
      setState("success");
      reset();
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <section className="relative pt-36 pb-10 overflow-hidden">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">Contact</div>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Let's build <span className="text-gradient">something amazing.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Tell me about your project. I typically reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <Reveal>
            <div className="space-y-4">
              <InfoRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <InfoRow icon={MapPin} label="Location" value={site.location} />
              <InfoRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/hammadthepro" href={site.socials.linkedin} />
              <InfoRow icon={Github} label="GitHub" value="github.com/Hammadthepro" href={site.socials.github} />
              <div className="rounded-3xl glass p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Currently</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                  <div className="font-medium">{site.availability}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Taking on a small number of new engagements this quarter - first come, first served.</p>
              </div>
            </div>
          </Reveal>

          {/* Form column */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="relative rounded-3xl glass p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input {...register("name")} className={inputCls} placeholder="Your name" autoComplete="name" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input {...register("email")} className={inputCls} placeholder="you@company.com" type="email" autoComplete="email" />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <input {...register("company")} className={inputCls} placeholder="Optional" autoComplete="organization" />
                </Field>
                <Field label="Budget" error={errors.budget?.message}>
                  <input
                    {...register("budget")}
                    className={inputCls}
                    placeholder="e.g. $5,000, PKR 500,000, or Flexible"
                    autoComplete="off"
                  />
                </Field>
                <Field label="Service" error={errors.service?.message} className="sm:col-span-2">
                  <select
                    {...register("service")}
                    className={`${inputCls} bg-zinc-900 text-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>What can I help with?</option>
                    {serviceList.map((s) => (<option key={s.id} value={s.title}>{s.title}</option>))}
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Message" error={errors.message?.message} className="sm:col-span-2">
                  <textarea {...register("message")} rows={5} className={inputCls} placeholder="Tell me about your project, goals and timeline." />
                </Field>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">By sending you agree to be contacted about your enquiry.</p>
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] disabled:opacity-60"
                >
                  {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {state === "sending" ? "Sending…" : "Send message"}
                </button>
              </div>

              <AnimatePresence>
                {state === "success" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    Thanks - your message is on its way. I'll reply within 24 hours.
                  </motion.div>
                )}
                {state === "error" && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-5 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm">
                    Something went wrong sending your message. Please email me directly at {site.email}.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-brand-blue/60 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition";

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl glass px-5 py-4 transition hover:glow-blue">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20">
        <Icon className="h-4 w-4 text-brand-cyan" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{inner}</a> : inner;
}
