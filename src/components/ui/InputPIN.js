// Input component to accept numbers like PINs
/*
props:
className, placeholder, id, autoComplete, required, autoFocus have the same meaning as they do in standard jsx for an input field.
inputRef -> specifies the ref prop for the swd-pin-field element which is part of this component.
errRef -> specifies the ref prop for the div in the InputError component contained in this component.
maskColor -> specifies the colour of the text mask for the field in the input field.
inputUnderlineColor-> specified the colour of the underline under each input for this component. 
*/

import React, {useState, useRef} from 'react'
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
            }
        }
    }
`;

const Error = styled(InputError)`
    position: absolute;
    margin-left: 1rem;
    margin-top: 3.2rem;
`;

const InputPIN = ({theme, className, placeholder, id, inputRef, autoComplete, required, err, autoFocus, maskColor, inputUnderlineColor, deleteDigitColor}) => {

    const [pin, setPin] = useState("") // State to hold the entered PIN value
    const [inputFocused, setInputFocused] = useState(autoFocus ? true : false) // State to determine whether the input fields are focused or blurred
    const pinInputRef = useRef(null) // Reference to the ReactPinField component's swd-pin-field element
    /* 
    NOTE: pinInputRef is different to inputRef. The latter is the reference to a hidden input field from 
    which the value entered in the actual input fields can be accessed using inputRef.current.value . 
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
            <HiddenInput id={id} ref={inputRef} style={{display: "none"}} defaultValue={pin} />
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
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool, 
    className: PropTypes.string,
    err: PropTypes.string,
    autoFocus: PropTypes.bool
}

export default withTheme(InputPIN)
