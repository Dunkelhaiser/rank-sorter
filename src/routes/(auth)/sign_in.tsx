import { createFileRoute, Link } from "@tanstack/solid-router";
import { CardContent, CardHeader, CardTitle } from "~/ui/Card";

export const Route = createFileRoute("/(auth)/sign_in")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
                <p class="mt-4 text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/sign_up" class="underline">
                        Sign up
                    </Link>
                </p>
            </CardContent>
        </>
    );
}
