import React from 'react'
import {Step} from "./"
import {Button} from "../../../../components/ui" 
import { colorLightLevel } from '../../../../components/functions/componentFunctions'


const Step2 = (props) => {
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
                <Button primary btnColor="#6D97B5" onClick={props.nextStepFunc}>CONTINUE</Button>
            </div>
        </Step>
    )
}

export default Step2
