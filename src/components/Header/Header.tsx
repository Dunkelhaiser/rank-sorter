import { Link } from "@tanstack/solid-router";
import { Globe, House, Plus } from "lucide-solid";
import { cn } from "~/lib/utils";

const Header = () => {
    return (
        <header class="bg-card text-card-foreground sticky inset-x-0 top-0 z-50 px-6 py-4 shadow md:px-14 xl:px-32">
            <div class="m-auto flex max-w-7xl items-center justify-between">
                <Link to="/" class="min-w-max text-2xl font-bold">
                    <span class="bg-gradient-to-tl from-teal-500 to-sky-600 bg-clip-text text-transparent">Rank</span>{" "}
                    Sorter
                </Link>
                <nav>
                    <ul class="flex flex-col items-center gap-6 xl:flex-row xl:gap-8">
                        <li>
                            <Link
                                to="/"
                                class={cn(
                                    "flex items-center gap-1 text-muted-foreground hover:text-foreground font-medium transition-colors [&.active]:text-foreground"
                                )}
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
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
