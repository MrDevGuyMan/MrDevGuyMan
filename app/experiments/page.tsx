import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { experiments } from "@/data/projects";

export default function ExperimentsPage() {
  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="Experiments"
        title="Test ideas, technical spikes, and visual exploration."
        description="Experiments are where concepts get pressure-tested before they turn into polished projects. This area can hold rendering tests, UI prototypes, browser performance work, and one-off technical ideas."
      />
      <section className="grid gap-6 md:grid-cols-2">
        {experiments.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </section>
    </Container>
  );
}

