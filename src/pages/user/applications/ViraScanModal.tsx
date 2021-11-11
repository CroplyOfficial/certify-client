import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import qrcode from "qrcode";
import "./ViraModal.scss";
import { api_endpoint } from "../../../config";

interface IViraScanProps {
  visible: boolean;
  setVisible: (vis: boolean) => void;
  setDid: (did: string) => void;
}
export const ViraScanModal = ({
  visible,
  setVisible,
  setDid,
}: IViraScanProps) => {
  const [qr, setQR] = useState<string>();
  const userInfoMeta = useSelector((state: RootState) => state.userLogin);
  const { userInfo }: any = userInfoMeta;

  const watchChanges = setInterval(async () => {
    const { data } = await axios.get("/api/users/@me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    if (data.user.did) {
      setVisible(false);
      setDid(data.user.did);
      clearInterval(watchChanges);
    }
  }, 7500);

  useEffect(() => {
    const getTokenData = async () => {
      const { data } = await axios.get("/api/users/@me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const qrCode = await qrcode.toDataURL(
        JSON.stringify({
          type: "didScan",
          api: api_endpoint,
          token: data.token,
        })
      );
      setQR(() => qrCode);
    };

    getTokenData();
  }, [userInfo]);

  return (
    <React.Fragment>
      {visible && (
        <React.Fragment>
          <div
            className="backdrop"
            onClick={() => {
              setVisible(false);
              clearInterval(watchChanges);
            }}
          ></div>
          <div className="vira-scan">
            {qr && <img src={qr} />}

            <h2>SCAN QR FROM VIRA APP</h2>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
