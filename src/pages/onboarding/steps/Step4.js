import React, {useRef} from 'react'
import {Step} from "./"
import {
    InputPIN,
    Button,
} from "../../../components/ui" 

const Step4 = ({PINRef, nextStepFunc}) => {
    const PINErrRef = useRef(null)

    const checkInput = () => {
        if(PINRef.current.value === "") {
            PINErrRef.current.innerHTML = "Please enter a valid PIN."
        }
        else if(PINRef.current.value.length < 6) {
            PINErrRef.current.innerHTML = "Your PIN must consist of 6 numbers."
        }
        else {
            nextStepFunc()
        }
    }
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    SET UP PIN CODE
                </div>
                <p>
                    Enter a 6-digit PIN below. 
                </p>
                <p>
                    You will be asked for your PIN code to gain access to your identity profile.                
                </p>
            </div>
            <div className="div2">
                <p>
                    You can use numbers only
                </p>
                <InputPIN id="PIN" placeholder="PIN" inputRef={PINRef} errElementRef={PINErrRef} maskColor="#89C7F3" inputUnderlineColor="#A1A1A1" required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>SET PIN CODE</Button>
            </div>
        </Step>
    )
}

export default Step4
