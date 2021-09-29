import { useState, useRef, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import {
  CommonElementsOrg,
  TangleHistory,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Button,
  InputText,
  Select,
  Hr,
} from "../../../components/ui";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const CustomMainContent = styled(MainContent)`
  .inputFields {
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(9, 1fr);
    grid-row-gap: 2rem;
    fieldset {
      width: 100%;
      max-width: none;
    }
    fieldset:nth-of-type(1) {
      grid-column: 1 / span 9;
    }

    fieldset:nth-of-type(2) {
      grid-column: 1 / span 4;
    }

    fieldset:nth-of-type(3) {
      grid-column: 6 / span 4;
    }
    .durationInput {
      grid-row: 3 / span 1;
      grid-column: 1 / span 4;
      display: flex;
      fieldset:nth-of-type(1) {
        width: 50%;
        margin: 0;
        input {
          border-radius: 30px 0 0 30px;
        }
      }
      fieldset:nth-of-type(2) {
        width: 50%;
        margin: 0;
        float: left;
        select {
          border-radius: 0 30px 30px 0;
        }
      }
    }
  }

  h2 {
    font-family: "Open Sans";
    font-weight: "normal";
    color: ${(props) => props.theme.mainColors.grey};
  }
  .addCustomFields {
    .customFieldDiv {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      width: 100%;
      grid-row: auto / span 1;
      margin-bottom: 2rem;
      & > * {
        width: 100%;
      }
      fieldset:nth-of-type(1) {
        grid-column: 1 / span 4;
      }
      fieldset:nth-of-type(2) {
        grid-column: 6 / span 4;
      }
    }
  }
  .addFieldBtn {
    display: flex;
    margin: 2rem 0;
    width: 100%;
    justify-content: flex-end;
  }
`;

/**
 * Returns the NewCredential component which is the page that
 * contains the form to make a new credential for the organization.
 * @param {Object} theme - To receive the theme from the parent component.
 * @returns {ReactElement} - The NewCredential component.
 */

const NewCredential = ({ theme }) => {
  let customFieldNameRefs = useRef([]);
  let customFieldTypeRefs = useRef([]);
  const history = useHistory();

  const userInfoMeta = useSelector((state) => state.userLogin);
  const { userInfo } = userInfoMeta;

  const [name, setName] = useState();
  const [referenceCode, setReferenceCode] = useState();
  const [credentialType, setCredentialType] = useState();
  const [durationPeriod, setDurationPeriod] = useState();
  const [durationTime, setDurationTime] = useState();

  const handleSave = async () => {
    console.log("refs", customFieldNameRefs, customFieldTypeRefs);
    const fieldNames = customFieldNameRefs.current.map((elem) => {
      return elem.value;
    });
    const fieldTypes = customFieldTypeRefs.current.map((elem) => {
      return elem.value;
    });
    const fields = fieldNames.map((fieldName, index) => {
      return {
        label: fieldName,
        type: fieldTypes[index],
      };
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const periods = {
      "Day(s)": 86400,
      "Month(s)": 2592000,
      "Year(s)": 31536000,
    };

    console.log(name, referenceCode, credentialType, fields);

    const newCredential = await axios.post(
      "/api/cred-templates",
      {
        name,
        referenceCode,
        credentialType,
        duration: Number(durationTime) * periods[durationPeriod],
        fields,
      },
      config
    );

    if (newCredential) {
      history.push("/org/credentials");
    }
  };

  useEffect(() => {
    customFieldNameRefs.current = Array(1)
      .fill()
      .map((_, i) => customFieldNameRefs.current[i]);
    customFieldTypeRefs.current = Array(1)
      .fill()
      .map((_, i) => customFieldTypeRefs.current[i]);
  }, []);
  const saveTemplateBtn = (
    <Button primary btnColor={theme.btnPriBg} onClick={handleSave}>
      SAVE TEMPLATE
    </Button>
  );

  const options = ["text", "email", "number", "date", "tel"];
  const [customFields, setCustomFields] = useState([
    <div key={0} className="customFieldDiv">
      <InputText
        inputRef={(el) => (customFieldNameRefs.current[0] = el)}
        placeholder="Custom Field Name"
      />
      <Select
        inputRef={(el) => (customFieldTypeRefs.current[0] = el)}
        placeholder="Field Type"
        optionList={options}
      />
    </div>,
  ]);

  const addCustomField = () => {
    const oldLength = customFields.length;
    const newInput = (
      <div key={oldLength} className="customFieldDiv">
        <InputText
          inputRef={(el) => {
            customFieldNameRefs.current.push(el);
          }}
          placeholder="Custom Field Name"
        />
        <Select
          inputRef={(el) => (customFieldTypeRefs.current[oldLength] = el)}
          placeholder="Field Type"
          optionList={options}
        />
      </div>
    );
    setCustomFields([...customFields, newInput]);
  };
  return (
    <>
      <CommonElementsOrg menuActive="Credentials" />
      <PageContentContainer>
        <MainContentContainer>
          <CustomMainContent
            contentTitle="New Credential Template"
            componentRight={saveTemplateBtn}
          >
            <div className="inputFields">
              <InputText
                placeholder="Credential Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <InputText
                placeholder="Credential Reference Code"
                required
                onChange={(e) => setReferenceCode(e.target.value)}
              />
              <Select
                placeholder="Credential Type"
                optionList={["License", "Certificate", "Ticket"]}
                required
                onChange={(e) => setCredentialType(e.target.value)}
              />
              <div className="durationInput">
                <InputText
                  placeholder="Duration"
                  onChange={(e) => setDurationTime(e.target.value)}
                />
                <Select
                  placeholder="Period"
                  optionList={["Day(s)", "Month(s)", "Year(s)"]}
                  onChange={(e) => setDurationPeriod(e.target.value)}
                />
              </div>
            </div>
            <Hr />
            <h2>Add Custom Fields</h2>
            <div className="addCustomFields">{customFields}</div>
            <div className="addFieldBtn">
              <Button
                btnColor={theme.mainColors.darkBlue}
                onClick={addCustomField}
              >
                + ANOTHER FIELD
              </Button>
            </div>
          </CustomMainContent>
        </MainContentContainer>
        <TangleHistory />
      </PageContentContainer>
    </>
  );
};

export default withTheme(NewCredential);
