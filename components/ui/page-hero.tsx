import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className="gold-trim glass-panel relative rounded-[2rem] p-8 [--trim-left:84%] [--trim-top:74%] md:p-10 lg:p-12">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(220,170,130,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-[2rem] bg-[linear-gradient(90deg,transparent,rgba(236,198,160,0.46),transparent)]" />
      <div className="relative">
        {aside ? (
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-center lg:gap-10">
            <div className="min-w-0">
              {eyebrow ? <p className="eyebrow-label">{eyebrow}</p> : null}
              <div className="mt-4 space-y-4">
                <h1 className="max-w-3xl text-[2.8rem] font-semibold tracking-[-0.045em] text-foreground md:text-[3.6rem] md:leading-[1.04]">
                  {title}
                </h1>
                <p className="max-w-2xl text-[1rem] leading-8 text-muted md:text-[1.08rem]">
                  {description}
                </p>
              </div>
            </div>
            <div className="justify-self-start lg:justify-self-end">{aside}</div>
          </div>
        ) : (
          <>
            {eyebrow ? <p className="eyebrow-label">{eyebrow}</p> : null}
            <div className="mt-4 space-y-4">
              <h1 className="max-w-3xl text-[2.8rem] font-semibold tracking-[-0.045em] text-foreground md:text-[3.6rem] md:leading-[1.04]">
                {title}
              </h1>
              <p className="max-w-2xl text-[1rem] leading-8 text-muted md:text-[1.08rem]">
                {description}
              </p>
            </div>
          </>
        )}
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
