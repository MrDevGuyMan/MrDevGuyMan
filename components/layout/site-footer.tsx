import Link from "next/link";
import { primaryNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { SurpriseMeLink } from "@/components/ui/surprise-me-link";

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-line bg-[linear-gradient(180deg,rgba(9,8,6,0),rgba(16,13,10,0.66))]">
      <Container className="grid gap-12 py-16 text-sm text-muted md:grid-cols-[1.2fr_0.8fr_auto] md:items-start">
        <div className="max-w-md">
          <p className="mb-4 font-semibold tracking-[-0.03em] text-gold-100">MrDevGuyMan Hub</p>
          <p className="mb-4 text-base font-medium text-[#d7ccb5]">
            Small games and prototypes I&apos;m building, plus tools for terrain, workflows, and experimentation.
          </p>
          <p className="leading-7">
            Built to stay clear as the project list grows, with room for playable releases, utilities, and technical ideas.
          </p>
        </div>
        <div>
          <p className="mb-4 font-semibold tracking-[-0.03em] text-gold-100">Explore</p>
          <div className="flex flex-col gap-3">
            {primaryNavigation.map((item) => (
              item.href === "/surprise-me" ? (
                <SurpriseMeLink
                  key={item.href}
                  className="transition-colors hover:text-gold-300"
                >
                  {item.label}
                </SurpriseMeLink>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-gold-300"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <p className="mb-4 font-semibold tracking-[-0.03em] text-gold-100">Status</p>
          <p className="mb-2 text-base font-medium text-[#d7ccb5]">
            {new Date().getFullYear()} MrDevGuyMan Hub
          </p>
          <p className="leading-7">Foundation live. BubbleBash first, then the rest.</p>
        </div>
      </Container>
    </footer>
  );
}
