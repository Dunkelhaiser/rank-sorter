import { createFileRoute, Link } from "@tanstack/solid-router";
import { CardContent, CardHeader, CardTitle } from "~/ui/Card";
import { SignInForm } from "./-SignInForm";

export const Route = createFileRoute("/(auth)/sign_in/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent class="space-y-5">
                <SignInForm />
                <p class="text-center text-sm">
                    Don't have an account?{" "}
                    <Link to="/sign_up" class="underline">
                        Sign up
                    </Link>
                </p>
            </CardContent>
        </>
    );
}
