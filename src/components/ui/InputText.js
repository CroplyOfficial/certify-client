// Input component to enter confidential information like passwords
/*
props:
All prop names except errElementId have the same meaning as they do in standard jsx for an input field.
errElementId -> specifies the id prop for the InputError component contained in the InputBase component. 
*/

import React from 'react'
import PropTypes from "prop-types"
import {withTheme} from 'styled-components'

import InputBase from "./InputBase"

const InputText = ({placeholder, maxLength, id, inputRef, defaultValue, autoComplete, required, className, errElementRef}) => {
    return (
        <InputBase 
            placeholder={placeholder} 
            maxLength={maxLength}
            inputRef={inputRef}
            id={id}
            defaultValue={defaultValue}
            type="text"
            autoComplete={autoComplete}
            required={required}
            className={className}
            errElementRef={errElementRef}
        />
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.func,
    id: PropTypes.string,
    autoComplete: PropTypes.bool,
    maxLength: PropTypes.string,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    errElementRef: PropTypes.object
}

export default withTheme(InputText)
