import { marqueeLogos } from "@/data/skills";

export function LogoMarquee() {
  const items = [...marqueeLogos, ...marqueeLogos];
  return (
    <div className="relative overflow-hidden py-8 mask-fade-b [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-3 text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue/70" />
            <span className="font-display text-lg font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
