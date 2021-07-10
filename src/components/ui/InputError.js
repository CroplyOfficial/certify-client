// Contains code for the component to describe input error

import React from 'react'
import PropTypes from "prop-types"
import styled, {withTheme} from "styled-components"

const Div = styled.div`
    color: ${props => props.theme.mainColors.red};
    font-family: "Open Sans";
    font-size: 1rem;
    width: 100%;
    height: 1rem;
`;

const InputError = ({theme, id, className, children}) => {
    return (
        <Div id={id} className={className}>
            {children}
        </Div>
    )
}

InputError.propTypes ={
    id: PropTypes.string,
    className: PropTypes.string
}

export default withTheme(InputError)
