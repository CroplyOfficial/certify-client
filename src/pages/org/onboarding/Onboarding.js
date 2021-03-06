import { useState, useRef } from "react";
import styled, { withTheme } from "styled-components";
import axios from "axios";
import backgroundDark from "../../../components/assets/Background-dark.svg";
import { ReactComponent as CertifyLogoWhite } from "../../../components/assets/logo-white.svg";
import { ArrowLeft } from "../../../components/assets/icons";
import { RecoveryPhraseElement } from "../../../components/ui";
import {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
} from "./steps";

const OnboardingDesignContainer = styled.div`
  min-width: 85%;
  max-width: 1300px;
  height: 50rem;
  float: right;
  position: relative;
  background: url(${backgroundDark}) no-repeat;
  background-size: 150rem;
  border-radius: 30px 0 0 30px;
  font-family: "Poppins";
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
const ContentRight = styled.div``;

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

/**
 * Returns the LoginOrg component which is the page that contains
 * the organisation onboarding steps.
 * @returns {ReactElement} - The LoginOrg component.
 */
const Onboarding = () => {
  const [userInput, setUserInput] = useState({
    profileName: "",
    pin: "",
    password: "",
  });

  const [mnemonic, setMnemonic] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [domain, setDomain] = useState();
  const [key, setKey] = useState();
  const profileNameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const pinRef = useRef(null);
  const confirmPinRef = useRef(null);
  /**
   * Function to go to the next step.
   */
  const nextStep = async () => {
    // If user is on Step1 (the step where they have to enter the profile name)
    if (activeStep === 0) {
      let newUserInput = { ...userInput };
      newUserInput["profileName"] = profileNameRef.current.value;
      setUserInput(newUserInput);
    }
    // If user is on Step3 (the step where they have to enter the password)
    if (activeStep === 2) {
      let newUserInput = { ...userInput };
      newUserInput["password"] = passwordRef.current.value;
      setUserInput(newUserInput);
    }
    // If user is on Step4 (the step where they have to enter the pin)
    if (activeStep === 3) {
      let newUserInput = { ...userInput };
      newUserInput["pin"] = pinRef.current.value;
      setUserInput(newUserInput);
    }
    if (activeStep === 6) {
      const { profileName, password, pin } = userInput;
      const userData = await axios.post(
        "/api/users",
        {
          username: profileName,
          password,
          pin,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(userData.data));
      const didData = await axios.post(
        "/api/admin/onboarding",
        {
          id: userData.data.id,
          domain,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMnemonic(didData.data.mnemonic);
      setKey(didData.data.DVIDKey);
      console.log(didData.data.DVIDKey);
    }
    if (activeStep === 9) {
      window.location.href = "/org/dashboard";
    }
    setActiveStep((activeStep) => activeStep + 1);
  };

  /**
   * Function to go back to the previous step.
   */
  const prevStep = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  const steps = [
    <Step1 profileNameRef={profileNameRef} nextStepFunc={nextStep} />,
    <Step2 nextStepFunc={nextStep} />,
    <Step3
      passwordRef={passwordRef}
      confirmPasswordRef={confirmPasswordRef}
      nextStepFunc={nextStep}
    />,
    <Step4 pinRef={pinRef} nextStepFunc={nextStep} />,
    <Step5
      userInput={userInput}
      confirmPinRef={confirmPinRef}
      nextStepFunc={nextStep}
    />,
    <Step6 nextStepFunc={nextStep} domain={domain} setDomain={setDomain} />,
    <Step7 nextStepFunc={nextStep} />,
    <Step8 nextStepFunc={nextStep} />,
    <Step9 nextStepFunc={nextStep} publickey={key} domain={domain} />,
    <Step10 nextStepFunc={nextStep} />,
  ];
  return (
    <OnboardingDesignContainer>
      {activeStep === 0 ? null : (
        <GoBack onClick={prevStep}>
          <ArrowLeft width="48" stroke="#808E99" />
        </GoBack>
      )}
      <ContentContainer>
        <ContentLeft>
          <LogoDiv>
            <CertifyLogoWhite width="7rem" />
            <div>CERTIFY</div>
          </LogoDiv>
          {steps[activeStep]}
        </ContentLeft>
        <ContentRight>
          {activeStep === 7 ? (
            <RecoveryPhraseElement mnemonic={mnemonic} />
          ) : null}
        </ContentRight>
      </ContentContainer>
    </OnboardingDesignContainer>
  );
};

export default withTheme(Onboarding);
