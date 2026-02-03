import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start/solid";
import { db } from "~/db/db";
import { env } from "./env";

export const auth = betterAuth({
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    plugins: [tanstackStartCookies()],
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
    },
});
