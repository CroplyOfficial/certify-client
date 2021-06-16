import React from 'react'
import {Step} from "./"
import {Button} from "../../../../components/ui" 
const Step7 = (props) => {
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    RECOVERY PHRASE
                </div>
                <p>
                    In your recovery kit, write down the words in the exact order shown.
                </p>
                <div className="warning">
                    KEEP THIS PRIVATE & SAFELY STORED
                </div>
                <p>
                    It is important to have a written backup, computers often fail, and files can corrupt.                
                </p>
            </div>
            <div className="div2"></div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={props.nextStepFunc}>CONTINUE</Button>
            </div>
        </Step>
    )
}


export default Step7