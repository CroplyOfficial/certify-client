import React, {useState} from 'react'
import {Step} from "./"
import {
    InputPIN,
    Button,
} from "../../../components/ui" 

const Step4 = ({pinRef, nextStepFunc}) => {
    const [pinErr, setPinErr] = useState("")

    const checkInput = () => {
        if(pinRef.current.value === "") {
            setPinErr("Please enter a valid PIN.")
        }
        else if(pinRef.current.value.length < 6) {
            setPinErr("Your PIN must consist of 6 digits.")
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
                <InputPIN id="PIN" placeholder="PIN" inputRef={pinRef} err={pinErr} maskColor="#89C7F3" inputUnderlineColor="#A1A1A1" deleteDigitColor="#FFFFFF" required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>SET PIN CODE</Button>
            </div>
        </Step>
    )
}

export default Step4
