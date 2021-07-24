// Contains code for the custom h1 tag. Use like a normal h1 tag. e.g. <H1>Hello!</H1>

import styled, {withTheme} from "styled-components"

const H1 = styled.h1`
    font-family: "Poppins";
    font-size: 1.7rem;
    color: ${props => props.theme.h1};
`;

export default withTheme(H1)
