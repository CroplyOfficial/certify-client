import {useState, useRef} from 'react'
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components'
import ReactPinField from "react-pin-field"

import InputError from "./InputError"
import { PinDeleteDigit } from '../assets/icons';

const Fieldset = styled.fieldset`
    padding: 0;
    position: relative;
    border: none;
    overflow: visible;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 18rem;
    height: 4rem;
`;

const InputForShow = styled.input`
    box-sizing: border-box;
    font-size: "1.2rem";
    font-family: "Open Sans";
    font-weight: normal;
    color: ${props => props.theme.mainColors.black};
    width: 100%;
    height: 3rem;
    padding: "0rem 1rem 0rem 1rem";
    border-radius: 30px;
    box-shadow: none;
    border: 1px solid ${props => props.theme.pastelColors.grey};
    cursor: text;
    position: relative;
    outline: none;
    background: none;
    letter-spacing: 0.3rem;
    &:hover { 
        border-color: ${props => props.theme.mainColors.darkBlue};
        border-width:2px;
    }

    &.active { 
        border-color: ${props => props.theme.mainColors.blue};
        border-width:2px;
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

const Label = styled.label`
    position: absolute;
    font-family: "Open Sans";
    font-weight: normal;
    top: 1rem;
    left: 1rem;
    color: ${props => props.theme.mainColors.grey};
    transform-origin: 7% -130%;
    transition: transform 300ms ease;
    pointer-events: none;
    transform: scale(0.5);
    background-color: white;
    padding: 0 0.5rem;
    font-size: 1.7rem !important;
    color: ${props => props.theme.mainColors.darkBlue};
    width: max-content;
`;
const DeleteDigit = styled.div`
    margin-left: 15.5rem;
    position: absolute;
    margin-top: 0.9rem;
    svg {
        cursor: pointer;
    }
`;

const PinContainer = styled.div`
    position: absolute;
    margin-top: 0.8rem;
    margin-left: 1.5rem;
    swd-pin-field {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 0.3rem; 
        .pinDigitContainer {
            text-align: center;
            box-sizing: border-box;
            background: none;
            font-size: 1.2rem;
            outline: none;
            height: 1.5rem;
            width: 1.6rem;
            border: none;
            border-bottom: ${props => "3px solid "+props.inputUnderlineColor};
            &[type=password] {
                padding: 0rem;
                font-size: 5rem;
                color: ${props => props.maskColor};
                border-bottom: none;
                @-moz-document url-prefix() {
                    & {
                        font-size: 3rem;
                        padding-bottom: 0.5rem;
                    }
                }
            }
        }
    }
`;

const Error = styled(InputError)`
    position: absolute;
    margin-left: 1rem;
    margin-top: 3.2rem;
`;

/**
 * Returns the InputPIN component.
 * @param {object} theme - To receive the theme from the parent component.
 * @param {string} [value] - The value of the textarea (uneditable textarea).
 * @param {string} [defaultValue] - The default value of the textarea (editable textarea).
 * @param {Function} [onChange] - The function to be executed when the value in the swd-pin-field element changes.
 * @param {number|string} [maxLength] - The max number of chars to be allowed in the swd-pin-field element.
 * @param {string} [className] - Specifies the CSS class of the fieldset containing the swd-pin-field element.
 * @param {boolean} [autoFocus] - Specifies whether the swd-pin-field element should be auto-focused or not. Apply this prop if the swd-pin-field element should be auto-focused.
 * @param {boolean} [autoComplete] - Specifies whether the value in the swd-pin-field element should be auto-completed or not. Apply this prop if the swd-pin-field element should be auto-completed.
 * @param {string} [placeholder] - Specifies the placeholder for the swd-pin-field element.
 * @param {string} [err] - Specifies the error to be shown according to input received. This should be a state ideally.
 * @param {string} [maskColor] - Specifies the color (in hexadecimal) of the mask which hides the entered PIN digits.
 * @param {string} [maskColor] - Specifies the color (in hexadecimal) of the underline which distinguishes the different digit input elements.
 * @param {string} [deleteDigitColor] - Specifies the stroke color (in hexadecimal) of the svg element which deletes entered digits on being clicked.
 * @param {Ref} [inputRef] - Specifies the reference of the input element containing the entered PIN code.
 * @returns {ReactElement} - The InputPIN component.
 */
const InputPIN = ({theme, className, placeholder, inputRef, autoComplete, err, autoFocus, maskColor, inputUnderlineColor, deleteDigitColor}) => {

    const [pin, setPin] = useState("") // State to hold the entered PIN value
    const [inputFocused, setInputFocused] = useState(autoFocus ? true : false) // State to determine whether the input fields are focused or blurred
    const pinInputRef = useRef(null) // Reference to the ReactPinField component's swd-pin-field element
    /* 
    NOTE: pinInputRef is different from inputRef. The latter is the reference to a hidden input field from 
    which the value entered in the actual input fields can be accessed using inputRef.current.value . 
    */

    /**
     * Logic of what should happen when the PinDeleteDigit component is clicked.
     */
    const deleteDigitHandler = () => {
        let arr = pinInputRef.current.inputs.slice().reverse()
        for(let input of arr) {
            if(input.value.length > 0) {
                input.focus()
                input.dispatchEvent(new KeyboardEvent('keydown',{'key':'Backspace'}));
                break
            }
        }
    }

    /**
     * Logic of what should happen when the value of any one of the inputs in the swd-pin-field is changed.
     */
    const pinHandler = async (e) => {
            setPin(e) // Sets the pin state to the new value in the input fields
            new Promise(() => {
                setTimeout(() => {
                    if( pinInputRef.current) {
                        pinInputRef.current.inputs.forEach(input => {
                            if(input.value.length > 0) {
                                input.setAttribute("type", "password")
                            }
                        })
                    }
                }, 500)
            })
            if( pinInputRef.current) {
                pinInputRef.current.inputs.forEach(input => {
                    if(input.value === "") {
                        input.setAttribute("type", "text")
                    }
                })
            }
    }

    return (
        <Fieldset className={className}>
            <InputForShow
                type="text"
                autoComplete={autoComplete}
                required={required}
                disabled
                className={inputFocused ? "active" : ""}
            />
            <Label className="inputFilled">{placeholder}</Label>
            <HiddenInput ref={inputRef} style={{display: "none"}} defaultValue={pin} />
            <DeleteDigit>
                <PinDeleteDigit stroke={deleteDigitColor} width="1.5rem" onClick={deleteDigitHandler} />
            </DeleteDigit>
            <PinContainer inputUnderlineColor={inputUnderlineColor} maskColor={maskColor}>
                <ReactPinField 
                    ref={pinInputRef}
                    className="pinDigitContainer" 
                    validate="0123456789" 
                    onChange={pinHandler}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    length="6"
                    autoFocus={autoFocus ? autoFocus : undefined}
                />
            </PinContainer>
            <Error>{err}</Error>
        </Fieldset>
    )
}

InputPIN.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),    
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    err: PropTypes.string,
    autoFocus: PropTypes.bool
}

export default withTheme(InputPIN)
