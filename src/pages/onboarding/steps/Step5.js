import React, {useRef} from 'react'
import {Step} from "./"
import {
    InputPIN,
    Button,
} from "../../../components/ui" 
const Step5 = ({userInput, confirmPINRef, nextStepFunc}) => {
    const confirmPINErrRef = useRef(null)
    
    const checkInput = () => {
        if(confirmPINRef.current.value !== userInput.pin) {
            confirmPINErrRef.current.innerHTML = "The input does not match your entered PIN. Please try again."
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
                <InputPIN id="PINConfirm" inputRef={confirmPINRef} errElementRef={confirmPINErrRef} placeholder="Confirm PIN" maskColor="#89C7F3" inputUnderlineColor="#A1A1A1" required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>CONFIRM PIN CODE</Button>
            </div>
        </Step>
    )
}

export default Step5
