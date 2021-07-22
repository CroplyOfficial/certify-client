import {useState} from 'react'
import {Step} from "./"
import {
    InputConfidInfo,
    Button,
} from "../../../../components/ui" 

/**
 * Returns the Step3 component which is the onboarding step to enter and confirm the
 * password.
 * @param {Reference} passwordRef - The reference to the password input field.
 * @param {Reference} confirmPasswordRef - The reference to the confirm password input field.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step3 component.
 */
const Step3 = ({nextStepFunc, passwordRef, confirmPasswordRef}) => {
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
    
    /**
     * Function to validate the input values.
     */
    const inputValidation = () => {
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
                <InputConfidInfo id="password" inputRef={passwordRef} err={passwordErr} placeholder="Password" showHideColor="#A1A1A1" strengthMeter />
                <InputConfidInfo id="passwordConfirm" inputRef={confirmPasswordRef} err={confirmPasswordErr} showHideColor="#A1A1A1" placeholder="Confirm Password" />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={inputValidation}>SAVE PASSWORD</Button>
            </div>
        </Step>
    )
}

export default Step3
