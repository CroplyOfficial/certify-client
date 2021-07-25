import {Step} from "./"
import {Button} from "../../../../components/ui" 

/**
 * Returns the Step6 component which is the onboarding step which contains info
 * about the recovery phrase.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step6 component.
 */
const Step6 = ({nextStepFunc}) => {
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    BACK-UP YOUR IDENTITY
                </div>
                <p>
                    You will now be shown a recovery phrase. Write it down in your recovery kit.
                </p>
                <p>
                    DO NOT SHARE your recovery phrase with anyone, it can be used to access your identity and credentials.
                </p>
            </div>
            <div className="div2 warning">
                <p>
                    IF YOU LOSE YOUR RECOVERY PHRASE YOU WILL NEED TO CREATE A NEW IDENTITY PROFILE FROM SCRATCH.
                </p>
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={nextStepFunc}>CONTINUE</Button>
            </div>
        </Step>
    )
}

export default Step6
