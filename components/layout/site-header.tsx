import Link from "next/link";
import { auth } from "@/lib/auth/session";
import { HeaderNav } from "@/components/layout/header-nav";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export async function SiteHeader() {
  const brandName = siteConfig.name.replace(/\s+/g, "");
  const compactBrandName = brandName.replace(/Hub$/, "");
  const session = await auth();
  const user = session?.user
    ? {
        displayName: session.user.displayName,
      }
    : null;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(8,7,5,0.88)] backdrop-blur-md">
      <Container className="flex h-[4.5rem] items-center justify-between gap-3">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 text-ink-50 transition hover:opacity-80 md:flex-none"
        >
          <span className="flex min-w-0 items-center gap-3">
            <svg
              aria-hidden="true"
              viewBox="0 0 66 54"
              className="h-10 w-auto shrink-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8H27L39 20V46H8V8Z"
                stroke="url(#goldStroke)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M19 17V37H27L39 25"
                stroke="url(#goldStroke)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39 20L52 8H58V46H48V24L39 31"
                stroke="url(#goldStroke)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="goldStroke" x1="8" y1="8" x2="58" y2="46" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4E7C1" />
                  <stop offset="0.5" stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#8F6A14" />
                </linearGradient>
              </defs>
            </svg>
            <span className="min-w-0 whitespace-nowrap text-[1.02rem] font-medium tracking-[-0.03em] text-[#eadfbe]">
              <span className="block truncate md:hidden">{compactBrandName}</span>
              <span className="hidden md:inline">{brandName}</span>
            </span>
          </span>
        </Link>
        <HeaderNav items={primaryNavigation} user={user} />
      </Container>
    </header>
  );
}
