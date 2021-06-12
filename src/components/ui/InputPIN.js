// Input component to accept numbers like PINs
/*
props:
All prop names except errElementId have the same meaning as they do in standard jsx for an input field.
errElementId -> specifies the id prop for the InputError component contained in the InputBase component. 
*/


// Contains code for the base of the InputPIN, InputText and InputConfidInfo components
/* 
props:
placeholder, id, value, autoComplete, maxLength, required have the same meaning as they do in standard jsx for an input field.
strengthMeter -> indicates whether or not the component should contain the PWStrengthMeter to determine the strength of the entered password (mainly meant for InputConfidInfo component).
confidInfo -> indicates whether or not the component deals with confidential info or not.
numsOnly -> specifies whether only numbers are to be accepted as input.
errElementId -> specifies the id prop for the InputError component contained in the InputBase component. 
*/

import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types';
import styled, {withTheme} from 'styled-components'
import ReactPinField from "react-pin-field"

import InputError from "./InputError"



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

const PINContainer = styled.div`
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

const InputPIN = ({theme, className, placeholder, id, inputRef, autoComplete, required, errElementRef, autoFocus, maskColor, inputUnderlineColor}) => {

    const [pin, setPin] = useState("")
    const [inputFocused, setInputFocused] = useState(autoFocus ? true : false)
    const pinInputRef = useRef(null)

    const pinHandler = async (e) => {
            setPin(e)  
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
            <PINContainer inputUnderlineColor={inputUnderlineColor} maskColor={maskColor}>
                <ReactPinField 
                    ref={pinInputRef}
                    className="pinDigitContainer" 
                    validate="0123456789" 
                    onChange={pinHandler}
                    onFocus={() => setInputFocused(true)}
                    length="6"
                    autoFocus={autoFocus ? autoFocus : undefined}
                />
            </PINContainer>
            <Error 
                errElementRef={errElementRef}
            ></Error>
        </Fieldset>
    )
}

InputPIN.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.func,
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    required: PropTypes.bool, 
    className: PropTypes.string,
    errElementRef: PropTypes.object,
    autoFocus: PropTypes.bool
}

export default withTheme(InputPIN)
