import { Step } from "./";
import { Button } from "../../../../components/ui";
import "./step8-table.css";

/**
 * Returns the Step7 component which is the onboarding step in which the
 * recovery phrase is shown to the user.
 * @param {Function} nextStepFunc - The function to proceed to the next step.
 * @returns {ReactElement} - The Step7 component.
 */
const Step9 = ({ nextStepFunc, domain, publickey }) => {
  return (
    <Step>
      <div className="div1">
        <div className="heading">SET DVID DNS</div>
        <p>
          All of the Verifiable Credentials that would be issued using certify
          are signed using a special asymmetric keypair. To be able to verify
          that the VC has been issued by the domain someone is claiming to issue
          it from, we would need you to setup a special DNS record
        </p>
        <div className="div2">
          <strong style={{ fontFamily: "monospace" }}>Your DVID Key</strong>
          <div
            style={{
              overflowWrap: "break-word",
              maxWidth: "500px",
              fontFamily: "monospace",
              padding: "15px",
              background: "#5D7586",
              borderRadius: "5px",
              fontSize: "0.9rem",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={() => {
              navigator.clipboard.writeText(publickey);
            }}
          >
            {publickey}
          </div>
        </div>
        <table className="keyTable">
          <tr>
            <th>Type</th>
            <th>Key</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>TXT</td>
            <td>{domain}</td>
            <td>{`DVID.publicKey=<key-goes-here>`}</td>
          </tr>
        </table>
      </div>
      <div className="continueButton">
        <Button primary btnColor="#6D97B5" onClick={nextStepFunc}>
          CONTINUE
        </Button>
      </div>
    </Step>
  );
};

export default Step9;
