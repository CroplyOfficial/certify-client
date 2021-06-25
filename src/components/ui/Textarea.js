// Contains code for the Textarea components
/* 
props:
value, defaultValue, className, maxLength, placeholder, id, required have the same meaning as they do in standard jsx for an input field.
inputRef -> specifies the ref prop for the textarea element which is part of this component.
errRef -> specifies the ref prop for the div in the InputError component contained in this component.
*/

import {useState} from 'react'
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
    color: ${props => props.theme.mainColors.black};
    resize: none;
    width: 100%;
    height: 100%;
    padding: 1rem;
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
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.theme.mainColors.darkBlue};
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
        background-color: white;
        padding: 0 0.5rem;
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.theme.mainColors.darkBlue};
        width: max-content;
    }

`;

const Error = styled(InputError)`
    position: absolute;
    margin-left: 1rem;
    margin-top: 3.2rem;
`;

const Textarea = ({theme, value, defaultValue, onChange, className, maxLength, placeholder, id, required, errRef, inputRef}) => {

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
                id={id}
                defaultValue={defaultValue ? defaultValue : undefined}
                onChange={(e) => {
                        isInputFilledCheck(e);
                        if(typeof onChange !== "undefined") {
                            onChange(e)
                        }
                    }
                }
                required={required}
                value={value}
            />
            <Label htmlFor={id} className={isInputFilled ? 'inputFilled' : ''}>{placeholder}</Label>
            <Error 
                errRef={errRef}
            ></Error>
        </Fieldset>
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    id: PropTypes.string,
    maxLength: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool, 
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    errRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ])
}

export default withTheme(Textarea)