import { useRef, useState, ReactElement } from "react";
import styled, { withTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userActions";

import { colorLightLevel } from "../../components/functions/componentFunctions";

import backgroundLight from "../../components/assets/Background-light.svg";
import { ReactComponent as CertifyLogo } from "../../components/assets/logo.svg";
import { useHistory } from "react-router-dom";
import { InputConfidInfo, InputText, Button } from "../../components/ui";

const RegsiterPageContainer = styled.div`
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
  margin: 30rem 0;
  .inputFields {
    margin-top: 3rem;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-row-gap: 0.5rem;

    fieldset {
      margin: 0 auto;
      &:nth-of-type(1) {
        margin-bottom: 2rem;
      }
    }
  }
  .buttons {
    margin-top: 5rem;
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
 * Returns the RegisterUser component which is the page that contains
 * the user registration form.
 * @returns {ReactElement} - The RegisterUser component.
 */

const RegisterUser = (): ReactElement => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

  const history = useHistory();

  const dispatch = useDispatch();

  const handleRegisterUser = () => {
    console.log(usernameRef);
  };

  /**
   * Function to validate the input values.
   */
  const inputValidation = () => {
    if (usernameRef.current.value === "") {
      setUsernameErr("Please enter your username.");
    } else {
      setUsernameErr("");
    }
    if (passwordRef.current.value === "") {
      setPasswordErr("Please enter a valid password.");
    } else if (confirmPasswordRef.current.value !== passwordRef.current.value) {
      setPasswordErr("");
      setConfirmPasswordErr(
        "The values entered in the password and confirm password field do not match."
      );
    }
    dispatch(register(usernameRef.current.value, passwordRef.current.value));
    history.push("/user/applications");
  };
  return (
    <RegsiterPageContainer>
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
              strengthMete
            />
            <InputConfidInfo
              lightTheme
              inputRef={confirmPasswordRef}
              err={confirmPasswordErr}
              placeholder="Confirm Password"
            />
          </div>
          <div className="buttons">
            <Button
              type="button"
              primary
              onClick={inputValidation}
              btnColor="#5D7586"
            >
              REGISTER
            </Button>
            <Button
              type="button"
              primary
              onClick={handleRegisterUser}
              btnColor={colorLightLevel("#BECFDB", -5)}
            >
              LOGIN
            </Button>
          </div>
        </form>
      </ContentContainer>
    </RegsiterPageContainer>
  );
};

export default withTheme(RegisterUser);
