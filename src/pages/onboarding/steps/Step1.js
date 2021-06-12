import React, {useRef} from 'react'
import {Step} from "./"
import {
    InputText, 
    Button,
} from "../../../components/ui" 

const Step1 = ({profileNameRef, nextStepFunc}) => {
    const profileNameErrRef = useRef(null)

    const checkInput = () => {
        if(profileNameRef.current.value === "") {
            profileNameErrRef.current.innerHTML = "Please enter a valid profile name."
        }
        else {
            nextStepFunc()
        }
    }
    return (
        <Step>
            <div className="div1">
                <div className="heading">
                    SETUP YOUR IDENTITY
                </div>
                <p>
                    You can create multiple Identity 
                    accounts, to maintain separate
                    business and personal records.
                </p>
                <p>
                    Let’s start with your first Identity
                    name. You may add more later.
                </p>
            </div>
            <div className="div2">
                <InputText id="profileName" inputRef={profileNameRef} placeholder="Profile Name" errElementRef={profileNameErrRef} required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>CREATE NEW IDENTITY</Button>
            </div>
        </Step>
    )
}

export default Step1
