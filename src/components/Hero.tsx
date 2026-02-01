import { Globe, Plus } from "lucide-solid";
import { Button } from "~/ui/Button";

const Hero = () => {
    return (
        <section class="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6 sm:pt-12 lg:px-8 flex items-center flex-col">
            <h1 class="max-w-2xl text-balance text-center text-4xl font-bold md:text-5xl lg:text-6xl">
                Sort anything into{" "}
                <span class="bg-gradient-to-tl from-teal-500 to-sky-600 bg-clip-text text-transparent">Ranks</span>
            </h1>
            <p class="text-paragraph mt-5 max-w-2xl text-center text-lg">
                Explore or create your own sorters of any kind. Then rank items in a sorting list by comparing them
                against each other to get your final order. Share your rankings with others and see rankings created by
                the community.
            </p>

            <div class="mt-8 flex justify-center gap-3">
                <Button size="lg" variant="default">
                    Create <Plus />
                </Button>
                <Button size="lg" variant="outline">
                    Explore <Globe />
                </Button>
            </div>
        </section>
    );
};

export default Hero;
