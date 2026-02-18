import { useNavigate } from "@tanstack/solid-router";
import { LogOut } from "lucide-solid";
import { authClient } from "~/lib/auth/authClient";
import { Button } from "~/ui/Button";

const SignOutBtn = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await authClient.signOut();
        navigate({ to: "/" });
    };

    return (
        <Button
            variant="ghost"
            onClick={handleSignOut}
            class="px-2 py-1.5 !h-auto text-sm gap-1 font-normal focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-accent focus:text-accent-foreground"
        >
            <LogOut /> Sign Out
        </Button>
    );
};

export { SignOutBtn };
