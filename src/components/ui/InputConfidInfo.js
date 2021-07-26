import {withTheme} from 'styled-components'

import InputBase from "./InputBase"

/**
 * Returns the InputConfidInfo component.
 * @param {string} [value] - The value of the input element (uneditable textarea).
 * @param {string} [defaultValue] - The default value of the input element (editable textarea).
 * @param {number|string} [maxLength] - The max number of chars to be allowed in the input element.
 * @param {boolean} [autoComplete] - Specifies whether the value in the input field should be auto-completed or not. Apply this prop if the input field should be auto-completed.
 * @param {string} [className] - Specifies the CSS class of the fieldset containing the input element.
 * @param {string} [placeholder] - Specifies the placeholder for the input element.
 * @param {boolean} [strengthMeter] - Specifies whether there should be a password strentgh meter shown. Apply this prop if the password strentgh meter should be shown.
 * @param {string} [showHideColor] - Specifies the stroke color of the svg to toggle the masked input (in hexadecimal). 
 * @param {string} [err] - Specifies the error to be shown according to input received. This should be a state ideally.
 * @param {Ref} [inputRef] - Specifies the reference of the input element.
 * @returns {ReactElement} - The InputConfidInfo component.
 */
const InputConfidInfo = ({lightTheme, darkTheme, placeholder, inputRef, autoComplete, strengthMeter, className, err, showHideColor}) => {
    return (
            <InputBase
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                placeholder={placeholder}
                inputRef={inputRef}
                autoComplete={autoComplete} 
                confidInfo
                strengthMeter={strengthMeter}
                className={className}
                err={err}
                showHideColor={showHideColor}
            />
    )
}

export default withTheme(InputConfidInfo)
