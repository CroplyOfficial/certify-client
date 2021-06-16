import {useState} from 'react'
import {Step} from "./"
import {
    InputConfidInfo,
    Button,
} from "../../../../components/ui" 
const Step3 = ({nextStepFunc, passwordRef, confirmPasswordRef}) => {
    const [passwordErr, setPasswordErr] = useState("")
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("")

    const checkInput = () => {
        if(passwordRef.current.value === "") {
            setConfirmPasswordErr("")
            setPasswordErr("Please enter a valid password.")
        }
        else if(confirmPasswordRef.current.value !== passwordRef.current.value) {
            setPasswordErr("")
            setConfirmPasswordErr("The values entered in the password and confirm password field do not match.")
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
                <InputConfidInfo id="password" inputRef={passwordRef} err={passwordErr} placeholder="Password" showHideColor="#A1A1A1" strengthMeter required />
                <InputConfidInfo id="passwordConfirm" inputRef={confirmPasswordRef} err={confirmPasswordErr} showHideColor="#A1A1A1" placeholder="Confirm Password" required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>SAVE PASSWORD</Button>
            </div>
        </Step>
    )
}

export default Step3
