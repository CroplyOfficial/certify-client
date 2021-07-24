import {useState, Ref} from 'react'
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components'

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
    width: 20rem;
    height: 20rem;
`;

const TextareaBase = styled.textarea`
    box-sizing: border-box;
    font-size: 1rem;
    font-family: "Open Sans";
    font-weight: normal;
    color: ${props => props.theme.input.color};
    resize: none;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 30px;
    box-shadow: none;
    border: 1px solid ${props => props.theme.input.borderColor};
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
        background-color: ${props => props.theme.input.labelBgFloating};
        padding: 0 0.5rem;
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.theme.input.labelColor};
        width: max-content;
    }
      /**********************
    For the custom scrollbar 
    ***********************/

    scrollbar-width: thin;     // for Firefox

    &::-webkit-scrollbar {
        background: none;
        width:8px;
        padding-left:10px;

    }

    /* background of the scrollbar except button or resizer */
    &::-webkit-scrollbar-track {
        background: none;
        border-radius: 30px;
        margin:20px;
        //border: 2px solid black;
    }

    /* scrollbar itself */
    &::-webkit-scrollbar-thumb {
        background-color:#babac0;
        border-radius:16px;
    }

    /* set button(top and bottom of the scrollbar) */
    &::-webkit-scrollbar-button {
        display:none;
    }
`;

const Label = styled.label`
    position: absolute;
    font-family: "Open Sans";
    font-weight: normal;
    font-size: 1rem !important;
    top: 0.7rem;
    left: 1rem;
    color: ${props => props.theme.mainColors.grey};
    transform-origin: 7% -130%;
    transition: transform 300ms ease;
    pointer-events: none;
    &.inputFilled {
        transform: scale(0.5);
        background-color: ${props => props.theme.input.labelBgFloating};
        padding: 0 0.5rem;
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.theme.input.labelColor};
        width: max-content;
    }

`;

const Error = styled(InputError)`
    position: absolute;
    margin-left: 1rem;
    margin-top: 10.2rem;
`;

/**
 * Returns the Textarea component.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {string} [value] - The value of the textarea (uneditable textarea).
 * @param {string} [defaultValue] - The default value of the textarea (editable textarea).
 * @param {Function} [onChange] - The function to be executed when the value in the textarea changes.
 * @param {number|string} [maxLength] - The max number of chars to be allowed in the textarea.
 * @param {string} [className] - Specifies the CSS class of the fieldset containing the textarea.
 * @param {string} [placeholder] - Specifies the placeholder for the textarea.
 * @param {string} [err] - Specifies the error to be shown according to input received. This should be a state ideally.
 * @param {Ref} [inputRef] - Specifies the reference of the textarea.
 * @returns {ReactElement} - The Textarea component.
 */
const Textarea = ({theme, value, defaultValue, onChange, className, maxLength, placeholder, err, inputRef}) => {

    const [isInputFilled, setIsInputFilled] = useState(defaultValue || value ? true : false); // State to determine whether the input field has a value in it or not

    /* 
    Checks if the Input element has any value in it and changes the state isInputFilled according to that. This is 
    needed for making the label float over the input when the latter is clicked. 
    */
    const isInputFilledCheck = (e) => {
        if (e.target.value !== "")
            setIsInputFilled(true);
        else if (e.target.value === "")
            setIsInputFilled(false);
    }

    return (
        <Fieldset className={className}>
            <TextareaBase
                maxLength={maxLength} 
                type="text"
                ref={inputRef}
                defaultValue={defaultValue ? defaultValue : undefined}
                onChange={(e) => {
                        isInputFilledCheck(e);
                        if(typeof onChange !== "undefined") {
                            onChange(e)
                        }
                    }
                }
                value={value}
            />
            <Label className={isInputFilled ? 'inputFilled' : ''}>{placeholder}</Label>
            <Error>{err}</Error>
        </Fieldset>
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    maxLength: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool, 
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    err: PropTypes.string
}

export default withTheme(Textarea)