import { Settings, UserRound } from "lucide-solid";
import type { User } from "~/lib/auth/authClient";
import { Avatar, AvatarFallback, AvatarImage } from "~/ui/Avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/ui/DropdownMenu";
import { SignOutBtn } from "./SignOutBtn";
import { ThemeSelect } from "./ThemeSelect";

interface Props {
    user: User;
}

const UserBtn = (props: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger class="cursor-pointer focus-visible:ring-ring focus-visible:ring-offset-background rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                <Avatar class="size-9">
                    <AvatarImage src={props.user?.image || undefined} />
                    <AvatarFallback class="text-sm uppercase">{`${props.user.name[0]}${props.user.name[1]}`}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <span class="flex items-center gap-1">
                        <UserRound class="size-4" /> Profile
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <span class="flex items-center gap-1">
                        <Settings class="size-4" /> Settings
                    </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ThemeSelect />
                <DropdownMenuSeparator />
                <DropdownMenuItem as={() => <SignOutBtn />} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export { UserBtn };
