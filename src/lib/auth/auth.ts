import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start/solid";
import { db } from "~/db/db";
import { env } from "~/lib/env";
import { passwordMaxLength, passwordMinLength } from "~/routes/(auth)/sign_up/-signUpSchema";

export const auth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    plugins: [tanstackStartCookies()],
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        minPasswordLength: passwordMinLength,
        maxPasswordLength: passwordMaxLength,
    },
});
