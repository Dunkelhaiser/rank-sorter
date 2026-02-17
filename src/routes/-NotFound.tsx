import { Link } from "@tanstack/solid-router";
import { ArrowLeft } from "lucide-solid";
import { buttonVariants } from "~/ui/Button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/ui/Empty";

const NotFound = () => {
    return (
        <Empty>
            <EmptyHeader>
                <h1 class="text-muted-foreground/50 mb-4 text-8xl font-extrabold tracking-tight lg:text-9xl">404</h1>
                <EmptyTitle class="text-foreground/75 mb-4 text-2xl font-bold md:text-3xl">Not Found</EmptyTitle>
                <EmptyDescription>
                    Looks like the page you are looking for doesn't exist. <br /> Maybe you can find it on the home
                    page?
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent class="flex-row justify-center gap-2">
                <Link to="/" class={buttonVariants({ variant: "link" })}>
                    <ArrowLeft /> Back to Home
                </Link>
            </EmptyContent>
        </Empty>
    );
};

export { NotFound };
