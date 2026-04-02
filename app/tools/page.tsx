import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { tools } from "@/data/projects";

export default function ToolsPage() {
  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="Tools"
        title="Useful browser utilities built to solve practical problems."
        description="This section is reserved for focused tools, game development helpers, and workflow utilities. The first wave includes concepts like a heightmap generator and other interactive utilities that are useful on their own."
      />
      <section className="grid gap-6 md:grid-cols-2">
        {tools.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </section>
    </Container>
  );
}

