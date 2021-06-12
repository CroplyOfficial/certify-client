// Contains code for the component for the popup that shows options for a record
/* props:
options -> an object containing key/value pairs where the key is a string containing the option name and the value is the funtion that is executed when the option is clicked
*/

import React from 'react'
import PropTypes from "prop-types"
import styled, {withTheme} from "styled-components"
import {MenuDots} from "../assets/icons"

const Ellipsis = styled.div`
    display: grid;
    place-items: center;
    width: fit-content;
    svg {
        cursor: pointer;
    }
    &:hover + div {
        display: block;
    }
`;

const OptionList = styled.div`
    position: absolute;
    border-radius: 20px;
    background-color: ${props => props.theme.mainColors.white};
    display: none;
    box-shadow: 0px 0px 100px -28px rgba(0,0,0,0.62);
    padding: 1rem 0;
    margin-left: -1rem;
    border: 1px solid ${props => props.theme.pastelColors.grey};

    &:hover {
        display: block;
    }
`;

const Option = styled.div`
    cursor: pointer;
    width: 6rem;
    font-family: "Open Sans";
    font-weight: 600;
    display: grid;
    place-items: center;
    padding: 0.5rem 0;
    color: ${props => props.theme.mainColors.grey};
    &:hover {
        background-color: ${props => props.theme.mainColors.blue};
        color: ${props => props.theme.mainColors.white};
        font-weight: bold;
    }
`;

const RecordOptions = ({theme, optionList}) => {
    let options = []
    let numOfOptions = 1;
    for(let option in optionList) {
        options.push(
            <Option key={numOfOptions} onClick={optionList[option]}>
                {option}
            </Option>
        )
        numOfOptions++
    }
    return (
        <>
        <Ellipsis>
            <MenuDots fill={theme.mainColors.grey} width="1.2rem" />
        </Ellipsis>
        <OptionList>
            {options}
        </OptionList>
        </>
    )
}

RecordOptions.propTypes = {
    optionList: PropTypes.object
}

export default withTheme(RecordOptions)
