import { createFileRoute, Link } from "@tanstack/solid-router";
import { CardContent, CardHeader, CardTitle } from "~/ui/Card";
import { SignUpForm } from "./-SignUpForm";

export const Route = createFileRoute("/(auth)/sign_up/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
            </CardHeader>
            <CardContent class="space-y-5">
                <SignUpForm />
                <p class="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/sign_in" class="underline">
                        Sign in
                    </Link>
                </p>
            </CardContent>
        </>
    );
}
