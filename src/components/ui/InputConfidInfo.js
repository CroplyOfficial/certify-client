// Input component to enter confidential information like passwords.
/* 
props: 
placeholder, id, autoComplete, required have the same meaning as they do in standard jsx for an input field.
strengthMeter -> indicates whether or not the component should contain the PWStrengthMeter to determine the strength of the entered password.
inputRef -> specifies the ref prop for the input element which is part of this component.
errRef -> specifies the ref prop for the div in the InputError component contained in this component.
*/
import {withTheme} from 'styled-components'
import PropTypes from 'prop-types';

import InputBase from "./InputBase"

const InputConfidInfo = ({placeholder, inputRef, autoComplete, required, strengthMeter, className, err, showHideColor}) => {
    return (
            <InputBase 
                placeholder={placeholder}
                inputRef={inputRef}
                autoComplete={autoComplete} 
                required={required}
                confidInfo
                strengthMeter={strengthMeter}
                className={className}
                err={err}
                showHideColor={showHideColor}
            />
    )
}

InputConfidInfo.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),    
    autoComplete: PropTypes.bool,
    required: PropTypes.bool, 
    strengthMeter: PropTypes.bool,
    className: PropTypes.string,
    err: PropTypes.string,
    showHideColor: PropTypes.string
}


export default withTheme(InputConfidInfo)
