import React, {useRef} from 'react'
import {Step} from "./"
import {
    InputConfidInfo,
    Button,
} from "../../../components/ui" 
const Step3 = ({nextStepFunc, passwordRef, confirmPasswordRef}) => {
    const passwordErrRef = useRef(null)
    const confirmPasswordErrRef = useRef(null)

    const checkInput = () => {
        if(passwordRef.current.value === "") {
            confirmPasswordRef.current.innerHTML = ""
            passwordErrRef.current.innerHTML = "Please enter a valid password."
        }
        else if(confirmPasswordRef.current.value !== passwordRef.current.value) {
            passwordErrRef.current.innerHTML = ""
            confirmPasswordErrRef.current.innerHTML = "The values entered in the password and confirm password field do not match."
        }
        else {
            nextStepFunc()
        }
    }
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    CREATE YOUR PASSWORD
                </div>
                <p>
                    Use a strong password to protect your Identity. 
                </p>
                <p>
                    Be sure to use a combination of upper and lower case letters, numbers and symbols.            
                </p>
            </div>
            <div className="div2">
                <InputConfidInfo id="password" inputRef={passwordRef} errElementRef={passwordErrRef} placeholder="Password" strengthMeter required />
                <InputConfidInfo id="passwordConfirm" inputRef={confirmPasswordRef} errElementRef={confirmPasswordErrRef} placeholder="Confirm Password" required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>SAVE PASSWORD</Button>
            </div>
        </Step>
    )
}

export default Step3
