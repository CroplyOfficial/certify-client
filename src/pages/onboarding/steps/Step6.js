import React from 'react'
import {Step} from "./"
import {Button} from "../../../components/ui" 
const Step6 = (props) => {
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
                <Button primary btnColor="#6D97B5" onClick={props.nextStepFunc}>CONTINUE</Button>
            </div>
        </Step>
    )
}

export default Step6
