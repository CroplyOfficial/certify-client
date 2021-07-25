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
    navbar: {
        color: mainColors.grey
    },
    mainContent: {
        bg:  mainColors.white,
        border: pastelColors.grey,
    },
    table: {
        firstRowBg: '#DFE3E7',
        firstRowColor: '#666666',
        oddRowBg: '#F2F4F5',
        evenRowBg: '#FFFFFF',
        otherRowsColor: mainColors.black,
        border: `1px solid ${pastelColors.grey}`,
        filters: '#666666'
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
    checkbox: {
        labelHover: mainColors.white
    },
    btnPriBg: mainColors.darkBlue,
    btnSecBg: mainColors.darkBlue,
    hr: pastelColors.grey,
    strengthMeter: {
        color: mainColors.black
    },
    tangleHistoryTable: {
        view: mainColors.darkBlue
    },
    dashboardCard: {
        bg: mainColors.white,
        border: `1px solid ${pastelColors.grey}`
    },    
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
    credentialHolder: {
        bg: colorLightLevel(pastelColors.grey, 9),
        headingColor: mainColors.darkBlue,
        contentColor: '#666666',
        chevronColor: mainColors.grey
    },
    identityProfileHolder: {
        bg: colorLightLevel(pastelColors.grey, 9),
        headingColor: mainColors.darkBlue,
        contentColor: '#666666',
        chevronColor: mainColors.grey,
        profileNameColor: mainColors.darkBlue
    },
    showOptions: {
        ellipsisColor: mainColors.grey,
        optionList: {
            bg: mainColors.white,
            optionColor: mainColors.grey,
            optionColorHover: mainColors.blue,
            borderColor: pastelColors.grey
        }
    },
    profilePic: {
        bg: '#C8D7E3',
        border: '1px solid #E5E5E5'
    },
    identityScan: {
        active: mainColors.black,
        inactive: mainColors.grey,
        color: mainColors.black
    },
    domainHolder: {
        domain: mainColors.black
    },
    settings: {
        moreTextColor: mainColors.black,
        moreChevron: mainColors.grey,
        lastBackupDateColor: mainColors.black
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
    navbar: {
        color: mainColors.white
    },
    mainContent: {
       bg:  colorLightLevel(mainColors.darkBlue, -20),
       border: 'none'
    },
    table: {
        firstRowBg: colorLightLevel(mainColors.darkBlue, -20),
        firstRowColor: mainColors.white,
        oddRowBg: colorLightLevel(mainColors.darkBlue, -20),
        evenRowBg: mainColors.darkBlue,
        otherRowsColor:  mainColors.white,
        border: 'none',
        filters: mainColors.white
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
    checkbox: {
        labelHover: pastelColors.blue
    },
    btnPriBg: colorLightLevel(mainColors.blue, -25),
    btnSecBg: colorLightLevel(mainColors.darkBlue, 30),
    hr: mainColors.darkBlue,
    strengthMeter: {
        color: mainColors.grey
    },
    tangleHistoryTable: {
        view: mainColors.white
    },
    dashboardCard: {
        bg:  colorLightLevel(mainColors.darkBlue, -20),
        border: 'none'
    },
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
    credentialHolder: {
        bg: mainColors.darkBlue,
        headingColor: mainColors.blue,
        contentColor: mainColors.white,
        chevronColor: mainColors.white
    },
    identityProfileHolder: {
        bg: mainColors.darkBlue,
        headingColor: mainColors.blue,
        contentColor: mainColors.white,
        chevronColor: mainColors.white,
        profileNameColor: mainColors.blue
    },
    showOptions: {
        ellipsisColor: mainColors.white,
        optionList: {
            bg: mainColors.darkBlue,
            optionColor: mainColors.white,
            optionColorHover: mainColors.blue,
            borderColor: mainColors.darkBlue
        }
    },
    profilePic: {
        bg: colorLightLevel(mainColors.darkBlue, 20),
        border: 'none'
    },
    identityScan: {
        active: mainColors.white,
        inactive: mainColors.grey,
        color: mainColors.white
    },
    domainHolder: {
        domain: mainColors.white
    },
    settings: {
        moreTextColor: mainColors.blue,
        moreChevron: mainColors.white,
        lastBackupDateColor: mainColors.white
    }
}

export {
    themeLight,
    themeDark,
}