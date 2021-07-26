import {useState, Ref} from 'react'
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components'

import InputError from "./InputError"

import { themeLight, themeDark, mainColors } from '../assets/theme';

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
    color: ${props => props.lightTheme ? 
            themeLight.input.color :          
            (
                props.darkTheme ?
                themeDark.input.color :
                props.theme.input.color
            )
        };    
    resize: none;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 30px;
    box-shadow: none;
    border: 1px solid ${props => props.lightTheme ? 
            themeLight.input.borderColor :          
            (
                props.darkTheme ?
                themeDark.input.borderColor :
                props.theme.input.borderColor
            )
        };    
    cursor: text;
    position: relative;
    outline: none;
    background: none;
    &:hover { 
        border-color: ${props => props.lightTheme ? 
            themeLight.input.borderColorHover :          
            (
                props.darkTheme ?
                themeDark.input.borderColorHover :
                props.theme.input.borderColorHover
            )
        };        
        border-width:2px;
    }

    &:focus { 
        border-color: ${mainColors.blue};     
        border-width: 2px;
    }
    &:focus ~ label {
        transform: scale(0.5);
        background: ${props => props.lightTheme ? 
            themeLight.input.labelBgFloating :          
            (
                props.darkTheme ?
                themeDark.input.labelBgFloating :
                props.theme.input.labelBgFloating
            )
        };        padding: 0 0.5rem;
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.lightTheme ? 
            themeLight.input.labelColorFloating :          
            (
                props.darkTheme ?
                themeDark.input.labelColorFloating :
                props.theme.input.labelColorFloating
            )
        };        width: max-content;
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
    color: ${mainColors.grey};
    transform-origin: 7% -130%;
    transition: transform 300ms ease;
    pointer-events: none;
    &.inputFilled {
        transform: scale(0.5);
        background: ${props => props.lightTheme ? 
            themeLight.input.labelBgFloating :          
            (
                props.darkTheme ?
                themeDark.input.labelBgFloating :
                props.theme.input.labelBgFloating
            )
        };        padding: 0 0.5rem;
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.lightTheme ? 
            themeLight.input.labelColorFloating :          
            (
                props.darkTheme ?
                themeDark.input.labelColorFloating :
                props.theme.input.labelColorFloating
            )
        };        
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
 * @param {boolean} [darkTheme] - To specify if the component should use the light theme.
 * @param {boolean} [lightTheme] - To specify if the component should use the dark theme.
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
const Textarea = ({theme, lightTheme, darkTheme, value, defaultValue, onChange, className, maxLength, placeholder, err, inputRef}) => {

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
                lightTheme={lightTheme}
                darkTheme={darkTheme}
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
            <Label
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                className={isInputFilled ? 'inputFilled' : ''}
            >
                {placeholder}
            </Label>
            <Error>{err}</Error>
        </Fieldset>
    )
}

export default withTheme(Textarea)