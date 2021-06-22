// Contains the code for the custom select tag.

import React, {useState} from 'react'
import PropTypes from "prop-types"

import styled, {withTheme} from "styled-components"

import {ChevronDown} from "../assets/icons"

const Fieldset = styled.fieldset`
    padding: 0;
    margin: 0;
    position: relative;
    border: none;
    width:fit-content;
    overflow: visible;
    display: flex;
    justify-content: flex-start;
    height: 3rem;
    width: 18rem;
`;

const SelectBase = styled.select`
    box-sizing: border-box;
    font-family: "Open Sans";
    font-weight: normal;
    width: 100%;
    height: 3rem;
    padding: 0rem 2.5rem 0.2rem 1rem;
    border-radius: 30px;
    box-shadow: none;
    display: flex;
    justify-content: flex-start;
    border: 1px solid ${props => props.theme.pastelColors.grey};
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    outline: none;
    // to remove original dropdown arrow
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;

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
    & option {
        color: ${props => props.theme.mainColors.black};
    }
`;

const DropdownArrow = styled.div`
    position: absolute;
    right: 0.8rem;
    margin-top: 0.7rem;

    transition: all 0.2s ease-out;
`;

const Label = styled.label`
    position:absolute;
    font-family: "Open Sans";
    font-weight: normal;
    font-size: 1rem !important;
    top: 0.7rem;
    left: 1rem;
    color: ${props => props.theme.mainColors.grey};
    transform-origin: 7% -130%;
    transition: transform 300ms ease;
    pointer-events: none;
    &.optSelected {
        transform: scale(0.5);
        background-color: white;
        padding: 0 0.5rem;
        top: 1rem;
        font-size: 1.7rem !important;
        color: ${props => props.theme.mainColors.darkBlue};
        width: max-content;
    }
`;

const Select = ({theme, id, inputRef, required, defaultValue, placeholder, optionList}) => {
    const [isOptSelected, setIsOptSelected] = useState(defaultValue ? true : false) // State to determine whether an option is selected or not.
    let optList = [] // Array which will contain all the option elements

    /* 
    Checks if the SelectBase element has any value in it and changes the state isOptSelected according to that. This is 
    needed for making the label float over the element when the latter is clicked. 
    */
    const isOptSelectedCheck = (e) => {
        if (e.target.value !== "")
            setIsOptSelected(true);
        else if (e.target.value === "")
            setIsOptSelected(false);
    }
    /* Converting all values in optionList to option elements and pushing them to optList */
    for (const [index, value] of optionList.entries()) {
        optList.push(<option key={index}>{value}</option>)
      }
    return (
        <Fieldset>
            <SelectBase 
                id={id}
                ref={inputRef}
                required={required}
                onChange={isOptSelectedCheck}
                defaultValue={defaultValue}
            >
                <option hidden disabled selected value></option>
                {optList}
            </SelectBase>
            <DropdownArrow>
                <ChevronDown fill={theme.mainColors.grey} width="1.5rem" />
            </DropdownArrow>
            <Label className={isOptSelected ? 'optSelected' : ''}>{placeholder}</Label>
        </Fieldset>
    )
}

Select.propTypes = {
    placeholder: PropTypes.string,
    inputRef: PropTypes.func || PropTypes.object,
    id: PropTypes.string,
    optionList: PropTypes.array,
    required: PropTypes.bool,
    defaultValue: PropTypes.string
}

export default withTheme(Select)

