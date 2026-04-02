import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

const currentFocus = [
  "Building a clear home for projects that are meant to be explored, used, or played.",
  "Starting with BubbleBash, then expanding into tools and experimental work.",
  "Keeping the site clean and scalable so new projects can slot in without redesigning the foundation.",
];

export default function AboutPage() {
  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="About"
        title="A project hub built for making, shipping, and iterating."
        description="This website is meant to function as a living hub for active work rather than a static resume. Over time it will collect games, dev tools, experiments, and other interactive projects in one cohesive place."
      />
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="gold-trim rounded-3xl border border-border bg-surface/70 p-6 text-sm leading-7 text-muted [--trim-left:82%] [--trim-top:68%]">
          The goal is simple: make it easy for people to discover and use what
          gets built here. That means clear navigation, strong page structure,
          and room for both polished releases and works in progress.
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
    </Container>
  );
}
