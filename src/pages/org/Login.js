import React, {useEffect, useRef, useState} from 'react'
import styled, { withTheme } from 'styled-components';
import {Link} from "react-router-dom"

import {colorLightLevel} from "../../components/functions/componentFunctions"

import backgroundLight from "../../components/assets/Background-light.svg"
import {ReactComponent as CertifyLogo} from "../../components/assets/logo.svg"
import {
    InputPIN,
    InputText,
    Button
} from "../../components/ui/"

const LoginPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${backgroundLight}) no-repeat;
    background-size: 100%;
    display: flex;
    justify-content: center;
    overflow-y: scroll;

`;

const LogoDiv = styled.div`
    display: block;
    text-align: center;
    letter-spacing: 0.1rem;
    font-family: "Poppins";
    div:nth-of-type(1) {
        font-size: 3rem;
        margin-top: 1rem;
        color: #5D7586;
    }
    div:nth-of-type(2) {
        font-size: 1rem;
        color: #5096F1;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins';
    position: relative;
    margin: 25rem 0;
    .inputFields {
        margin-top: 3rem;

        fieldset {
            margin: 0 auto;
            &:nth-of-type(1) {
                margin-bottom: 1rem;
            }
        }

    }
    .buttons {
        margin-left: 0.5rem;
        position: relative;
        div {
            margin-top: 0.5rem;
            display: grid;
            place-items: center;
            a {
                font-family: "Open Sans";
                text-decoration: none;
                color: #000;
            }
        }
        button {
            margin: 0 auto;
        }
        button:nth-of-type(1) {
            margin-top: 2rem;
        }
        button:nth-of-type(2) {
            margin-top: 6rem;
        }
    }
`;

const Login = () => {
    const usernameRef = useRef(null)
    const pinRef = useState(null)
    const [usernameErr, setUsernameErr] = useState("")
    const [pinErr, setPinErr] = useState("")
    useEffect(() => {
        document.title="Login"
    })
    const checkInput = () => {
        if(usernameRef.current.value === "") {
            setUsernameErr("Please enter your username.") 
        }
        else {
            setUsernameErr("")
        }
        if(pinRef.current.value === "") {
            setPinErr("Please enter your PIN.") 
        }
        else if(pinRef.current.value.length < 6) {
            setPinErr("Your PIN must consist of 6 digits.")
        }
        else {
            setPinErr("")
        }
    }
    return (
        <LoginPageContainer>
            <ContentContainer>
                <LogoDiv>
                    <CertifyLogo width="7rem" />
                    <div>
                        CERTIFY
                    </div>
                    <div>
                        DIGITAL IDENTITY FOR ORGANISATIONS
                    </div>
                </LogoDiv>
                <form>
                    <div className="inputFields">
                        <InputText  id="loginUsername" inputRef={usernameRef} err={usernameErr} placeholder="Username" />
                        <InputPIN id="loginPIN" inputRef={el => pinRef.current = el} err={pinErr} placeholder="PIN" inputUnderlineColor="#C4C4C4" maskColor="#89C7F3" deleteDigitColor="#000000" required />
                    </div>
                    <div className="buttons">
                        <Button type="button" primary onClick={checkInput} btnColor="#5D7586">LOGIN</Button>
                        <div>
                            <Link to="">Forgot PIN?</Link>
                        </div>
                        <Button type="button" primary onClick={() => {window.location.href = "/org/onboarding"}} btnColor={colorLightLevel("#BECFDB", -5)}>CREATE NEW IDENTITY</Button>
                    </div>
                </form>
            </ContentContainer>
        </LoginPageContainer>
    )
}

export default withTheme(Login)
