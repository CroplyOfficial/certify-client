import {Step} from "./"
import {Button} from "../../../../components/ui" 
import { colorLightLevel } from '../../../../components/functions/componentFunctions'

/**
 * Returns the Step2 component which is the onboarding step to inform the user
 * to secure their wallet.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step2 component.
 */
const Step2 = ({nextStepFunc}) => {
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    SECURE YOUR WALLET
                </div>
                <p>
                    Save and print your recovery kit PDF template.
                </p>
                <p>
                    If you fill out the recovery kit and store it safely, you will always be able to recover your Identity.
                </p>
            </div>
            <div className="div2">
                <Button primary btnColor={colorLightLevel("#6D97B5", -10)}>DOWNLOAD KIT PDF</Button>
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={nextStepFunc}>CONTINUE</Button>
            </div>
        </Step>
    )
}

export default Step2
