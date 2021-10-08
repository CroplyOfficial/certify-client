import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import './viewApplication.modal.scss'

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  applicationId: string
}
const ViewApplicationModal = ({ visible, setVisible, applicationId }: IProps) => {
  const userInfoMeta = useSelector((state: RootState) => state.userLogin);
  const { userInfo }: any = userInfoMeta;

  const [app, setApp] = useState<any>()

  useEffect(() => {
    const getApplication = async () => {
      if (applicationId) {
        const config = { 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInfo.token}`
          }
        }
        const { data } = await axios.get(`/api/applications/@me/current?id=${applicationId}`, config)
        setApp(data)   
      }
    }

    getApplication()
  }, [applicationId])

  return (
    <React.Fragment>
      {visible && (
        <React.Fragment>
          <div className="backdrop" onClick={() => setVisible(false)}></div>
          <div className="viewApplication">
            {app && (
              <React.Fragment>
                <h1>View Application</h1>
                <div className="data">
                  {Object.keys(app.data).map((key) => (

                    <div className="infoBlock">
                      <div className="heading">{key}</div>
                      <div className="value">{app.data[key]}</div>
                    </div>
                  ))}
                  {app.vc && (
                    <React.Fragment>
                      <h2>Verifiable Credential</h2>
                      <ReactJson src={app.vc} displayDataTypes={false} />
                    </React.Fragment>
                  )}
                </div>
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  ) 
}

export { ViewApplicationModal }
