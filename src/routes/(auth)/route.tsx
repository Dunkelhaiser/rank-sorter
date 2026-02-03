import { createFileRoute, Outlet, redirect } from "@tanstack/solid-router";
import { getSession } from "~/lib/auth/getSession";
import { Card } from "~/ui/Card";

export const Route = createFileRoute("/(auth)")({
    component: RouteComponent,
    beforeLoad: async () => {
        const session = await getSession();

        if (session?.session) {
            throw redirect({ to: "/" });
        }
    },
});

function RouteComponent() {
    return (
        <Card class="mx-auto w-full max-w-sm md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <Outlet />
        </Card>
    );
}
