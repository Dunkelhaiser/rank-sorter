import { createForm } from "@tanstack/solid-form";
import { useNavigate } from "@tanstack/solid-router";
import { toast } from "solid-sonner";
import { Input, InputErrorMessage, InputLabel, InputRoot } from "~/components/ui/Input";
import { authClient } from "~/lib/auth/authClient";
import { Button } from "~/ui/Button";
import { signUpSchema } from "./-signUpSchema";

const SignUpForm = () => {
    const navigate = useNavigate();

    const form = createForm(() => ({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async ({ value }) => {
            const { name, email, password } = signUpSchema.parse(value);
            const { error } = await authClient.signUp.email({
                name,
                email,
                password,
                callbackURL: "/sign_in",
            });

            if (error) {
                toast.error(`Failed to sign up. ${error.message}`);
                return;
            }

            toast.success("Signed up successfully. Check your email to confirm your account.");
            navigate({ to: "/sign_in" });
        },
        validators: {
            onSubmit: signUpSchema,
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
            <form.Field name="name">
                {(field) => (
                    <InputRoot
                        value={field().state.value}
                        onChange={field().handleChange}
                        validationState={field().state.meta.isValid ? "valid" : "invalid"}
                    >
                        <InputLabel>Username</InputLabel>
                        <Input placeholder="Enter your username" />
                        <InputErrorMessage>{field().state.meta.errors?.at(0)?.message}</InputErrorMessage>
                    </InputRoot>
                )}
            </form.Field>

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

            <div class="flex gap-4 flex-col sm:flex-row sm:gap-2">
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

                <form.Field name="confirmPassword">
                    {(field) => (
                        <InputRoot
                            value={field().state.value}
                            onChange={field().handleChange}
                            validationState={field().state.meta.isValid ? "valid" : "invalid"}
                        >
                            <InputLabel>Confirm Password</InputLabel>
                            <Input type="password" placeholder="Confirm your password" />
                            <InputErrorMessage>{field().state.meta.errors?.at(0)?.message}</InputErrorMessage>
                        </InputRoot>
                    )}
                </form.Field>
            </div>

            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                {(state) => (
                    <Button type="submit" loading={state()[1]} class="w-full">
                        Sign Up
                    </Button>
                )}
            </form.Subscribe>
        </form>
    );
};

export { SignUpForm };
