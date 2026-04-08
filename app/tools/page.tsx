import { ProjectCard } from "@/components/cards/project-card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { tools } from "@/data/projects";

export default function ToolsPage() {
  const [featuredTool, ...secondaryTools] = tools;

  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="Tools"
        title="Useful browser utilities built to solve practical problems."
        description="This section is reserved for focused tools, game development helpers, and workflow utilities. The first wave includes the heightmap generator and other interactive utilities that are useful on their own."
      />
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1.02fr)_minmax(0,0.88fr)] md:items-start">
          {featuredTool ? <ProjectCard item={featuredTool} /> : null}
          <div className="grid gap-5">
            {secondaryTools.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
