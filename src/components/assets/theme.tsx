// Contains the themes and colors used for app design. 
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

/**
 * Specifications relating to light theme.
 */
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
        labelColor: mainColors.grey,
        labelColorFloating: mainColors.darkBlue,
        color: mainColors.black,
        borderColor: pastelColors.grey,
        borderColorHover: mainColors.darkBlue,
        toggleShowBg: mainColors.white,
        toggleShowIcon: mainColors.grey,
        deleteDigitColor: mainColors.grey,
        inputUnderlineColor: '#C4C4C4'
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
    popup: {
        bg: mainColors.white,
        colorPri: mainColors.black,
        colorSec: mainColors.grey,
        viewIcon: mainColors.blue,
        hideIcon: mainColors.grey,
        hideInfo: mainColors.grey,
        active: mainColors.black,
        inactive: mainColors.grey
    },
    dynamicSearch: {
        bg: mainColors.white,
        color: mainColors.black
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

/**
 * Specifications relating to dark theme.
 */
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
        labelColor: mainColors.grey,
        labelColorFloating: pastelColors.grey,
        color: mainColors.white,
        borderColor: mainColors.grey,
        borderColorHover: pastelColors.grey,
        toggleShowBg: colorLightLevel(mainColors.darkBlue, -20),
        toggleShowIcon: '#fff',
        deleteDigitColor: '#fff',
        inputUnderlineColor: '#A1A1A1'
    },
    checkbox: {
        labelHover: pastelColors.blue
    },
    btnPriBg: colorLightLevel(mainColors.blue, -25),
    btnSecBg: colorLightLevel(mainColors.darkBlue, 30),
    hr: mainColors.darkBlue,
    strengthMeter: {
        color: mainColors.white
    },
    tangleHistoryTable: {
        view: mainColors.white
    },
    dashboardCard: {
        bg:  colorLightLevel(mainColors.darkBlue, -20),
        border: 'none'
    },
    settingToggleSwitchL: {
        textOn: mainColors.white,
        textOff: mainColors.grey
    },
    settingToggleSwitchLR: {
        textOn: mainColors.white,
        textOff: mainColors.grey
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
    popup: {
        bg: colorLightLevel(mainColors.darkBlue, -20),
        colorPri: mainColors.white,
        colorSec: mainColors.blue,
        viewIcon: mainColors.white,
        hideIcon: mainColors.grey,
        hideInfo: mainColors.grey,
        active: mainColors.white,
        inactive: mainColors.grey
    },
    dynamicSearch: {
        bg: colorLightLevel(mainColors.darkBlue, -20),
        color: mainColors.white
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
    mainColors,
    pastelColors
}