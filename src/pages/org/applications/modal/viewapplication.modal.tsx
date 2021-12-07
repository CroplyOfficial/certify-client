import axios from "axios";
import React, { useState, useEffect, ReactElement } from "react";
import "./viewApplicationModal.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { ConfirmActionPopup } from "./secondConfirm";

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  applicationId: string;
}
const ViewApplicationModal = ({
  visible,
  setVisible,
  applicationId,
}: IProps) => {
  const [application, setApplication] = useState<any>();
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
  const [action, setAction] = useState<Function>();
  const [text, setText] = useState<string>();

  const userInfoMeta = useSelector((state: RootState) => state.userLogin);
  const { userInfo }: any = userInfoMeta;

  const declineApplication = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.patch(
      `/api/applications/${applicationId}`,
      { isApproved: false },
      config
    );
    window.location.href = "/org/applications";
  };

  const confirmApplication = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.patch(
      `/api/applications/${applicationId}`,
      { isApproved: true },
      config
    );
    window.location.href = "/org/applications";
  };

  const handleRevokeApplication = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `/api/applications/revoke/${applicationId}`,
      {},
      config
    );
    window.location.href = "/org/applications";
  };

  const handleDecline = () => {
    setConfirmVisible(true);
    setAction(declineApplication);
    setVisible(false);
  };

  const handleApprove = () => {
    setConfirmVisible(true);
    setAction(confirmApplication);
    setVisible(false);
  };

  useEffect(() => {
    const getApplication = async () => {
      if (applicationId) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data }: any = await axios.get(
          `/api/applications/${applicationId}`,
          config
        );
        if (data) {
          setApplication(data);
        }
      }
    };
    getApplication();
  }, [applicationId]);

  return (
    <React.Fragment>
      {visible && (
        <React.Fragment>
          <ConfirmActionPopup
            visible={confirmVisible}
            setVisible={setConfirmVisible}
            action={() => {
              action();
            }}
            text={text}
          />
          <div className="backdrop" onClick={() => setVisible(false)}></div>
          <div className="view-app-modal">
            {application && (
              <React.Fragment>
                <h2>Confirm Application</h2>
                <p className="info">
                  You are about to confirm the application status for the
                  following {application.template.credentialType}
                  <br />
                  <span className="license">
                    {application.template.name} -{" "}
                    {application.template.referenceCode}
                  </span>
                </p>

                <div className="information">
                  <div className="applicant">
                    <div className="heading">Applicant</div>
                    <div className="value">
                      {application.applicant.username}
                    </div>
                    <div className="heading">Application Date</div>
                    <div className="value">
                      {new Date(application.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="applicationData">
                    {Object.keys(application.data).map((key: string) => (
                      <>
                        <div className="heading">{key}</div>
                        <div className="value">{application.data[key]}</div>
                      </>
                    ))}
                  </div>
                </div>
                {application.status !== "REVOKED" && (
                  <React.Fragment>
                    <p className="info">
                      By confirming the application you would be issuing a
                      signed verifiable credential to the applicant, if you do
                      not wish to issue the credential click decline application
                    </p>
                    <div className="buttons">
                      <button className="deny" onClick={handleDecline}>
                        DECLINE APPLICATION
                      </button>
                      {application && application.status === "APPROVED" ? (
                        <button
                          className="confirm"
                          onClick={handleRevokeApplication}
                        >
                          REVOKE APPLICATION
                        </button>
                      ) : (
                        <button className="confirm" onClick={handleApprove}>
                          CONFIRM APPLICATION
                        </button>
                      )}
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export { ViewApplicationModal };
