import { createFileRoute, Link } from "@tanstack/solid-router";
import { CardContent, CardHeader, CardTitle } from "~/ui/Card";

export const Route = createFileRoute("/(auth)/sign_up/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
                <p class="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/sign_in" class="underline">
                        Sign in
                    </Link>
                </p>
            </CardContent>
        </>
    );
}
