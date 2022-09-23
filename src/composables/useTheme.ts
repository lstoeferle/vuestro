import {useDark} from "@vueuse/core"

// https://daisyui.com/docs/themes/
const LIGHT_THEME = "light"
const DARK_THEME = "dark"

let activeTheme = LIGHT_THEME

export function useTheme() {

    function onThemeChanged(dark: boolean) {
        if(typeof window !== "undefined") {
            activeTheme = dark ? DARK_THEME : LIGHT_THEME
            document.documentElement.dataset.theme =  activeTheme
        }
    }

    const isDark = useDark({onChanged: onThemeChanged})

    return {
        theme: activeTheme,
        isDark
    }
}
