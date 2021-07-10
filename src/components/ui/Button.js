// Contains code for the BtnPrimary component 
/*
props:
btnColor -> provides background color to the button (MUST be in hexadecimal as a string)
primary -> insert as a prop to mark a primary button
type -> provides type attribute for the button
*/

import React from 'react'
import styled, {withTheme} from 'styled-components'
import PropTypes from "prop-types"
import "../../css/animations.css"

import {btnRippleEffect, colorLightLevel, hexToRgb} from "../functions/componentFunctions"

const ButtonBase = styled.button`
    margin: 0;
    border-radius: 30px;
    min-height: 3rem;
    width: 18rem;
    max-width: 250px;
    font-size: 1rem;
    font-family: 'Poppins';
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: ${props => props.primary ? "white" : props.btnColor};
    background-color: ${props => props.primary ? props.btnColor : "white"};
    border: ${props => props.primary ? "none" : "3px solid"};
    border-color: ${props => props.primary ? "" : props.btnColor};
    cursor: pointer;
    text-align: center;
    position: relative;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
    &:hover {
        background-color: ${props => props.primary ? colorLightLevel(props.btnColor, -10) : "rgba("+hexToRgb(props.btnColor)+",0.2)"}
    }
`;

const Button = ({theme, children, type, primary, btnColor, className, onClick}) => {
    return (
        <ButtonBase 
            className={className ? className : ""}
            btnColor={btnColor}
            onClick={(e) => {
                    primary ? btnRippleEffect(e, btnColor): btnRippleEffect(e, theme.mainColors.white)

                    // Checks if the onClick prop has a value or no
                    if(typeof onClick !== "undefined") {
                        onClick()
                    }
                }
            }
            type={type}
            primary={primary}
        >
            {children}
        </ButtonBase>
    )
}

Button.propTypes = {
    btnColor: PropTypes.string.isRequired,
    id: PropTypes.string,
    onClick: PropTypes.func,     
    primary: PropTypes.bool,
    type: PropTypes.string
}

export default withTheme(Button)
