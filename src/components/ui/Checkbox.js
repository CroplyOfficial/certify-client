import React from "react";
import styled from "styled-components";

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

const Indicator = styled.div`
  width: 1rem;
  height: 1rem;
  background: none;
  position: absolute;
  top: 0;
  left: -1rem;
  border: 3px solid ${props => props.theme.pastelColors.grey};
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
  }

  ${Input}:checked + &::after {
    display: block;
    margin: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.mainColors.green};
    border-radius: 30px;
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