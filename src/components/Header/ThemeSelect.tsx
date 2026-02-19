import { useRouteContext, useRouter } from "@tanstack/solid-router";
import { type LucideIcon, Monitor, Moon, Sun } from "lucide-solid";
import { setTheme, type Theme } from "~/lib/theme";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/ui/Select";

interface Options {
    label: string;
    value: Theme;
    icon: LucideIcon;
}

const themes: Options[] = [
    {
        label: "Light",
        value: "light",
        icon: Sun,
    },
    {
        label: "Dark",
        value: "dark",
        icon: Moon,
    },
    {
        label: "System",
        value: "system",
        icon: Monitor,
    },
];

const ThemeSelect = () => {
    const context = useRouteContext({ from: "__root__" });
    const router = useRouter();

    const onChange = async (value: Options | null) => {
        await setTheme({ data: value?.value ?? context().theme });
        router.invalidate();
    };

    return (
        <Select<Options>
            value={themes.find((theme) => theme.value === context().theme)}
            onChange={onChange}
            options={themes}
            optionValue="value"
            optionTextValue="label"
            placeholder="Select a theme"
            itemComponent={(props) => (
                <SelectItem item={props.item}>
                    <span class="flex items-center gap-2">
                        <props.item.rawValue.icon class="size-4" />
                        {props.item.rawValue.label}
                    </span>
                </SelectItem>
            )}
        >
            <SelectTrigger aria-label="Theme" class="!h-8">
                <SelectValue<Options>>
                    {(state) => {
                        const Icon = state.selectedOption().icon;
                        return (
                            <span class="flex items-center gap-2">
                                <Icon class="size-4" />
                                {state.selectedOption().label}
                            </span>
                        );
                    }}
                </SelectValue>
            </SelectTrigger>
            <SelectContent />
        </Select>
    );
};

export { ThemeSelect };
