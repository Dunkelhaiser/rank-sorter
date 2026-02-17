import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, splitProps } from "solid-js";
import { cn } from "~/lib/utils";

function Empty(props: ComponentProps<"div">) {
    const [local, others] = splitProps(props, ["class"]);

    return (
        <div
            data-slot="empty"
            class={cn(
                "gap-4 rounded-xl border-dashed p-6 flex w-full min-w-0 flex-1 flex-col items-center justify-center text-center text-balance",
                local.class
            )}
            {...others}
        />
    );
}

function EmptyHeader(props: ComponentProps<"div">) {
    const [local, others] = splitProps(props, ["class"]);

    return (
        <div
            data-slot="empty-header"
            class={cn("gap-2 flex max-w-sm flex-col items-center", local.class)}
            {...others}
        />
    );
}

const emptyMediaVariants = cva(
    "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-4",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

function EmptyMedia(props: ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
    const [local, others] = splitProps(props, ["class", "variant"]);

    return (
        <div
            data-slot="empty-icon"
            data-variant={local.variant}
            class={cn(emptyMediaVariants({ variant: local.variant, class: local.class }))}
            {...others}
        />
    );
}

function EmptyTitle(props: ComponentProps<"div">) {
    const [local, others] = splitProps(props, ["class"]);

    return <div data-slot="empty-title" class={cn("text-sm font-medium tracking-tight", local.class)} {...others} />;
}

function EmptyDescription(props: ComponentProps<"p">) {
    const [local, others] = splitProps(props, ["class"]);

    return (
        <div
            data-slot="empty-description"
            class={cn(
                "text-sm/relaxed text-muted-foreground [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                local.class
            )}
            {...others}
        />
    );
}

function EmptyContent(props: ComponentProps<"div">) {
    const [local, others] = splitProps(props, ["class"]);

    return (
        <div
            data-slot="empty-content"
            class={cn("gap-2.5 text-sm flex w-full max-w-sm min-w-0 flex-col items-center text-balance", local.class)}
            {...others}
        />
    );
}

export { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia };
