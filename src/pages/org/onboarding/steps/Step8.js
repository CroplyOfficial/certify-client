import { Step } from "./";
import { Button } from "../../../../components/ui";

/**
 * Returns the Step6 component which is the onboarding step which contains info
 * about the recovery phrase.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step6 component.
 */
const Step8 = ({ nextStepFunc, publickey, domain }) => {
  return (
    <Step>
      <div className="div1">
        <div className="heading">RECOVERY PHRASE</div>
        <p>
          In your recovery kit, write down the words in the exact order shown.
        </p>
        <div className="warning">KEEP THIS PRIVATE & SAFELY STORED</div>
        <p>
          It is important to have a written backup, computers often fail, and
          files can corrupt.
        </p>
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

export default Step8;
