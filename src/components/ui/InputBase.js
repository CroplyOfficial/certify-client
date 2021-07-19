import {useState} from 'react'
import styled, {withTheme} from 'styled-components'

import {View, Hide} from "../assets/icons"
import {PWStrengthMeter} from "./"
import InputError from "./InputError"

const Fieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    position: relative;
    border: none;
    overflow: visible;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 18rem;
    height: ${props => props.strengthMeter ? "6.8rem" : "4rem"};
`;

const Input = styled.input`
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "Open Sans";
    font-weight: normal;
    color: ${props => props.theme.mainColors.black};
    width: 100%;
    height: 3rem;
    padding: ${props => props.confidInfo ? "0rem 2.5rem 0rem 1rem" : "0rem 1rem 0rem 1rem"};
    border-radius: 30px;
    box-shadow: none;
    border: 1px solid ${props => props.theme.pastelColors.grey};
    cursor: text;
    position: relative;
    outline: none;
    background: none;
    &:hover { 
        border-color: ${props => props.theme.mainColors.darkBlue};
        border-width:2px;
    }

    &:focus { 
        border-color: ${props => props.theme.mainColors.blue};
        border-width:2px;
    }
    &:focus ~ label {
        transform: scale(0.5);
        background-color: white;
        padding: 0 0.5rem;
        top: ${props => props.strengthMeter ? "3rem" : "1rem"};
        font-size: 1.7rem;
        color: ${props => props.theme.mainColors.darkBlue};
        width: max-content;
    }
`;
const Label = styled.label`
    position: absolute;
    font-family: "Open Sans";
    font-weight: normal;
    font-size: 1rem;
    top: ${props => props.strengthMeter ? "2.7rem" : "0.7rem"};
    left: 1rem;
    color: ${props => props.theme.mainColors.grey};
    transform-origin: 7% -130%;
    transition: transform 300ms ease;
    pointer-events: none;
    &.inputFilled {
        transform: scale(0.5);
        background-color: white;
        padding: 0 0.5rem;
        top: ${props => props.strengthMeter ? "3rem" : "1rem"};
        font-size: 1.7rem;
        color: ${props => props.theme.mainColors.darkBlue};
        width: max-content;
    }

`;

const ToggleShow = styled.div`
    position: absolute;
    right: 1rem;
    cursor: pointer;
    top: ${props => props.strengthMeter ? "2.7rem" : "0.7rem"};
    height: fit-content;
    width: fit-content;
    background-color: ${props => props.theme.mainColors.white};
`;

const Error = styled(InputError)`
    position: absolute;
    margin-left: 1rem;
    margin-top: ${props => props.strengthMeter ? "5.2rem" : "3.2rem"};
`;

/**
 * Returns the InputBase component. This is the parent component of the InputText and InputConfidInfo component.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {string} [value] - The value of the input element (uneditable textarea).
 * @param {string} [defaultValue] - The default value of the input element (editable textarea).
 * @param {Function} [onChange] - The function to be executed when the value in the input element changes.
 * @param {number|string} [maxLength] - The max number of chars to be allowed in the input element.
 * @param {Function} [onFocus] - Specifies the function to be executed when the onFocus event is triggered.
 * @param {Function} [onBlur] - Specifies the function to be executed when the onBlur event is triggered.
 * @param {boolean} [autoComplete] - Specifies whether the value in the input field should be auto-completed or not. Apply this prop if the input field should be auto-completed.
 * @param {string} [className] - Specifies the CSS class of the fieldset containing the input element.
 * @param {string} [placeholder] - Specifies the placeholder for the input element.
 * @param {boolean} [strengthMeter] - Specifies whether there should be a password strentgh meter shown. Apply this prop if the password strentgh meter should be shown.
 * @param {boolean} [confidInfo] - Specifies whether the value in the input element should be masked or not. Apply this prop if the value in the input element should be masked.
 * @param {string} [showHideColor] - Specifies the stroke color of the svg to toggle the masked input (in hexadecimal). 
 * @param {string} [err] - Specifies the error to be shown according to input received. This should be a state ideally.
 * @param {Ref} [inputRef] - Specifies the reference of the input element.
 * @returns {ReactElement} - The InputBase component.
 */
const InputBase = ({theme, value, defaultValue, onFocus, onBlur, onChange, className, strengthMeter, maxLength, confidInfo, placeholder, autoComplete, err, inputRef, showHideColor}) => {

    const [isInputFilled, setIsInputFilled] = useState(defaultValue || value ? true : false); // State to determine whether the input field has a value in it or not
    const [isConfidInfoVisible, setIsConfidInfoVisible] = useState(false); // State to determine whether the text in the input field is masked or not. This is needed for the Show/Hide Password functionality

    /** 
     * Checks if the Input element has any value in it and changes the state isInputFilled according to that. This is 
     * needed for making the label float over the input when the latter is clicked.
     * @param {Event} e - The triggering event.
     */
    const isInputFilledCheck = (e) => {
        if (e.target.value !== "")
            setIsInputFilled(true);
        else if (e.target.value === "")
            setIsInputFilled(false);
    }

    /**
     * Changes the state isConfidInfoVisible to show or hide (mask) the info in the input field.
     * @param {Event} e - The triggering event.
     */
    const toggleShowConfidInfo = (e) => {
        if (!isConfidInfoVisible) 
            setIsConfidInfoVisible(true)
        else if (isConfidInfoVisible)
            setIsConfidInfoVisible(false)
    }

    return (
        <Fieldset className={className} strengthMeter={strengthMeter}>
             {
                strengthMeter ? 
                <PWStrengthMeter confidInfoFieldRef={inputRef} /> :
                ""
            }
            <Input
                maxLength={maxLength} 
                type={(confidInfo ? (isConfidInfoVisible ? "text" : "password") : "text")}
                ref={inputRef}
                defaultValue={defaultValue ? defaultValue : undefined}
                onChange={(e) => {
                        isInputFilledCheck(e);
                        if(typeof onChange !== "undefined") {
                            onChange(e)
                        }
                    }
                }
                strengthMeter={strengthMeter}
                onFocus={onFocus}
                onBlur={onBlur}
                confidInfo={confidInfo}
                autoComplete={autoComplete}
                value={value ? value : undefined}
            />
            <Label 
                strengthMeter={strengthMeter}
                className={isInputFilled ? 'inputFilled' : ''}
            >
                {placeholder}
            </Label>
            {
                confidInfo ?
                <ToggleShow strengthMeter={strengthMeter} onClick={toggleShowConfidInfo} >
                    {
                        isConfidInfoVisible ? 
                        <View width="1.5rem" stroke={showHideColor} /> : 
                        <Hide width="1.5rem" stroke={showHideColor} />
                    }
                </ToggleShow> : 
                ""
            }
            <Error strengthMeter={strengthMeter}>{err}</Error>
        </Fieldset>
    )
}

export default withTheme(InputBase)
