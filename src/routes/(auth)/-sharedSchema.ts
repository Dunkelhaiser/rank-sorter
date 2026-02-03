import { z as zod } from "zod";

export const emailField = zod.email("Enter valid email address").trim();
export const passwordField = zod.string().trim().min(1, "Enter your password");
