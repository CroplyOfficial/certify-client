import React from "react";
import "./viewApplicationModal.scss";

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  action: Function;
  text: string;
}
const ConfirmActionPopup = ({ visible, setVisible, action, text }: IProps) => {
  return (
    <React.Fragment>
      {visible && (
        <React.Fragment>
          <div className="backdrop"></div>
          <div className="confirm-modal">
            <h1>Confirm Action</h1>
            <p className="text">{text}</p>
            <div className="buttons">
              <button className="cancel" onClick={() => setVisible(false)}>
                CANCEL
              </button>
              <button
                className="confirm"
                onClick={() => {
                  console.log("test???");
                  action();
                  setVisible(false);
                }}
              >
                CONFIRM
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export { ConfirmActionPopup };
