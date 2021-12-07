import React from 'react'
import styled, {withTheme} from "styled-components"

const Div = styled.div`
    color: ${props => props.theme.mainColors.red};
    font-family: "Open Sans";
    font-size: 1rem;
    width: 100%;
    height: 1rem;
`;

/**
 * Returns the InputError component. This displays errors related to input (if any) in the InputBase component.
 * @param {Object} theme -  To receive the theme from the CustomThemeProvider component.
 * @param {string} className -  The CSS class of the div in this component.
 * @param {ReactElement} children - The children of this component.
 * @returns {ReactElement} - The InputError component.
 */
const InputError = ({theme, className, children}) => {
    return (
        <Div className={className}>
            {children}
        </Div>
    )
}

export default withTheme(InputError)
