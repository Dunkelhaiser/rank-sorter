import { Link } from "@tanstack/solid-router";
import { Globe, House, LogIn, Menu, Plus, X } from "lucide-solid";
import { createSignal, Show } from "solid-js";
import { cn } from "~/lib/utils";

const Header = () => {
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
                                class={cn(
                                    "flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-colors [&.active]:text-foreground"
                                )}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <House class="size-4" /> Home
                            </Link>
                        </li>
                        <li>
                            <span
                                class={cn(
                                    "flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-colors [&.active]:text-foreground"
                                )}
                            >
                                <Globe class="size-4" />
                                Explore
                            </span>
                        </li>
                        <li>
                            <span
                                class={cn(
                                    "flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-colors [&.active]:text-foreground"
                                )}
                            >
                                <Plus class="size-4" /> Create
                            </span>
                        </li>
                        <li>
                            <span
                                class={cn(
                                    "flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-colors [&.active]:text-foreground"
                                )}
                            >
                                <LogIn class="size-4" /> Sign In
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
