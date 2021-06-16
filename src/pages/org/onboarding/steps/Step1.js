import React, {useState} from 'react'
import {Step} from "./"
import {
    InputText, 
    Button,
} from "../../../../components/ui" 

const Step1 = ({profileNameRef, nextStepFunc}) => {
    const [profileNameErr, setProfileNameErr] = useState("")

    const checkInput = () => {
        if(profileNameRef.current.value === "") {
            setProfileNameErr("Please enter a valid profile name.")
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
                <InputText id="profileName" inputRef={profileNameRef} placeholder="Profile Name" err={profileNameErr} required />
            </div>
            <div className="div3">
                <Button primary btnColor="#6D97B5" onClick={checkInput}>CREATE NEW IDENTITY</Button>
            </div>
        </Step>
    )
}

export default Step1
