export type UsefulTool = {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
  affiliateHref: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
};

export const elevenLabsTool: UsefulTool = {
  slug: "elevenlabs",
  title: "ElevenLabs",
  shortDescription: "AI voice generation and text-to-speech platform.",
  href: "/useful-tools/elevenlabs",
  affiliateHref: "https://try.elevenlabs.io/f8dqjh7h4xct",
  thumbnailSrc: "/thumbnails/elevenlabsthumbnail.jpg",
  thumbnailAlt: "ElevenLabs product thumbnail",
};

export const usefulTools: UsefulTool[] = [elevenLabsTool];
