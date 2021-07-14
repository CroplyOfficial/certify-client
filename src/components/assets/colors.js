// Contains the colors used for app design. 
// NOTE: pastelColors are essentially a lighter shade of the mainColors.

import {colorLightLevel} from "../functions/componentFunctions"

/**
 * Main colors in the light theme.
 */
const mainColorsLight = {
    white: "#FFFFFF",
    black: "#353535",
    grey: "#A1A1A1",
    green: "#91C69D",
    blue: "#89C7F3",
    purple: "#A46DB2",
    red: "#ED8A8A",
    orange: "#EAB066",
    yellow: "#E9D78F",
    darkBlue: "#5D7586"
}

/**
 * Main colors in the dark theme.
 */
const mainColorsDark = {
    white: "#FFFFFF",
    black: colorLightLevel("#353535", -10),
    grey: colorLightLevel("#A1A1A1", -10),
    green: colorLightLevel("#91C69D", -10),
    blue: colorLightLevel("#89C7F3", -10),
    purple: colorLightLevel("#A46DB2", -10),
    red: colorLightLevel("#ED8A8A", -10),
    orange: colorLightLevel("#EAB066", -10),
    yellow: colorLightLevel("#E9D78F", -10),
    darkBlue: colorLightLevel("#5D7586", -10)
}

/**
 * Pastel colors in the light theme.
 */
const pastelColorsLight = {
    grey: "#E0E0E0",
    green: "#C8E7C9",
    blue: "#CFE4F3",
    purple: "#E9DCEC",
    red: "#F2D2D1",
    orange: "#F1D9BA",
    yellow: "#F4EED4",
    darkBlue: "#BECFDB"
}

/**
 * Pastel colors in the dark theme.
 */
const pastelColorsDark = {
    grey: colorLightLevel("#E0E0E0", -5),
    green: colorLightLevel("#C8E7C9", -5),
    blue: colorLightLevel("#CFE4F3", -5),
    purple: colorLightLevel("#E9DCEC", -5),
    red: colorLightLevel("#F2D2D1", -5),
    orange: colorLightLevel("#F1D9BA", -5),
    yellow: colorLightLevel("#F4EED4", -5),
    darkBlue: colorLightLevel("#BECFDB", -5)
}

export {
    mainColorsLight,
    mainColorsDark, 
    pastelColorsLight, 
    pastelColorsDark
}