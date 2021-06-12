// Contains code for the component to describe input error

import React from 'react'
import PropTypes from "prop-types"
import styled, {withTheme} from "styled-components"

const Div = styled.div`
    color: ${props => props.theme.mainColors.red};
    font-family: "Open Sans";
    font-size: 1rem;
    width: 17.3rem;
    height: 1rem;
`;

const InputError = ({theme, id, errElementRef, className, children}) => {
    return (
        <Div ref={errElementRef} id={id} className={className}>
            {children}
        </Div>
    )
}

InputError.propTypes ={
    id: PropTypes.string,
    className: PropTypes.string,
    errElementRef: PropTypes.object
}

export default withTheme(InputError)
