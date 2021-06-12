import React, {useEffect, useRef} from 'react'
import styled, { withTheme } from 'styled-components';
import {Link} from "react-router-dom"

import {colorLightLevel} from "../components/functions/componentFunctions"

import backgroundLight from "../components/assets/Background-light.svg"
import {ReactComponent as CertifyLogo} from "../components/assets/logo.svg"
import {
    InputPIN,
    InputText,
    Button
} from "../components/ui/"

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
        a {
            font-family: "Open Sans";
            text-decoration: none;
            color: #000;
            float: left;
            left: 9.5rem;
            top: 3.5rem;
            position: absolute;
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
    const loginUsernameRef = useRef(null)
    const loginPINRef = useRef(null)
    const loginUsernameErrRef = useRef(null)
    const loginPINErrRef = useRef(null)
    useEffect(() => {
        document.title="Login"
    })
    const checkInput = () => {
        if(loginUsernameRef.current.value === "") {
            loginUsernameErrRef.current.innerHTML = "Please enter your username." 
        }
        if(loginPINRef.current.value === "") {
            loginPINErrRef.current.innerHTML = "Please enter your PIN." 
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
                        <InputText  id="loginUsername" inputRef={loginUsernameRef} errElementRef={loginUsernameErrRef} placeholder="Username" />
                        <InputPIN id="loginPIN" inputRef={loginPINRef} errElementRef={loginPINErrRef} placeholder="PIN" inputUnderlineColor="#C4C4C4" maskColor="#89C7F3" required />
                    </div>
                    <div className="buttons">
                        <Button type="button" primary onClick={checkInput} btnColor="#5D7586">LOGIN</Button>
                        <Link to="">Forgot PIN?</Link>
                        <Button type="button" primary onClick={() => {window.location.href = "/onboarding"}} btnColor={colorLightLevel("#BECFDB", -5)}>CREATE NEW IDENTITY</Button>
                    </div>
                </form>
            </ContentContainer>
        </LoginPageContainer>
    )
}

export default withTheme(Login)
