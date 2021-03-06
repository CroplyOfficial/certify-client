import { ReactElement } from "react";
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
    background: ${props => props.theme.checkbox.labelHover};
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

interface CheckboxProps {
  disabled?: boolean,
  checked?: boolean,
  onChange: Function
} 

/**
 * Returns the Checkbox component.
 * @param {boolean} [disabled] - Specifies whether the checkbox is disabled or not. Apply this propety to make it disabled. 
 * @param {boolean} [checked] - Specifies whether the checkbox is checked or not. Apply this propety to make it checked. 
 * @param {boolean} onChange - Specifies the function to be executed when the state of the checkbox changes. 
 * @returns {ReactElement} - The Checkbox component.
 */
const Checkbox = ({disabled, checked, onChange}: CheckboxProps) => {
  return (
    <Label disabled={disabled}>
      <Input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  );
}

export default Checkbox