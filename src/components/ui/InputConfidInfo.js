// Input component to enter confidential information like passwords.
/* 
props: 
placeholder, id, autoComplete, required have the same meaning as they do in standard jsx for an input field.
strengthMeter -> indicates whether or not the component should contain the PWStrengthMeter to determine the strength of the entered password.
errElementId -> specifies the id prop for the InputError component contained in the InputBase component. 
*/

import React from 'react'
import {withTheme} from 'styled-components'
import PropTypes from 'prop-types';

import InputBase from "./InputBase"

const InputConfidInfo = ({placeholder, id, inputRef, autoComplete, required, strengthMeter, className, errElementRef}) => {
    return (
            <InputBase 
                placeholder={placeholder}
                inputRef={inputRef}
                id={id} 
                autoComplete={autoComplete} 
                required={required}
                confidInfo
                strengthMeter={strengthMeter}
                className={className}
                errElementRef={errElementRef}
            />
    )
}

InputConfidInfo.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.func,
    id: PropTypes.string,
    autoComplete: PropTypes.bool,
    required: PropTypes.bool, 
    strengthMeter: PropTypes.bool,
    className: PropTypes.string,
    errElementRef: PropTypes.object

}


export default withTheme(InputConfidInfo)
