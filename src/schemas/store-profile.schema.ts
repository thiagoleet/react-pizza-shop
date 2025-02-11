import { z } from "zod";

export const storeProfileSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nullable(),
});

export type StoreProfileSchema = z.infer<typeof storeProfileSchema>;
