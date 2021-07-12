import {ReactElement} from 'react'
import styled, {withTheme} from 'styled-components'

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
    .ripple {
        position: absolute;
        border-radius: 100%;
        pointer-events: none;
        transform: scale(0);
        z-index: 2;
        &.show {
            animation: ripple 0.45s ease-out;
        }
    }

    @keyframes ripple {
        to {
            transform: scale(1.5);
            opacity: 0;
        }
    }



    @keyframes fadeOut {
        0% { opacity: 1;}
        99% { opacity: 0.01;width: 100%; height: 100%;}
        100% { opacity: 0;width: 0; height: 0;}
    }

    .display-none{
        .on {
            display: block;
            animation: fadeOut 1s;
            animation-fill-mode: forwards;
        }
    }
`;

/**
 * Returns the Button Component.
 * @param {object} theme - To receive the theme from the parent component. 
 * @param {ReactElement} [children] - Specifies the children of this component.
 * @param {string} [type] - Specifies the type of the button.
 * @param {boolean} [primary] - Specifies whether it is a primary button or not. Apply this prop to make the button a primary button.
 * @param {string} btnColor - Specifies the background color of the button.
 * @param {string} [className] - Specifies the CSS class of the button.
 * @param {Function} onClick - Specifies the function to be executed when the button is clicked.
 * @returns {ReactElement} - The Button component.
 */
const Button = ({theme, children, type, primary, btnColor, className, onClick}) => {
    return (
        <ButtonBase 
            className={className}
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

export default withTheme(Button)
