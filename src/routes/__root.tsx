import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/solid-router";
import { Suspense } from "solid-js";
import { HydrationScript } from "solid-js/web";
import styleCss from "~/styles.css?url";

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
});

function RootComponent() {
    return (
        // biome-ignore lint/a11y/useHtmlLang: TanStack Start takes care of this
        <html>
            {/** biome-ignore lint/style/noHeadElement: TanStack Start takes care of this */}
            <head>
                <HydrationScript />
            </head>
            <body>
                <HeadContent />
                <Suspense>
                    <main class="p-6 sm:pt-8 md:px-14 md:py-10 lg:py-12 xl:px-32">
                        <Outlet />
                    </main>
                </Suspense>
                <Scripts />
            </body>
        </html>
    );
}
