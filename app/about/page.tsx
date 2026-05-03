import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

const currentFocus = [
  "Building a clear home for projects that are meant to be explored, used, or played.",
  "Starting with BubbleBash, then expanding into more games and useful tools.",
  "Keeping the site clean and scalable so new projects can slot in without redesigning the foundation.",
];

export default function AboutPage() {
  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="About"
        title="A project hub built for making, shipping, and iterating."
        description="This website is meant to function as a living hub for active work rather than a static resume. Over time it will collect games, dev tools, and other interactive projects in one cohesive place."
      />
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="gold-trim rounded-3xl border border-border bg-surface/70 p-6 text-sm leading-7 text-muted [--trim-left:82%] [--trim-top:68%]">
          <div className="space-y-4">
            <p>
              This started as a place to put my work, but it quickly turned
              into something more.
            </p>
            <p>
              I wanted a space where I could build, test ideas, and actually
              use what I make &mdash; not just show it. Something that grows over
              time instead of sitting as a finished portfolio.
            </p>
            <p>
              The goal is simple: make it easy to explore, use, and come back
              to what gets built here.
            </p>
          </div>
        </div>
        <div className="gold-trim rounded-3xl border border-border bg-surface/70 p-6 [--trim-left:82%] [--trim-top:68%]">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Current focus
          </p>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-muted">
            {currentFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gold-trim rounded-3xl border border-border bg-surface/70 p-6 [--trim-left:82%] [--trim-top:68%]">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
          Supporting Other Developers
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          A few developers and projects worth checking out.
        </p>
        <div className="mt-5">
          <a
            href="https://theeoin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-border/80 bg-background/30 p-5 transition hover:border-accent/50 hover:bg-background/50"
          >
            <p className="text-base font-semibold text-foreground transition group-hover:text-accent">
              theeoin.com
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
              Forward-focused development work &mdash; AI systems, shipped
              games, and interactive web projects.
            </p>
          </a>
        </div>
      </section>
    </Container>
  );
}
