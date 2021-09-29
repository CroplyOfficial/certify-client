// Contains the code for the custom select tag.

import React, { useState } from "react";

import styled, { withTheme } from "styled-components";

import { ChevronDown } from "../assets/icons";

import { themeLight, themeDark, mainColors } from "../assets/theme";

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  position: relative;
  border: none;
  width: fit-content;
  overflow: visible;
  display: flex;
  justify-content: flex-start;
  height: 3rem;
  width: 18rem;
`;

const SelectBase = styled.select`
  background: none;
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
  border: 1px solid
    ${(props) =>
      props.lightTheme
        ? themeLight.input.borderColor
        : props.darkTheme
        ? themeDark.input.borderColor
        : props.theme.input.borderColor};
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  outline: none;
  color: ${(props) =>
    props.lightTheme
      ? themeLight.input.color
      : props.darkTheme
      ? themeDark.input.color
      : props.theme.input.color};
  // to remove original dropdown arrow
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;

  &:hover {
    border-color: ${(props) =>
      props.lightTheme
        ? themeLight.input.borderColorHover
        : props.darkTheme
        ? themeDark.input.borderColorHover
        : props.theme.input.borderColorHover};
    border-width: 2px;
  }
  &:focus {
    border-color: ${mainColors.blue};
    border-width: 2px;
  }
  &:focus ~ label {
    transform: scale(0.5);
    background: ${(props) =>
      props.lightTheme
        ? themeLight.input.labelBgFloating
        : props.darkTheme
        ? themeDark.input.labelBgFloating
        : props.theme.input.labelBgFloating};
    padding: 0 0.5rem;
    top: 1rem;
    font-size: 1.7rem !important;
    color: ${(props) =>
      props.lightTheme
        ? themeLight.input.labelColorFloating
        : props.darkTheme
        ? themeDark.input.labelColorFloating
        : props.theme.input.labelColorFloating};
    width: max-content;
  }
  & option {
    color: ${mainColors.black};
  }
`;

const DropdownArrow = styled.div`
  position: absolute;
  right: 0.8rem;
  margin-top: 0.7rem;

  transition: all 0.2s ease-out;
`;

const Label = styled.label`
  position: absolute;
  font-family: "Open Sans";
  font-weight: normal;
  font-size: 1rem !important;
  top: 0.7rem;
  left: 1rem;
  color: ${(props) =>
    props.lightTheme
      ? themeLight.input.labelColor
      : props.darkTheme
      ? themeDark.input.labelColor
      : props.theme.input.labelColor};
  transform-origin: 7% -130%;
  transition: transform 300ms ease;
  pointer-events: none;
  &.optSelected {
    transform: scale(0.5);
    background-color: ${(props) =>
      props.lightTheme
        ? themeLight.input.labelBgFloating
        : props.darkTheme
        ? themeDark.input.labelBgFloating
        : props.theme.input.labelBgFloating};
    padding: 0 0.5rem;
    top: 1rem;
    font-size: 1.7rem !important;
    color: ${(props) =>
      props.lightTheme
        ? themeLight.input.labelColorFloating
        : props.darkTheme
        ? themeDark.input.labelColorFloating
        : props.theme.input.labelColorFloating};
    width: max-content;
  }
`;

/**
 * Returns the Select component.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {boolean} [darkTheme] - To specify if the component should use the light theme.
 * @param {boolean} [lightTheme] - To specify if the component should use the dark theme.
 * @param {string} [defaultValue] - The default value of the input element (editable textarea).
 * @param {string[]} optionList - The array of option strings.
 * @param {string} [placeholder] - Specifies the placeholder for the select element.
 * @param {Ref} [inputRef] - Specifies the reference of the select element.
 * @returns {ReactElement} - The Select component.
 */
const Select = ({
  theme,
  lightTheme,
  darkTheme,
  inputRef,
  defaultValue,
  placeholder,
  optionList,
  onChange,
}) => {
  const [isOptSelected, setIsOptSelected] = useState(
    defaultValue ? true : false
  ); // State to determine whether an option is selected or not.
  let optList = []; // Array which will contain all the option elements

  /**
   * Checks if the SelectBase element has any value in it and changes the state isOptSelected according to that. This is
   * needed for making the label float over the element when the latter is clicked.
   */
  const isOptSelectedCheck = (e) => {
    if (e.target.value !== "") setIsOptSelected(true);
    else if (e.target.value === "") setIsOptSelected(false);
  };
  /* Converting all values in optionList to option elements and pushing them to optList */
  for (const [index, value] of optionList.entries()) {
    optList.push(<option key={index}>{value}</option>);
  }
  return (
    <Fieldset>
      <SelectBase
        ref={inputRef}
        defaultValue={defaultValue}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        onChange={(e) => {
          isOptSelectedCheck(e);
          if (onChange) onChange(e);
        }}
      >
        <option hidden disabled selected value></option>
        {optList}
      </SelectBase>
      <DropdownArrow>
        <ChevronDown fill={mainColors.grey} width="1.5rem" />
      </DropdownArrow>
      <Label
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        className={isOptSelected ? "optSelected" : ""}
      >
        {placeholder}
      </Label>
    </Fieldset>
  );
};

export default withTheme(Select);
