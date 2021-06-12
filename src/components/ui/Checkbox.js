import React from "react";
import styled, { keyframes } from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: 0.6rem 1rem;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
  width: 1rem;
  height: 1rem;
  background: none;
  position: absolute;
  top: 0;
  left: -1rem;
  border: 5px solid ${props => props.theme.pastelColors.grey};
  border-radius: 10px;

  ${Input}:not(:disabled):checked & {
    background: none;
  }

  ${Label}:hover & {
    background: ${props => props.theme.mainColors.white};
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
    margin-left: -0.2rem;
    margin-top: -0.1rem;
    fill: ${props => props.theme.mainColors.red}
  }

  ${Input}:checked + &::after {
    display: block;
    top: 0.1em;
    left: 0.35em;
    width: 35%;
    height: 70%;
    border: solid ${props => props.theme.mainColors.grey};
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Checkbox = ({id, disabled, label, name, value, checked, onChange}) => {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}

export default Checkbox