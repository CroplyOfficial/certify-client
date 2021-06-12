import React, {useEffect, useState, useRef} from 'react'
import styled, {withTheme} from "styled-components"

import backgroundDark from "../../components/assets/Background-dark.svg"
import {ReactComponent as CertifyLogoWhite} from "../../components/assets/logo-white.svg"
import {ArrowLeft} from "../../components/assets/icons"
import {RecoveryPhraseElement} from "../../components/ui" 
import {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8
} from "./steps"


const OnboardingDesignContainer = styled.div`
    min-width: 85%;
    max-width: 1300px;
    height: 50rem;
    float: right;
    position: relative;
    background: url(${backgroundDark}) no-repeat;
    background-size: 150rem;
    border-radius: 30px 0 0 30px;
    font-family: 'Poppins';
    margin: 2rem 0;
    color: white;
    padding: 4rem 0;
 
`;

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`;

const ContentLeft = styled.div`
    display: grid;
    place-items: center;
    grid-template-rows: 15rem 35rem;
`;
const ContentRight = styled.div`

`;

const GoBack = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;
`;

const LogoDiv = styled.div`
    display: block;
    float: left;
    text-align: center;

    div {
        font-size: 3rem;
        margin-top: 1rem;
    }
`;


const Onboarding = () => {
    const [userInput, setUserInput] = useState({
        "profileName" : "",
        "pin" : "",
        "password" : ""
    })
    useEffect(() => {
        document.title="Onboarding"
    })
    const [activeStep, setActiveStep] = useState(0)
    const profileNameRef = useRef(null)
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const PINRef = useRef(null)
    const confirmPINRef = useRef(null)


    const nextStep = () => {
        // If user is on Step1 (the step where they have to enter the profile name)
        if(activeStep === 0) {
            let newUserInput = {...userInput}
            newUserInput["profileName"] = profileNameRef.current.value
            setUserInput(newUserInput)
        }
        // If user is on Step3 (the step where they have to enter the password)
        if(activeStep === 2) {
            let newUserInput = {...userInput}
            newUserInput["password"] = passwordRef.current.value
            setUserInput(newUserInput)
        }
        // If user is on Step4 (the step where they have to enter the pin)
        if(activeStep === 3) {
            let newUserInput = {...userInput}
            newUserInput["pin"] = PINRef.current.value
            setUserInput(newUserInput)
        }
        console.log(userInput)
        setActiveStep(activeStep => activeStep+1)
    }
    const prevStep = () => {
        setActiveStep(activeStep => activeStep-1)
    }
    const steps =  [
        <Step1 profileNameRef={profileNameRef} nextStepFunc={nextStep} />, 
        <Step2 nextStepFunc={nextStep} />,
        <Step3 passwordRef={passwordRef} confirmPasswordRef={confirmPasswordRef} nextStepFunc={nextStep} />, 
        <Step4 PINRef={PINRef} nextStepFunc={nextStep} />,
        <Step5 userInput={userInput} confirmPINRef={confirmPINRef} nextStepFunc={nextStep} />, 
        <Step6 nextStepFunc={nextStep} />,
        <Step7 nextStepFunc={nextStep} />, 
        <Step8 nextStepFunc={nextStep} />
    ]
    return (
        <OnboardingDesignContainer>
            { 
                activeStep === 0 ? null :
                <GoBack onClick={prevStep}>
                        <ArrowLeft width="48" stroke="#808E99" />    
                </GoBack> 
            }
            <ContentContainer>
                <ContentLeft>
                    <LogoDiv>
                        <CertifyLogoWhite width="7rem" />
                        <div>
                            CERTIFY
                        </div>
                    </LogoDiv>
                    {steps[activeStep]}
                </ContentLeft>
                <ContentRight>
                    {
                        activeStep === 6 ? <RecoveryPhraseElement /> : null
                    }
                </ContentRight>
            </ContentContainer>
        </OnboardingDesignContainer>
    )
}

export default withTheme(Onboarding)
