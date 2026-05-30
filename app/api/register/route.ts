import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import { registerSchema } from "@/lib/auth/validation";
import { getDb } from "@/lib/db";
import { users } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: parsed.error.issues[0]?.message ?? "Please check your details and try again.",
        },
        { status: 400 },
      );
    }

    const db = getDb();
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, parsed.data.email),
    });

    if (existingUser) {
      return NextResponse.json(
        {
          ok: false,
          message: "An account with that email already exists.",
        },
        { status: 409 },
      );
    }

    const passwordHash = await hash(parsed.data.password, 12);

    await db.insert(users).values({
      email: parsed.data.email,
      displayName: parsed.data.displayName,
      passwordHash,
      marketingOptIn: parsed.data.marketingOptIn,
    });

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "DATABASE_URL is not set.") {
      return NextResponse.json(
        {
          ok: false,
          message: "Database is not configured.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message: "Could not create your account right now.",
      },
      { status: 500 },
    );
  }
}
