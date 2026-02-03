import { createForm } from "@tanstack/solid-form";
import { toast } from "solid-sonner";
import { Button } from "~/components/ui/Button";
import { Input, InputErrorMessage, InputLabel, InputRoot } from "~/components/ui/Input";
import { authClient } from "~/lib/auth/authClient";
import { signInSchema } from "./-signInSchema";

const SignInForm = () => {
    const form = createForm(() => ({
        defaultValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ value }) => {
            const { email, password } = signInSchema.parse(value);
            const { error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                toast.error(`Failed to sign in. ${error.message}.`);
                return;
            }

            toast.success("Signed in successfully");
        },
        validators: {
            onSubmit: signInSchema,
        },
    }));

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
            }}
            class="space-y-4"
        >
            <form.Field name="email">
                {(field) => (
                    <InputRoot
                        value={field().state.value}
                        onChange={field().handleChange}
                        validationState={field().state.meta.isValid ? "valid" : "invalid"}
                    >
                        <InputLabel>Email</InputLabel>
                        <Input placeholder="Enter your email" />
                        <InputErrorMessage>{field().state.meta.errors?.at(0)?.message}</InputErrorMessage>
                    </InputRoot>
                )}
            </form.Field>

            <form.Field name="password">
                {(field) => (
                    <InputRoot
                        value={field().state.value}
                        onChange={field().handleChange}
                        validationState={field().state.meta.isValid ? "valid" : "invalid"}
                    >
                        <InputLabel>Password</InputLabel>
                        <Input type="password" placeholder="Enter your password" />
                        <InputErrorMessage>{field().state.meta.errors?.at(0)?.message}</InputErrorMessage>
                    </InputRoot>
                )}
            </form.Field>

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                {(state) => (
                    <Button type="submit" loading={state()[1]} class="w-full">
                        Sign In
                    </Button>
                )}
            </form.Subscribe>
        </form>
    );
};

export { SignInForm };
