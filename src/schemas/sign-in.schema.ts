import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
});

export type SignInForm = z.infer<typeof signInFormSchema>;
