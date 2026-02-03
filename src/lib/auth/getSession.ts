import { createIsomorphicFn } from "@tanstack/solid-start";
import { getRequestHeaders } from "@tanstack/solid-start/server";
import { auth } from "./auth";
import { authClient } from "./authClient";

export const getSession = createIsomorphicFn()
    .server(async () => {
        const headers = getRequestHeaders();
        const session = await auth.api.getSession({ headers });
        return session;
    })
    .client(async () => {
        const session = await authClient.getSession();
        return session.data;
    });
