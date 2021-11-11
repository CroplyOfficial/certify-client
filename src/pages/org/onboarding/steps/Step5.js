import React, { useState } from "react";
import { Step } from "./";
import { InputPIN, Button } from "../../../../components/ui";

/**
 * Returns the Step5 component which is the onboarding step to confirm the entered PIN.
 * @param {Object} userInput - The object containing the user input.
 * @param {Reference} confirmPinRef - The reference to the confirm PIN input field.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step5 component.
 */
const Step5 = ({ userInput, confirmPinRef, nextStepFunc }) => {
  const [confirmPinErr, setConfirmPinErr] = useState("");

  /**
   * Function to validate the input values.
   */
  const inputValidation = () => {
    if (confirmPinRef.current.value !== userInput.pin) {
      setConfirmPinErr(
        "The input does not match your entered PIN. Please try again."
      );
    } else {
      nextStepFunc();
    }
  };
  return (
    <Step>
      <div className="div1">
        <div className="heading">VERIFY PIN CODE</div>
        <p>Your PIN keeps your Identity and Credentials private.</p>
      </div>
      <div className="div2">
        <p>Re-Enter your PIN to continue</p>
        <InputPIN
          darkTheme
          inputRef={confirmPinRef}
          err={confirmPinErr}
          placeholder="Confirm PIN"
        />
      </div>
      <div className="div3">
        <Button primary btnColor="#6D97B5" onClick={inputValidation}>
          CONFIRM PIN CODE
        </Button>
      </div>
    </Step>
  );
};

export default Step5;
