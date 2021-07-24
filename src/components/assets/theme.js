// Contains the theme and colors used for app design. 
// NOTE: pastelColors are essentially a lighter shade of the mainColors.

import backgroundLight from "../assets/Background-light.svg";
import backgroundDark from "../assets/Background-dark.svg";
import {ReactComponent as CertifyLogoLight} from "../assets/logo.svg"
import {ReactComponent as CertifyLogoDark} from "../assets/logo-white.svg"
import { colorLightLevel } from "../functions/componentFunctions";

/**
 * Main colors.
 */
const mainColors = {
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
 * Pastel colors.
 */
const pastelColors = {
    grey: "#E0E0E0",
    green: "#C8E7C9",
    blue: "#CFE4F3",
    purple: "#E9DCEC",
    red: "#F2D2D1",
    orange: "#F1D9BA",
    yellow: "#F4EED4",
    darkBlue: "#BECFDB"
}

const themeLight = {
    mainColors: mainColors,
    pastelColors: pastelColors,
    mode: 'light',
    pageBg: `url(${backgroundLight})`,
    pageTopAuth: {
        bg: 'none'
    },
    menuAuth: {
        logo: (<CertifyLogoLight />),
        certifyColor: mainColors.darkBlue, 
        bg:  'none',
        menuItemColor: mainColors.grey,
        menuItemBgHover: colorLightLevel(pastelColors.grey, 10)
    },
    mainContent: {
       bg:  mainColors.white,
       border: pastelColors.grey,
       componentRight: {
        btnPriBgColor: mainColors.darkBlue,
        btnSecBgColor: mainColors.darkBlue
    }
    },    
    h1: mainColors.darkBlue,
    h6: mainColors.darkBlue,
    input: {
        labelBgFloating: mainColors.white,
        labelColor: mainColors.darkBlue,
        color: mainColors.black,
        borderColor: pastelColors.grey,
        toggleShowBg: mainColors.white
    },
    hr: pastelColors.grey,
    settingToggleSwitchL: {
        textOn: mainColors.black,
        textOff: mainColors.grey
    },
    settingToggleSwitchLR: {
        textOn: mainColors.black,
        textOff: mainColors.grey
    },
    userAppHolder: {
        bg: colorLightLevel(pastelColors.grey, 9),
        headingColor: mainColors.darkBlue,
        contentColor: '#666666'
    },
    showOptions: {
        ellipsisColor: mainColors.grey,
        optionList: {
            bg: mainColors.white,
            optionColorHover: mainColors.blue,
            borderColor: pastelColors.grey
        }
    },
    profilePic: {
        bg: '#C8D7E3',
        border: '1px solid #E5E5E5'
    }

}

const themeDark = {
    mainColors: mainColors,
    pastelColors: pastelColors,
    mode: 'dark',
    pageBg: `url(${backgroundDark})`,
    pageTopAuth: {
        bg: colorLightLevel(mainColors.darkBlue, -20),
    },
    menuAuth: {
        logo: (<CertifyLogoDark />),
        certifyColor: mainColors.white, 
        bg:  colorLightLevel(mainColors.darkBlue, -20),
        menuItemColor: mainColors.white,
        menuItemBgHover: mainColors.darkBlue
    },
    mainContent: {
       bg:  colorLightLevel(mainColors.darkBlue, -20),
       border: 'none',
       componentRight: {
           btnPriBgColor: colorLightLevel(mainColors.blue, -25),
           btnSecBgColor: colorLightLevel(mainColors.darkBlue, 30)
       }
    },
    h1: mainColors.white,
    h6: mainColors.blue,
    input: {
        labelBgFloating: colorLightLevel(mainColors.darkBlue, -20),
        labelColor: mainColors.blue,
        color: mainColors.white,
        borderColor: mainColors.grey,
        toggleShowBg: colorLightLevel(mainColors.darkBlue, -20)
    },
    hr: mainColors.darkBlue,
    settingToggleSwitchL: {
        textOnColor: mainColors.white,
        textOffColor: mainColors.grey
    },
    settingToggleSwitchLR: {
        textOnColor: mainColors.white,
        textOffColor: mainColors.grey
    },
    userAppHolder: {
        bg: mainColors.darkBlue,
        headingColor: mainColors.blue,
        contentColor: mainColors.white
    },
    showOptions: {
        ellipsisColor: mainColors.white,
        optionList: {
            bg: mainColors.darkBlue,
            optionColorHover: mainColors.blue,
            borderColor: mainColors.darkBlue
        }
    },
    profilePic: {
        bg: colorLightLevel(mainColors.darkBlue, 20),
        border: 'none'
    }
}

export {
    themeLight,
    themeDark,
}