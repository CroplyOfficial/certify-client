// Contains code for the component for the popup that shows options for a record
/* props:
options -> an object containing key/value pairs where the key is a string containing the option name and the value is the funtion that is executed when the option is clicked
*/

import styled, {css, withTheme} from "styled-components"
import {MenuDots} from "../assets/icons"

const Container = styled.div`
    position: relative;
`;

const OptionList = styled.div`
    box-sizing: border-box;
    min-width: 8rem;
    width: max-content;
    position: absolute;
    border-radius: 20px;
    background-color: ${props => props.theme.mainColors.white};
    display: none;
    box-shadow: 0px 0px 100px -28px rgba(0,0,0,0.62);
    padding: 1rem 0;
    margin-left: -1rem;
    border: 1px solid ${props => props.theme.pastelColors.grey};
    &:hover {
        margin-top: -0.1rem;
        display: block;
        z-index: 100;
        ${props => props.optionListStyling && css`${props.optionListStyling}`}
    }
`;

const Ellipsis = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;
    position: relative;
    svg {
        cursor: pointer;
    }
    &:hover + ${OptionList} {
        margin-top: -0.1rem;
        display: block;
        z-index: 100;
        ${props => props.optionListStyling && css`${props.optionListStyling}`}
    }
`;

const Option = styled.div`
    cursor: pointer;
    font-family: "Open Sans";
    font-weight: 600;
    text-align: center;
    padding: 0.5rem 0.5rem;
    color: ${props => props.theme.mainColors.grey};
    &:hover {
        background-color: ${props => props.theme.mainColors.blue};
        color: ${props => props.theme.mainColors.white};
        font-weight: bold;
    }
`;

/**
 * Returns the ShowOptions component. A menu appears when you hover over the Ellipsis component which is a child of this component.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {object.<string, Function>} options - An object whose keys are strings and the corresponding values are functions to be executed when an option with that particular string is selected. 
 * @param {string} [optionListStyling] - styled-components styling to be applied in special cases for the options menu/list.
 * @returns {ReactElement} - The ShowOptions component.
 */
const ShowOptions = ({theme, options, optionListStyling=""}) => {
    let optionComponentsList = [] // Array to hold the Option components
    let numOfOptions = 1; // Variable to record number of options

    /* Converting all the options in optionList to Option components and pushing them to the options array */
    for(let option in options) {
        optionComponentsList.push(
            <Option key={numOfOptions} onClick={options[option]}>
                {option}
            </Option>
        )
        numOfOptions++
    }
    return (
        <Container>
            <Ellipsis optionListStyling={optionListStyling}>
                <MenuDots fill={theme.mainColors.grey} width="1.2rem" />
            </Ellipsis>
            <OptionList optionListStyling={optionListStyling}>
                {optionComponentsList}
            </OptionList>
        </Container>
    )
}

export default withTheme(ShowOptions)
