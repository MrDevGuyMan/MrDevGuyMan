import { SupportMethodCard } from "@/components/support/support-method-card";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { supportMethods } from "@/data/support";

export default function SupportPage() {
  return (
    <Container className="space-y-10 pb-6">
      <PageHero
        eyebrow="Support"
        title="Support the developer."
        description="If you want to help fund more updates, future games, and practical tools, this page keeps every support option in one place."
      />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {supportMethods.map((method) => (
          <SupportMethodCard key={method.title} method={method} />
        ))}
      </section>
    </Container>
  );
}
