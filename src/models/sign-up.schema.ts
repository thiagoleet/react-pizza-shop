import { z } from "zod";

export const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

export type SignUpForm = z.infer<typeof signUpFormSchema>;
