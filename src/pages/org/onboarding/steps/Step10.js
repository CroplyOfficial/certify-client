import { Step } from "./";
import { Button } from "../../../../components/ui";
/**
 * Returns the Step8 component which is the last onboarding step.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step8 component.
 */
const Step10 = ({ nextStepFunc }) => {
  return (
    <Step>
      <div className="div1">
        <div className="heading">YOUR IDENTITY IS READY</div>
        <p>
          You can back-up your Identity at any time to a Stronghold file in your
          user settings.
        </p>
        <p>Continue to enter into your new Certify System.</p>
      </div>
      <div className="div2"></div>
      <div className="div3">
        <Button primary btnColor="#6D97B5" onClick={nextStepFunc}>
          CONTINUE
        </Button>
      </div>
    </Step>
  );
};
export default Step10;
