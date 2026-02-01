import { createFileRoute } from "@tanstack/solid-router";
import Hero from "~/components/Hero/Hero";

export const Route = createFileRoute("/")({ component: App });

function App() {
    return <Hero />;
}
