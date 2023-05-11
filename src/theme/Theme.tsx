import { extendTheme } from "@chakra-ui/react";

export const GlobalThemeChakra = extendTheme({
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
            },
            // 2. We can add a new button size or extend existing
            sizes: {


            },
            // 3. We can add a new visual variant
        },
    },
})

