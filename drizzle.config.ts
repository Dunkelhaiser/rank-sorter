import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './src/lib/db/migrations',
    schema: './src/lib/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
    },
});
