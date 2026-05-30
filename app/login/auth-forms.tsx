"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, useTransition } from "react";

type AuthFormState = {
  error: string | null;
};

type RegisterResponsePayload = {
  ok?: boolean;
  message?: string;
};

async function readJsonIfAvailable(response: Response): Promise<RegisterResponsePayload | null> {
  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return null;
  }

  const responseText = await response.text();

  if (!responseText.trim()) {
    return null;
  }

  try {
    return JSON.parse(responseText) as RegisterResponsePayload;
  } catch {
    return null;
  }
}

function FormMessage({ message }: { message: string | null }) {
  if (!message) {
    return null;
  }

  return (
    <p className="rounded-2xl border border-[rgba(255,120,120,0.28)] bg-[rgba(120,20,20,0.22)] px-4 py-3 text-sm text-[#ffd0d0]">
      {message}
    </p>
  );
}

export function AuthForms() {
  const router = useRouter();
  const [loginState, setLoginState] = useState<AuthFormState>({ error: null });
  const [registerState, setRegisterState] = useState<AuthFormState>({ error: null });
  const [loginPending, startLoginTransition] = useTransition();
  const [registerPending, startRegisterTransition] = useTransition();

  const handleLogin = (formData: FormData) => {
    setLoginState({ error: null });

    startLoginTransition(async () => {
      const result = await signIn("credentials", {
        email: String(formData.get("email") ?? "").trim().toLowerCase(),
        password: String(formData.get("password") ?? ""),
        redirect: false,
        callbackUrl: "/account",
      });

      if (!result || result.error) {
        setLoginState({
          error: "That email/password combination did not work.",
        });
        return;
      }

      router.push(result.url ?? "/account");
      router.refresh();
    });
  };

  const handleRegister = (formData: FormData) => {
    setRegisterState({ error: null });

    startRegisterTransition(async () => {
      const email = String(formData.get("email") ?? "").trim().toLowerCase();
      const password = String(formData.get("password") ?? "");
      const payload = {
        email,
        password,
        displayName: String(formData.get("displayName") ?? ""),
        marketingOptIn: formData.get("marketingOptIn") === "on",
      };

      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await readJsonIfAvailable(response);

      if (!response.ok || !result?.ok) {
        setRegisterState({
          error: result?.message ?? "Could not create your account right now.",
        });
        return;
      }

      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/account",
      });

      if (!signInResult || signInResult.error) {
        setRegisterState({
          error: "Your account was created, but automatic sign-in failed. Please log in.",
        });
        return;
      }

      router.push(signInResult.url ?? "/account");
      router.refresh();
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="gold-trim section-shell rounded-[1.8rem] p-6 [--trim-left:80%] [--trim-top:66%]">
        <p className="eyebrow-label text-[11px]">Login</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
          Return to your account
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Guest play stays open. Sign in only when you want scores saved to your account and public leaderboards.
        </p>
        <form
          action={handleLogin}
          className="mt-6 space-y-4"
        >
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-2xl border border-line bg-[rgba(14,12,9,0.92)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[rgba(212,175,55,0.45)]"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Password</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full rounded-2xl border border-line bg-[rgba(14,12,9,0.92)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[rgba(212,175,55,0.45)]"
            />
          </label>
          <FormMessage message={loginState.error} />
          <button type="submit" className="btn-primary w-full" disabled={loginPending}>
            {loginPending ? "Signing in..." : "Login"}
          </button>
        </form>
      </section>

      <section className="gold-trim section-shell rounded-[1.8rem] p-6 [--trim-left:80%] [--trim-top:66%]">
        <p className="eyebrow-label text-[11px]">Create account</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-foreground">
          Save scores for free
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Public leaderboards show only your display name. Email stays private.
        </p>
        <form
          action={handleRegister}
          className="mt-6 space-y-4"
        >
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Display name</span>
            <input
              type="text"
              name="displayName"
              required
              autoComplete="nickname"
              maxLength={32}
              className="w-full rounded-2xl border border-line bg-[rgba(14,12,9,0.92)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[rgba(212,175,55,0.45)]"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-2xl border border-line bg-[rgba(14,12,9,0.92)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[rgba(212,175,55,0.45)]"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-foreground">Password</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="new-password"
              minLength={8}
              className="w-full rounded-2xl border border-line bg-[rgba(14,12,9,0.92)] px-4 py-3 text-sm text-foreground outline-none transition focus:border-[rgba(212,175,55,0.45)]"
            />
          </label>
          <label className="flex items-start gap-3 rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-muted">
            <input
              type="checkbox"
              name="marketingOptIn"
              className="mt-1 h-4 w-4 rounded border-line bg-transparent accent-[#d4af37]"
            />
            <span>
              I want occasional product/news updates by email.
              <span className="block text-xs text-ink-400">This is optional and not required to create an account.</span>
            </span>
          </label>
          <FormMessage message={registerState.error} />
          <button type="submit" className="btn-primary w-full" disabled={registerPending}>
            {registerPending ? "Creating account..." : "Create free account"}
          </button>
        </form>
        <p className="mt-4 text-xs leading-6 text-ink-400">
          TODO: update the privacy policy and cookie policy before launch to document auth cookies, score storage, and newsletter consent.
        </p>
        <p className="mt-3 text-xs leading-6 text-ink-400">
          Future games can post to the reusable helper in <code>lib/scores/client.ts</code>.
        </p>
      </section>
    </div>
  );
}
