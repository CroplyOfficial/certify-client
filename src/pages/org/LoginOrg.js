import { useRef, useState } from "react";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import { colorLightLevel } from "../../components/functions/componentFunctions";

import backgroundLight from "../../components/assets/Background-light.svg";
import { ReactComponent as CertifyLogo } from "../../components/assets/logo.svg";
import { InputConfidInfo, InputText, Button } from "../../components/ui";

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
    color: #5d7586;
  }
  div:nth-of-type(2) {
    font-size: 1rem;
    color: #5096f1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Poppins";
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

/**
 * Returns the LoginOrg component which is the page that contains
 * the organisation login form.
 * @returns {ReactElement} - The LoginOrg component.
 */
const LoginOrg = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const inputValidation = async () => {
    if (usernameRef.current.value === "") {
      setUsernameErr("Please enter your username.");
    } else {
      setUsernameErr("");
    }
    if (passwordRef.current.value === "") {
      setPasswordErr("Please enter your password");
    } else {
      setPasswordErr("");
    }
    const { data } = await axios.post(
      "/api/users/login_with_password",
      {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data.token) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location.href = "/org/dashboard";
    }
  };
  return (
    <LoginPageContainer>
      <ContentContainer>
        <LogoDiv>
          <CertifyLogo width="7rem" />
          <div>CERTIFY</div>
          <div>DIGITAL IDENTITY FOR ORGANISATIONS</div>
        </LogoDiv>
        <form>
          <div className="inputFields">
            <InputText
              lightTheme
              inputRef={usernameRef}
              err={usernameErr}
              placeholder="Username"
            />
            <InputConfidInfo
              lightTheme
              inputRef={passwordRef}
              err={passwordErr}
              placeholder="Password"
            />
          </div>
          <div className="buttons">
            <Button
              type="button"
              primary
              onClick={inputValidation}
              btnColor="#5D7586"
            >
              LOGIN
            </Button>
            <div>
              <Link to="">Forgot Password?</Link>
            </div>
            <Button
              type="button"
              primary
              onClick={() => {
                window.location.href = "/org/onboarding";
              }}
              btnColor={colorLightLevel("#BECFDB", -5)}
            >
              CREATE NEW IDENTITY
            </Button>
          </div>
        </form>
      </ContentContainer>
    </LoginPageContainer>
  );
};

export default withTheme(LoginOrg);
