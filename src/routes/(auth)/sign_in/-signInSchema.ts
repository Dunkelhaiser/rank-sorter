import { z as zod } from "zod";
import { emailField, passwordField } from "../-sharedSchema";

export const signInSchema = zod.object({
    email: emailField,
    password: passwordField,
});

export type SignInSchema = zod.infer<typeof signInSchema>;
