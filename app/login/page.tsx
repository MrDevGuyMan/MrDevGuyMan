import { redirect } from "next/navigation";

import { AuthForms } from "@/app/login/auth-forms";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { auth } from "@/lib/auth/session";

export default async function LoginPage() {
  const session = await auth();

  if (session?.user) {
    redirect("/account");
  }

  return (
    <Container className="space-y-10 pb-4 md:space-y-12">
      <PageHero
        eyebrow="Account"
        title="Save scores when you want to compete."
        description="Create a free account to save scores and compete on leaderboards. Guest play still works exactly as before."
      />
      <AuthForms />
    </Container>
  );
}
