import { z as zod } from "zod";

const passwordMinLength = 5;
const passwordMaxLength = 256;

export const signInSchema = zod.object({
    email: zod.email("Enter valid email address").trim(),
    password: zod
        .string()
        .trim()
        .min(1, "Enter your password")
        .min(passwordMinLength, `Password must be at least ${passwordMinLength} characters`)
        .max(passwordMaxLength, `Password must be at most ${passwordMaxLength} characters`),
});

export type SignInSchema = zod.infer<typeof signInSchema>;
