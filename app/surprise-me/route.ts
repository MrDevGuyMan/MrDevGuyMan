import { NextResponse } from "next/server";

import { surpriseDestinations } from "@/data/projects";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currentPath = searchParams.get("from");
  const availableDestinations = currentPath
    ? surpriseDestinations.filter((destination) => destination !== currentPath)
    : surpriseDestinations;
  const randomIndex = Math.floor(Math.random() * availableDestinations.length);
  const destination =
    availableDestinations[randomIndex] ??
    surpriseDestinations.find((candidate) => candidate !== currentPath) ??
    "/games";

  return NextResponse.redirect(new URL(destination, request.url));
}
