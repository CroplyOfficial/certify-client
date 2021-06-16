// Contains code for the base of the InputPIN, InputText and InputConfidInfo components
/* 
props:
value, defaultValue, className, maxLength, placeholder, id, autoComplete, required have the same meaning as they do in standard jsx for an input field.
strengthMeter -> indicates whether or not the component should contain the PWStrengthMeter to determine the strength of the entered password (mainly meant for InputConfidInfo component).
confidInfo -> indicates whether or not the component deals with confidential info or not.
inputRef -> specifies the ref prop for the input element which is part of this component.
errRef -> specifies the ref prop for the div in the InputError component contained in this component.
*/

import {useState} from 'react'
import PropTypes from 'prop-types';
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
        top: ${props => props.strengthMeter ? "3.5rem" : "1rem"};
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
    top: ${props => props.strengthMeter ? "3.2rem" : "0.7rem"};
    left: 1rem;
    color: ${props => props.theme.mainColors.grey};
    transform-origin: 7% -130%;
    transition: transform 300ms ease;
    pointer-events: none;
    &.inputFilled {
        transform: scale(0.5);
        background-color: white;
        padding: 0 0.5rem;
        top: ${props => props.strengthMeter ? "3.5rem" : "1rem"};
        font-size: 1.7rem;
        color: ${props => props.theme.mainColors.darkBlue};
        width: max-content;
    }

`;

const ToggleShow = styled.div`
    position: absolute;
    right: 1rem;
    cursor: pointer;
    top: ${props => props.strengthMeter ? "3.2rem" : "0.7rem"};
    height: fit-content;
    width: fit-content;
    background-color: ${props => props.theme.mainColors.white};
`;

const Error = styled(InputError)`
    position: absolute;
    margin-left: 1rem;
    margin-top: ${props => props.strengthMeter ? "5.6rem" : "3.2rem"};
`;

const InputBase = ({theme, value, defaultValue, onFocus, onBlur, onChange, className, strengthMeter, maxLength, confidInfo, placeholder, id, autoComplete, required, err, inputRef}) => {

    const [isInputFilled, setIsInputFilled] = useState(defaultValue || value ? true : false); // State to determine whether the input field has a value in it or not
    const [isConfidInfoVisible, setIsConfidInfoVisible] = useState(false); // State to determine whether the text in the input field is masked or not. This is needed for the Show/Hide Password functionality

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

    /* Changes the state isConfidInfoVisible to show or hide (mask) the info in the input field */
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
                id={id}
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
                required={required}
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
                        <View width="1.5rem" stroke={theme.mainColors.grey} /> : 
                        <Hide width="1.5rem" stroke={theme.mainColors.grey} />
                    }
                </ToggleShow> : 
                ""
            }
            <Error strengthMeter={strengthMeter}>{err}</Error>
        </Fieldset>
    )
}

InputBase.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    id: PropTypes.string,
    autoComplete: PropTypes.bool,
    maxLength: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    required: PropTypes.bool, 
    confidInfo: PropTypes.bool,
    strengthMeter: PropTypes.bool,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    err: PropTypes.string
}

export default withTheme(InputBase)
