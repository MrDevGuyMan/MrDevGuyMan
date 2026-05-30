import Link from "next/link";

type AccountNavProps = {
  user: {
    displayName: string;
  } | null;
  mobile?: boolean;
};

export function AccountNav({ user, mobile = false }: AccountNavProps) {
  if (mobile) {
    return (
      <Link
        href={user ? "/account" : "/login"}
        aria-label={user ? "Open account" : "Open login page"}
        className="relative z-[2] inline-flex h-11 items-center justify-center rounded-full border border-line bg-[rgba(14,12,9,0.92)] px-3 text-[#eadfbe] transition hover:border-[rgba(212,175,55,0.45)] hover:text-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080705] md:hidden"
      >
        {user ? (
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
            <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="text-sm font-medium">Login</span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={user ? "/account" : "/login"}
      className="relative z-[2] hidden whitespace-nowrap rounded-full border border-line bg-[rgba(14,12,9,0.74)] px-4 py-2 text-[0.86rem] font-medium tracking-[-0.01em] text-[#eadfbe] transition hover:border-[rgba(212,175,55,0.45)] hover:text-gold-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080705] md:inline-flex lg:text-[0.92rem]"
    >
      {user ? user.displayName : "Login"}
    </Link>
  );
}
