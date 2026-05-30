import type { DefaultSession, NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { eq } from "drizzle-orm";

import { loginSchema } from "@/lib/auth/validation";
import { getDb } from "@/lib/db";
import { users } from "@/lib/db/schema";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      displayName: string;
    };
  }

  interface User {
    displayName: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    displayName?: string;
  }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Email and password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(rawCredentials) {
        const parsedCredentials = loginSchema.safeParse(rawCredentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;
        const db = getDb();
        const user = await db.query.users.findFirst({
          where: eq(users.email, email),
        });

        if (!user) {
          return null;
        }

        const passwordMatches = await compare(password, user.passwordHash);

        if (!passwordMatches) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          displayName: user.displayName,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        token.displayName = user.displayName;
      }

      return token;
    },
    session({ session, token }) {
      if (!session.user || !token.sub || !token.email || !token.displayName) {
        return session;
      }

      session.user.id = token.sub;
      session.user.email = token.email;
      session.user.displayName = token.displayName;

      return session;
    },
  },
};
