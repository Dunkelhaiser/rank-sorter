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
        <Button variant="link" onClick={handleSignOut}>
            <LogOut /> Sign Out
        </Button>
    );
};
export default SignOutBtn;
