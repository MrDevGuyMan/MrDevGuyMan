import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { elevenLabsTool } from "@/data/useful-tools";

export const metadata: Metadata = {
  title: "ElevenLabs Review – Realistic AI Voice Generator for Developers & Creators",
  description:
    "A practical look at ElevenLabs AI voice generator. Learn how it works, why it stands out, and how developers and creators can use it for text-to-speech, games, and content.",
};

const workflowUseCases = [
  {
    title: "Prototyping",
    description:
      "If I'm testing how voice feels in a game or tool, I can generate it instantly. No recording setup, no editing just generate and drop it in.",
  },
  {
    title: "UI and System Voice",
    description:
      "For things like instructions, alerts, or narration, this works really well. You get consistent, clean audio without needing a full production pipeline.",
  },
  {
    title: "Content Creation",
    description:
      "If you're making videos, demos, or walkthroughs, this can replace or speed up traditional voice recording. You can iterate quickly instead of re-recording takes.",
  },
  {
    title: "Filling Gaps During Development",
    description:
      "Even if you plan to use real voice actors later, this lets you move forward without being blocked by missing audio.",
  },
];

const idealUsers = [
  "Developers who want to add voice to apps, tools, or games",
  "Game developers who need dialogue, narration, or system audio",
  "Content creators making videos, demos, or narrated content",
  "Anyone exploring AI voice generation in a practical way",
];

export default function ElevenLabsPage() {
  return (
    <Container className="space-y-10">
      <PageHero
        eyebrow="Useful Tools"
        title={
          <a
            href={elevenLabsTool.affiliateHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex underline-offset-4 transition-colors duration-200 hover:text-gold-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080705]"
          >
            {elevenLabsTool.title}
          </a>
        }
        description={elevenLabsTool.shortDescription}
        aside={
          <div className="w-full max-w-[12.5rem] sm:max-w-[14rem] lg:mr-2 lg:w-[14rem] xl:w-[15rem]">
            <div className="rounded-[1.6rem] border border-[rgba(212,175,55,0.18)] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.09),transparent_56%),linear-gradient(180deg,rgba(24,20,14,0.9),rgba(9,8,6,0.96))] p-2 shadow-[0_18px_40px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,240,196,0.04)]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.2rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                <Image
                  src={elevenLabsTool.thumbnailSrc}
                  alt={elevenLabsTool.thumbnailAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 224px, 240px"
                  className="object-contain p-4 sm:p-5"
                />
              </div>
            </div>
          </div>
        }
      />

      <section className="mx-auto max-w-3xl">
        <div className="gold-trim rounded-3xl border border-border bg-surface/70 p-6 [--trim-left:82%] [--trim-top:70%] sm:p-8 lg:p-10">
          <div className="space-y-10">
            <div className="space-y-5">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                  Why I Use ElevenLabs
                </h2>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Most AI voice tools sound fine until you actually try to use them in a real project. That&rsquo;s
                  where they usually fall apart &mdash; voices feel flat, pacing is off, and you end up spending more
                  time fixing the output than using it. I started using ElevenLabs because I needed something that
                  didn&rsquo;t just &ldquo;work&rdquo;, but actually sounded believable enough to drop straight into a
                  game or tool without it breaking immersion.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  I originally started using it because I needed a reliable AI voice generator that didn&apos;t sound
                  robotic. Not just something &quot;passable&quot;, but something I could actually use inside real
                  projects whether that&apos;s a game, a tool, or any kind of user-facing experience.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Most text-to-speech tools fall apart pretty quickly. The voices sound flat, the pacing feels off, and
                  you end up spending more time fixing the output than actually using it.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  ElevenLabs was the first platform I tried where the result felt usable straight away.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  You type, you generate, and what comes out actually sounds like a person. Not perfect, but close
                  enough that it works in real-world use without a ton of effort.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/30 p-5 sm:p-6">
                <div className="space-y-3">
                  <a
                    href={elevenLabsTool.affiliateHref}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn-primary min-h-12 w-full px-6 text-center sm:w-auto"
                  >
                    Try ElevenLabs
                  </a>
                  <p className="max-w-xl text-xs leading-6 text-muted sm:text-sm">
                    This is an affiliate link. I may earn a commission at no extra cost to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  What ElevenLabs Actually Does
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  At a basic level, ElevenLabs is an AI text-to-speech platform that turns written text into realistic
                  voice.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  The difference is in how natural it sounds.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  It doesn&apos;t just read words, it handles tone, pacing, and emphasis in a way that feels
                  intentional. That makes a huge difference if you&apos;re building something where audio matters, even
                  slightly.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  You also get control over how the voice behaves. You can adjust things like stability and clarity,
                  which lets you push the output toward something more expressive or more consistent depending on your
                  use case.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  For developers and creators, that flexibility is what makes it useful long-term.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  Where It Fits in My Workflow
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  I use ElevenLabs anywhere I need fast, believable voice without adding complexity to a project.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  The biggest use cases for me:
                </p>
                <ul className="space-y-4">
                  {workflowUseCases.map((item) => (
                    <li key={item.title} className="rounded-2xl border border-border/70 bg-background/20 p-4 sm:p-5">
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  Why It Stands Out Compared to Other AI Voice Tools
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  The biggest difference is that it doesn&apos;t feel like you&apos;re fighting the tool.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  A lot of AI voice generators technically work, but require constant tweaking to sound decent.
                  ElevenLabs gets you something good quickly, and then you refine if needed.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  The voices also have enough variation that they don&apos;t feel repetitive. That&apos;s one of the
                  biggest problems with synthetic voice, and this handles it better than most.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  It&apos;s also fast. You can go from idea to generated voice to implemented in minutes. That kind of
                  workflow speed is what actually makes a tool valuable.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  Who Should Use ElevenLabs
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  This isn&apos;t just for one type of user.
                </p>
                <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-muted marker:text-accent sm:text-base sm:leading-8">
                  {idealUsers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  If your project benefits from voice in any way, this gives you a low-friction way to add it.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  Limitations to Be Aware Of
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  It&apos;s not perfect, and it&apos;s worth knowing where the edges are.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Sometimes you&apos;ll need to tweak your text slightly to get the exact delivery you want. Small
                  wording changes can affect tone and pacing.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  For highly emotional or performance-heavy voice work, a real voice actor still has the edge. But for
                  most practical use cases, this gets surprisingly close.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  Pricing is also something to consider if you&apos;re generating large amounts of audio regularly.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]">
                  Final Thoughts
                </h3>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  For me, ElevenLabs isn&apos;t just a tool I tested once, it&apos;s something I actually use while
                  building things.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  It removes a barrier that used to slow development down. Instead of leaving voice for later, you can
                  include it from the start.
                </p>
                <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  If you&apos;re looking for a realistic AI voice generator that fits into real workflows, this is one
                  of the easiest ones to recommend.
                </p>
                <div className="rounded-2xl border border-border/80 bg-background/30 p-5 text-center sm:p-6">
                  <div className="space-y-3">
                    <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
                      If you&apos;re working on anything where voice could add value, it&apos;s worth trying
                      ElevenLabs and seeing how it fits into your workflow.
                    </p>
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href="https://try.elevenlabs.io/f8dqjh7h4xct"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary min-h-12 w-full px-6 text-center sm:w-auto"
                      >
                        Try ElevenLabs
                      </a>
                      <p className="max-w-xl text-xs leading-6 text-muted sm:text-sm">
                        This is an affiliate link. I may earn a commission at no extra cost to you.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
