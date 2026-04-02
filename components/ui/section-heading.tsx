import Link from "next/link";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
      <div className="max-w-2xl">
        <p className="eyebrow-label text-[11px]">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-[2.15rem] font-semibold tracking-[-0.045em] text-foreground md:text-[3rem] md:leading-[1.02]">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-[1rem] leading-8 text-muted md:text-[1.05rem]">
          {description}
        </p>
      </div>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className="btn-link">
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
