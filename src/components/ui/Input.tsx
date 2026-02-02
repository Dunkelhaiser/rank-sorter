import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type {
    TextFieldDescriptionProps,
    TextFieldErrorMessageProps,
    TextFieldInputProps,
    TextFieldLabelProps,
    TextFieldRootProps,
} from "@kobalte/core/text-field";
import { TextField as TextFieldPrimitive } from "@kobalte/core/text-field";
import { cva } from "class-variance-authority";
import type { ValidComponent, VoidProps } from "solid-js";
import { splitProps } from "solid-js";
import { cn } from "~/lib/utils";

type InputRootProps<T extends ValidComponent = "div"> = TextFieldRootProps<T> & {
    class?: string;
};

export const InputRoot = <T extends ValidComponent = "div">(props: PolymorphicProps<T, InputRootProps<T>>) => {
    const [local, rest] = splitProps(props as InputRootProps, ["class"]);

    return <TextFieldPrimitive class={cn("space-y-1.5", local.class)} {...rest} />;
};

export const inputLabel = cva(
    "text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium inline-block",
    {
        variants: {
            label: {
                true: "data-[invalid]:text-destructive",
            },
            error: {
                true: "text-destructive text-xs",
            },
            description: {
                true: "font-normal text-muted-foreground",
            },
        },
        defaultVariants: {
            label: true,
        },
    }
);

type InputLabelProps<T extends ValidComponent = "label"> = TextFieldLabelProps<T> & {
    class?: string;
};

export const InputLabel = <T extends ValidComponent = "label">(props: PolymorphicProps<T, InputLabelProps<T>>) => {
    const [local, rest] = splitProps(props as InputLabelProps, ["class"]);

    return <TextFieldPrimitive.Label class={cn(inputLabel(), local.class)} {...rest} />;
};

type InputErrorMessageProps<T extends ValidComponent = "div"> = TextFieldErrorMessageProps<T> & {
    class?: string;
};

export const InputErrorMessage = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, InputErrorMessageProps<T>>
) => {
    const [local, rest] = splitProps(props as InputErrorMessageProps, ["class"]);

    return <TextFieldPrimitive.ErrorMessage class={cn(inputLabel({ error: true }), local.class)} {...rest} />;
};

type InputDescriptionProps<T extends ValidComponent = "div"> = TextFieldDescriptionProps<T> & {
    class?: string;
};

export const InputDescription = <T extends ValidComponent = "div">(
    props: PolymorphicProps<T, InputDescriptionProps<T>>
) => {
    const [local, rest] = splitProps(props as InputDescriptionProps, ["class"]);

    return (
        <TextFieldPrimitive.Description
            class={cn(inputLabel({ description: true, label: false }), local.class)}
            {...rest}
        />
    );
};

type InputInputProps<T extends ValidComponent = "input"> = VoidProps<
    TextFieldInputProps<T> & {
        class?: string;
    }
>;

export const Input = <T extends ValidComponent = "input">(props: PolymorphicProps<T, InputInputProps<T>>) => {
    const [local, rest] = splitProps(props as InputInputProps, ["class"]);

    return (
        <TextFieldPrimitive.Input
            class={cn(
                "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                local.class
            )}
            {...rest}
        />
    );
};
