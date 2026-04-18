import { NextResponse } from "next/server";

import { surpriseDestinations } from "@/data/projects";

export const dynamic = "force-dynamic";

function isUsefulToolsSubpage(path: string) {
  return path.startsWith("/useful-tools/") && path !== "/useful-tools";
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const currentPath = searchParams.get("from");
  const eligibleDestinations = surpriseDestinations.filter(
    (destination) => !isUsefulToolsSubpage(destination),
  );
  const availableDestinations = currentPath
    ? eligibleDestinations.filter((destination) => destination !== currentPath)
    : eligibleDestinations;
  const randomIndex = Math.floor(Math.random() * availableDestinations.length);
  const destination =
    availableDestinations[randomIndex] ??
    eligibleDestinations.find((candidate) => candidate !== currentPath) ??
    "/games";

  return NextResponse.redirect(new URL(destination, request.url));
}
