import { z as zod } from "zod";

const schema = zod.object({
    POSTGRES_DB: zod.string(),
    POSTGRES_HOST: zod.string(),
    POSTGRES_USER: zod.string(),
    POSTGRES_PASSWORD: zod.string(),
    POSTGRES_PORT: zod.coerce.number(),
    POSTGRES_URL: zod.url(),
    BETTER_AUTH_URL: zod.url(),
    BETTER_AUTH_SECRET: zod.string(),
});

export const env = schema.parse(process.env);
