import { z } from "zod";

const trimmedString = (max: number) =>
  z
    .string()
    .trim()
    .min(1, "This field is required.")
    .max(max, `Must be ${max} characters or fewer.`);

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

export const registerSchema = loginSchema.extend({
  displayName: trimmedString(32).regex(/^[\p{L}\p{N} _.-]+$/u, "Use letters, numbers, spaces, dots, dashes, or underscores."),
  marketingOptIn: z.boolean().default(false),
});

const metadataValueSchema = z.union([
  z.string().trim().max(120),
  z.number().finite(),
  z.boolean(),
]);

export const scoreMetadataSchema = z
  .record(z.string().trim().min(1).max(40), metadataValueSchema)
  .refine((value) => Object.keys(value).length <= 12, {
    message: "Metadata can include up to 12 fields.",
  })
  .refine((value) => JSON.stringify(value).length <= 1000, {
    message: "Metadata payload is too large.",
  });

export const submitScoreSchema = z.object({
  gameSlug: z.string().trim().min(1).max(64),
  score: z.number().finite().nonnegative(),
  metadata: scoreMetadataSchema.optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ScoreMetadata = z.infer<typeof scoreMetadataSchema>;
export type SubmitScoreInput = z.infer<typeof submitScoreSchema>;
