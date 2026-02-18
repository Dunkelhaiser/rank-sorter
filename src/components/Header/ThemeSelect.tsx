import { useRouteContext, useRouter } from "@tanstack/solid-router";
import { setTheme, type Theme } from "~/lib/theme";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/ui/Select";

interface Options {
    label: string;
    value: Theme;
}

const themes: Options[] = [
    {
        label: "Light",
        value: "light",
    },
    {
        label: "Dark",
        value: "dark",
    },
    {
        label: "System",
        value: "system",
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
            itemComponent={(props) => <SelectItem item={props.item}>{props.item.rawValue.label}</SelectItem>}
        >
            <SelectTrigger aria-label="Theme" class="!h-8">
                <SelectValue<Options>>{(state) => state.selectedOption().label}</SelectValue>
            </SelectTrigger>
            <SelectContent />
        </Select>
    );
};

export { ThemeSelect };
