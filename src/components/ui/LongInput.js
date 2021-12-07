// Contains code for the a long input component which consists of a long input bar and a button.

import styled, { withTheme } from 'styled-components'

import {Button} from "./"

import { mainColors } from '../assets/theme';

const Container = styled.div`
    display: flex;
    width: 50rem;
`;

const Input = styled.input`
    background: none;
    border-radius: 30px 0 0 30px;
    padding: 1rem 1rem 1rem 1rem;
    box-sizing: border-box;
    height: 3rem;
    font-family: "Open Sans";
    font-weight: normal;
    color: ${props => props.theme.input.color};
    width: 75%;
    box-shadow: none;
    border: 1px solid ${props => props.theme.input.borderColor};
    border-right: none;
    font-size: 1rem;
    cursor: text;
    outline: none;
    float: left;
    &::placeholder {
        font-size: 1rem;
        color: ${mainColors.grey};
        opacity: 1;
    }
    &:hover { 
        border-color: ${mainColors.darkBlue};
        border-width:2px;
    }

    &:focus { 
        border-color: ${mainColors.blue};
        border-width:2px;
    }

    &::placeholder {
       color: ${mainColors.grey};
    }
`;

const SearchButton = styled(Button)`
    border-radius: 0 30px 30px 0 !important;
    min-width: 25%;
    max-width: 50px;
    border: 3px solid;
    height: 3rem;
`;

/**
 * Returns the LongInput component. It consists of an input field and button to the right of the field.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component.
 * @param {string} [placeholder] - Placeholder for the input element.
 * @param {string} [btnText] - Text for the button.
 * @param {string} [defaultValue] - Default value for the input element (editable value).
 * @param {Ref} [inputRef] - Reference for the input element.
 * @param {string} [className] - CSS class for the Container component in this component.
 * @returns 
 */
const LongInput = ({theme, className, placeholder, btnText, defaultValue, inputRef}) => {
    return (
        <Container className={className}>
            <Input defaultValue={defaultValue} placeholder={placeholder} ref={inputRef} />
            <SearchButton primary btnColor={mainColors.darkBlue}>{btnText}</SearchButton>
        </Container>
    )
}



export default withTheme(LongInput)
