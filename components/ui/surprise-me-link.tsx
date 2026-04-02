"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SurpriseMeLinkProps = {
  children: ReactNode;
  className?: string;
};

export function SurpriseMeLink({ children, className }: SurpriseMeLinkProps) {
  const pathname = usePathname() ?? "/";
  const href = {
    pathname: "/surprise-me",
    query: { from: pathname },
  };

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
