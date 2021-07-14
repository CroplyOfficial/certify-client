/**
 * Creating a global style to use certain fonts throughout the project.
 * These fonts are: Poppins Bold, Open Sans Regular, Open Sans Semi-Bold and Open Sans Semi-Bold.  
 */

import { createGlobalStyle } from 'styled-components'
import PoppinsBoldWoff from "./Poppins-Bold.woff"
import PoppinsBoldWoff2 from "./Poppins-Bold.woff2"
import OpenSansBoldWoff from "./OpenSans-Bold.woff"
import OpenSansBoldWoff2 from "./OpenSans-Bold.woff2"
import OpenSansSemiBoldWoff from "./OpenSans-SemiBold.woff"
import OpenSansSemiBoldWoff2 from "./OpenSans-SemiBold.woff2"
import OpenSansRegularWoff from "./OpenSans-Regular.woff"
import OpenSansRegularWoff2 from "./OpenSans-Regular.woff2"

export default createGlobalStyle`
@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBoldWoff2}) format('woff2'),
        url(${OpenSansBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBoldWoff2}) format('woff2'),
        url(${OpenSansSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegularWoff2}) format('woff2'),
        url(${OpenSansRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsBoldWoff2}) format('woff2'),
        url(${PoppinsBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`;