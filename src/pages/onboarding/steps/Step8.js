import React from 'react'
import {Step} from "./"
import {Button} from "../../../components/ui" 
const Step8 = (props) => {
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    YOUR IDENTITY IS READY
                </div>
                <p>
                    You can back-up your Identity at any time to a Stronghold file in your user settings.
                </p>
                <p>
                    Continue to enter into your new Certify System.
                </p>
            </div>
            <div className="div2"></div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={props.nextStepFunc}>CONTINUE</Button>
            </div>
        </Step>
    )
}
export default Step8
