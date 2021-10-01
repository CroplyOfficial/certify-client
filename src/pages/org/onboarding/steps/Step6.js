import { useState } from "react";
import { Step } from "./";
import { Button, InputText } from "../../../../components/ui";

/**
 * Returns the Step6 component which is the onboarding step which contains info
 * about the recovery phrase.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step6 component.
 */
const Step6 = ({ nextStepFunc, domain, setDomain }) => {
  const [err, setErr] = useState();

  const inputValidation = () => {
    if (domain.length > 0 && domain.includes("://") && domain.includes(".")) {
      nextStepFunc();
    } else {
      setErr("Please enter a proper URL");
    }
  };

  return (
    <Step>
      <div className="div1">
        <div className="heading">SETUP YOUR DOMAIN</div>
        <p>
          Now that we have all the information needed to setup a basic identity,
          let's setup your issuer identity now
        </p>
        <p>
          Please enter the domain on which this instance of certify is hosted on
        </p>
      </div>
      <div className="div2">
        <InputText
          darkTheme
          onChange={(e) => setDomain(e.target.value)}
          placeholder="Certify Domain"
          err={err}
        />
      </div>
      <div className="div3">
        <Button primary btnColor="#6D97B5" onClick={inputValidation}>
          CONTINUE
        </Button>
      </div>
    </Step>
  );
};

export default Step6;
