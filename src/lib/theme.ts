import { createServerFn } from "@tanstack/solid-start";
import { getCookie, setCookie } from "@tanstack/solid-start/server";
import { z as zod } from "zod";

const storageKey = "app-theme";

const themeSchema = zod.enum(["light", "dark", "system"]).catch("system");

export type Theme = zod.infer<typeof themeSchema>;

export const getTheme = createServerFn().handler(() => {
    const cookieValue = getCookie(storageKey);
    const parsedTheme = themeSchema.parse(cookieValue);
    return parsedTheme;
});

export const setTheme = createServerFn()
    .inputValidator(themeSchema)
    .handler(({ data }) => setCookie(storageKey, data));
