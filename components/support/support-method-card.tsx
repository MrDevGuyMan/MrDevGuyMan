"use client";

import Link from "next/link";
import { useState } from "react";

import type { SupportMethod } from "@/data/support";

type SupportMethodCardProps = {
  method: SupportMethod;
};

export function SupportMethodCard({ method }: SupportMethodCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(method.value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="gold-trim section-shell rounded-[1.75rem] p-6 [--trim-left:82%] [--trim-top:68%]">
      <p className="eyebrow-label text-[11px]">{method.label}</p>
      <h2 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.04em] text-foreground">
        {method.title}
      </h2>
      {method.note ? (
        <p className="mt-4 text-sm font-medium leading-7 text-gold-300">
          {method.note}
        </p>
      ) : null}
      {method.qrSrc ? (
        <div className="mt-5 inline-flex rounded-[1.1rem] border border-border bg-white p-3">
          <img
            src={method.qrSrc}
            alt={method.qrAlt ?? `${method.title} QR code`}
            width={160}
            height={160}
            className="h-40 w-40"
          />
        </div>
      ) : null}
      <div className="mt-5 rounded-[1.1rem] border border-border bg-[#0d0b08] px-4 py-4">
        <p className="break-words font-mono text-sm leading-7 text-[#eadfbe]">
          {method.value}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {method.href ? (
          <Link
            href={method.href}
            target="_blank"
            rel="noreferrer"
            className="btn-link"
          >
            Open link
          </Link>
        ) : null}
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-3 rounded-full border border-border bg-[#120f0b] px-5 py-3 text-sm font-semibold tracking-[0.01em] text-foreground transition-colors hover:border-gold-300 hover:text-gold-300"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </article>
  );
}
