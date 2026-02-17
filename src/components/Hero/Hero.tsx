import { ArrowUpWideNarrow, Globe, Plus, Sparkles, TrendingUp, Users } from "lucide-solid";
import { Button } from "~/ui/Button";
import Stat from "./Stat";

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
                <Button size="lg" variant="primary">
                    Create <Plus />
                </Button>
                <Button size="lg" variant="outline">
                    Explore <Globe />
                </Button>
            </div>

            <div class="mt-12 flex flex-wrap items-center justify-center gap-8">
                <Stat icon={Users} value="50K+" label="Active Rankers" />
                <Stat icon={ArrowUpWideNarrow} value="10K+" label="Sorters Created" />
                <Stat icon={TrendingUp} value="100K+" label="Rankings Created" />
                <Stat icon={Sparkles} value="10M+" label="Comparisons Made" />
            </div>
        </section>
    );
};

export default Hero;
