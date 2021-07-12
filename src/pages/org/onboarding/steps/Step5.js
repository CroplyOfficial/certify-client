import React, {useState} from 'react'
import {Step} from "./"
import {
    InputPIN,
    Button,
} from "../../../../components/ui" 
const Step5 = ({userInput, confirmPinRef, nextStepFunc}) => {
    const [confirmPinErr, setConfirmPinErr] = useState("")
    
    const inputValidation = () => {
        if(confirmPinRef.current.value !== userInput.pin) {
            setConfirmPinErr("The input does not match your entered PIN. Please try again.")
        }
        else {
            nextStepFunc()
        }
    }
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    VERIFY PIN CODE
                </div>
                <p>
                    Your PIN keeps your Identity and Credentials private.
                </p>
            </div>
            <div className="div2">
                <p>
                    Re-Enter your PIN to continue
                </p>
                <InputPIN id="pinConfirm" inputRef={confirmPinRef} err={confirmPinErr} placeholder="Confirm PIN" maskColor="#89C7F3" inputUnderlineColor="#A1A1A1" deleteDigitColor="#FFFFFF" />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={inputValidation}>CONFIRM PIN CODE</Button>
            </div>
        </Step>
    )
}

export default Step5
