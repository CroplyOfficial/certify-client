// Input component to enter confidential information like passwords
/*
props:
placeholder, value, maxLength, id, defaultValue, autoComplete, required, className have the same meaning as they do in standard jsx for an input field.
inputRef -> specifies the ref prop for the input element which is part of this component.
errRef -> specifies the ref prop for the div in the InputError component contained in this component.
*/

import PropTypes from "prop-types"
import {withTheme} from 'styled-components'

import InputBase from "./InputBase"

const InputText = ({placeholder, value, maxLength, onChange, onFocus, onBlur, id, inputRef, defaultValue, autoComplete, required, className, err}) => {
    return (
        <InputBase 
            placeholder={placeholder} 
            maxLength={maxLength}
            inputRef={inputRef}
            id={id}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            defaultValue={defaultValue}
            value={value}
            type="text"
            autoComplete={autoComplete}
            required={required}
            className={className}
            err={err}
        />
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]), 
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    id: PropTypes.string,
    autoComplete: PropTypes.bool,
    maxLength: PropTypes.string,
    required: PropTypes.bool,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    err: PropTypes.string
}

export default withTheme(InputText)
