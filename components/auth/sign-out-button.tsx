"use client";

import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button
      type="button"
      className="btn-primary"
      onClick={() => {
        void signOut({ callbackUrl: "/" });
      }}
    >
      Sign out
    </button>
  );
}
