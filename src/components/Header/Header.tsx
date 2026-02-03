import { Link } from "@tanstack/solid-router";
import { Globe, House, LogIn, Menu, Plus, X } from "lucide-solid";
import { createSignal, Show } from "solid-js";
import type { Session } from "~/lib/auth/authClient";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/ui/Button";
import SignOutBtn from "./SignOutBtn";

interface Props {
    session: Session | null;
}

const Header = (props: Props) => {
    const session = () => props.session;
    const [isMenuOpen, setIsMenuOpen] = createSignal(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen());

    return (
        <header class="bg-card text-card-foreground sticky inset-x-0 top-0 z-50 px-6 py-4 shadow md:px-14 xl:px-32">
            <div class="m-auto flex max-w-7xl items-center justify-between">
                <Link to="/" class="min-w-max text-2xl font-bold">
                    <span class="bg-gradient-to-tl from-teal-500 to-sky-600 bg-clip-text text-transparent">Rank</span>{" "}
                    Sorter
                </Link>

                <button
                    type="button"
                    class="text-muted-foreground hover:text-foreground transition-colors xl:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen() ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen()}
                >
                    <Show when={isMenuOpen()} fallback={<Menu class="size-6" />}>
                        <X class="size-6" />
                    </Show>
                </button>

                <nav
                    class={cn(
                        "bg-card border-border absolute left-6 right-6 top-[calc(100%+0.75rem)] rounded-lg border shadow-xl transition-all ease-in-out xl:static xl:left-auto xl:right-auto xl:top-auto xl:rounded-none xl:border-0 xl:shadow-none xl:translate-y-0",
                        isMenuOpen()
                            ? "translate-y-0 pointer-events-auto"
                            : "-translate-y-2 opacity-0 pointer-events-none xl:pointer-events-auto xl:translate-y-0 xl:opacity-100"
                    )}
                >
                    <ul class="flex flex-col items-center gap-4 px-6 py-4 xl:flex-row xl:gap-8 xl:p-0">
                        <li>
                            <Link
                                to="/"
                                class={buttonVariants({ variant: "link" })}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <House /> Home
                            </Link>
                        </li>
                        <li>
                            <span class={buttonVariants({ variant: "link" })}>
                                <Globe />
                                Explore
                            </span>
                        </li>
                        <li>
                            <span class={buttonVariants({ variant: "link" })}>
                                <Plus /> Create
                            </span>
                        </li>
                        <Show
                            when={session()?.session != null}
                            fallback={
                                <li>
                                    <Link to="/sign_in" class={buttonVariants({ variant: "link" })}>
                                        <LogIn /> Sign In
                                    </Link>
                                </li>
                            }
                        >
                            <li>
                                <SignOutBtn />
                            </li>
                        </Show>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
