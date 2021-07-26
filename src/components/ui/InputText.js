import {withTheme} from 'styled-components'

import InputBase from "./InputBase"

/**
 * Returns the InputText component.
 * @param {string} [value] - The value of the input element (uneditable textarea).
 * @param {string} [defaultValue] - The default value of the input element (editable textarea).
 * @param {Function} [onChange] - The function to be executed when the value in the input element changes.
 * @param {number|string} [maxLength] - The max number of chars to be allowed in the input element.
 * @param {Function} [onFocus] - Specifies the function to be executed when the onFocus event is triggered.
 * @param {Function} [onBlur] - Specifies the function to be executed when the onBlur event is triggered.
 * @param {boolean} [autoComplete] - Specifies whether the value in the input field should be auto-completed or not. Apply this prop if the input field should be auto-completed.
 * @param {string} [className] - Specifies the CSS class of the fieldset containing the input element.
 * @param {string} [placeholder] - Specifies the placeholder for the input element.
 * @param {string} [err] - Specifies the error to be shown according to input received. This should be a state ideally.
 * @param {Ref} [inputRef] - Specifies the reference of the input element.
 * @returns {ReactElement} - The InputText component.
 */
const InputText = ({lightTheme, darkTheme, placeholder, value, defaultValue, maxLength, onChange, onFocus, onBlur, inputRef, autoComplete, className, err}) => {
    return (
        <InputBase
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            placeholder={placeholder} 
            maxLength={maxLength}
            inputRef={inputRef}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
            className={className}
            err={err}
        />
    )
}

export default withTheme(InputText)
