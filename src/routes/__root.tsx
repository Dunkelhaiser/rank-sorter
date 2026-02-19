import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/solid-router";
import { createEffect, createSignal, Suspense } from "solid-js";
import { HydrationScript, isServer } from "solid-js/web";
import Header from "~/components/Header/Header";
import { getSession } from "~/lib/auth/getSession";
import { getTheme } from "~/lib/theme";
import styleCss from "~/styles.css?url";
import { Toaster } from "~/ui/Toaster";
import { NotFound } from "./-NotFound";

export const Route = createRootRouteWithContext()({
    head: () => ({
        links: [{ rel: "stylesheet", href: styleCss }],
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Rank Sorter",
            },
            {
                name: "description",
                content: "Create rankings of anything.",
            },
            {
                name: "keywords",
                content: "rank, sort, ranking, sorter, sorting, sorting lists, tier",
            },
            { name: "twitter:title", content: "Rank Sorter" },
            {
                name: "twitter:description",
                content: "Create rankings of anything.",
            },
            { name: "twitter:creator", content: "@Dunkelhaiser" },
            { name: "og:type", content: "website" },
            { name: "og:title", content: "Rank Sorter" },
            {
                name: "og:description",
                content: "Create rankings of anything.",
            },
        ],
    }),
    shellComponent: RootComponent,
    beforeLoad: async () => ({ theme: await getTheme() }),
    loader: async () => {
        const session = await getSession();
        return session;
    },
    notFoundComponent: NotFound,
});

function RootComponent() {
    const context = Route.useRouteContext();
    const [resolvedTheme, setResolvedTheme] = createSignal(context().theme);

    createEffect(() => {
        if (isServer) return;

        const theme = context().theme;

        if (theme === "system") {
            const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setResolvedTheme(isDark ? "dark" : "light");

            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handler = (e: MediaQueryListEvent) => {
                setResolvedTheme(e.matches ? "dark" : "light");
            };
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        }

        setResolvedTheme(theme);
        return undefined;
    });

    return (
        // biome-ignore lint/a11y/useHtmlLang: TanStack Start takes care of this
        <html class={resolvedTheme()}>
            {/** biome-ignore lint/style/noHeadElement: TanStack Start takes care of this */}
            <head>
                <HydrationScript />
                <script>
                    {`(function() {
                        const theme = document.documentElement.className;
                        if (theme === 'system') {
                            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                            document.documentElement.className = isDark ? 'dark' : 'light';
                        }
                    })()`}
                </script>
            </head>
            <body class="bg-background">
                <HeadContent />
                <Suspense>
                    <Header />
                    <main class="p-6 sm:pt-8 md:px-14 md:py-10 lg:py-12 xl:px-32">
                        <Toaster />
                        <Outlet />
                    </main>
                </Suspense>
                <Scripts />
            </body>
        </html>
    );
}
