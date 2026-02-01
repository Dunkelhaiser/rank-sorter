import type { LucideIcon } from "lucide-solid";

interface Props {
    icon: LucideIcon;
    value: string;
    label: string;
}

const Stat = ({ icon: Icon, value, label }: Props) => {
    return (
        <div class="flex items-center gap-2">
            <div class="flex size-10 items-center justify-center rounded-full border border-border text-foreground">
                <Icon class="size-5" />
            </div>
            <div>
                <p class="text-sm font-semibold">{value}</p>
                <p class="text-xs text-muted-foreground">{label}</p>
            </div>
        </div>
    );
};
export default Stat;
