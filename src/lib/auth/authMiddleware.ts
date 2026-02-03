import { redirect } from "@tanstack/solid-router";
import { createServerFn } from "@tanstack/solid-start";
import { getSession } from "./getSession";

export const authMiddleware = createServerFn().handler(async () => {
    const session = await getSession();

    if (!session?.session) {
        throw redirect({ to: "/sign_in" });
    }

    return session;
});
