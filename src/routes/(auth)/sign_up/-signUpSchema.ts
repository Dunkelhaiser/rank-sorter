import { z as zod } from "zod";
import { emailField, passwordField } from "../-sharedSchema";

export const passwordMinLength = 5;
export const passwordMaxLength = 256;
const nameMinLength = 3;
const nameMaxLength = 48;

export const signUpSchema = zod
    .object({
        name: zod
            .string()
            .trim()
            .min(1, "Enter your name")
            .min(nameMinLength, `Name must be at least ${nameMinLength} characters`)
            .max(nameMaxLength, `Name must be at most ${nameMaxLength} characters`),
        email: emailField,
        password: passwordField
            .min(passwordMinLength, `Password must be at least ${passwordMinLength} characters`)
            .max(passwordMaxLength, `Password must be at most ${passwordMaxLength} characters`),
        confirmPassword: zod.string().trim().min(1, "Confirm your password"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type SignUpSchema = zod.infer<typeof signUpSchema>;
