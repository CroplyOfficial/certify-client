import { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled, { withTheme } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ICredentialTemplate } from "../../../interfaces/credTemplate.interface";
import { useHistory } from "react-router-dom";
import {
  CommonElementsUser,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Button,
  Select,
  Hr,
} from "../../../components/ui";

const CustomMainContent = styled(MainContent)`
  display: grid;
  grid-template-rows: repeat(3, auto);
  fieldset {
    width: 100%;
  }
  hr {
    width: 100%;
    margin-bottom: 3.3rem;
  }
`;

const Div1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`;

const Div2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, auto);
  grid-gap: 2rem;
  padding-bottom: 2rem;
  fieldset:nth-of-type(odd) {
    grid-column: 1 / span 1;
  }
  fieldset:nth-of-type(even) {
    grid-column: 2 / span 1;
  }
`;

const NewApplicationUser = ({ theme }) => {
  const userInputRefs = useRef({});
  const history = useHistory();

  const [templates, setTemplates] = useState<any[]>();
  const [applicationNames, setApplicationNames] = useState<any[]>();
  const [template, setTemplate] = useState<ICredentialTemplate>();

  userInputRefs.current = {
    appType: null,
    appName: null,
    firstName: null,
    lastName: null,
    businessName: null,
    businessType: null,
    address1: null,
    address2: null,
    city: null,
    state: null,
    postalCode: null,
    country: null,
    businessRegNo: null,
    regAuthority: null,
  };

  const userInfoMeta = useSelector((state: RootState) => state.userLogin);
  const { userInfo }: any = userInfoMeta;

  const handleTypeChange = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `/api/cred-templates?credentialType=${e.target.value}`,
      config
    );
    setTemplates(data);
  };

  const handleCredChange = async (e) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `/api/cred-templates/find?name=${e.target.value}`,
      config
    );
    setTemplate(data);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    for (let i = 0; i < e.target.children.length; i++) {
      const elem = e.target.children[i];
      if (elem.placeholder && elem.value) {
        data[elem.placeholder] = elem.value;
      }
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const newApplication = await axios.post(
      "/api/applications",
      { template: template._id, data },
      config
    );
    if (newApplication.data) {
      history.push("/user/applications");
    }
  };

  useEffect(() => {
    if (!templates || templates.length === 0) return;
    const names = templates.map((temp) => temp.name);
    setApplicationNames(names);
  }, [templates]);

  const submitAppBtn = (
    <Button primary btnColor={theme.btnPriBg}>
      SUBMIT APPLICATION
    </Button>
  );
  return (
    <>
      <CommonElementsUser menuActive="Applications" />
      <PageContentContainer>
        <MainContentContainer>
          <CustomMainContent
            contentTitle="New Application"
            componentRight={<div></div>}
          >
            <Div1>
              <Select
                inputRef={(el) => (userInputRefs.current["appType"] = el)}
                placeholder="Application Type"
                optionList={["License", "Certificate", "Ticket"]}
                onChange={handleTypeChange}
              />
              {templates && applicationNames && (
                <Select
                  placeholder="Application Name"
                  optionList={applicationNames}
                  onChange={handleCredChange}
                />
              )}
            </Div1>
            <Hr />
            <Div2>
              <form onSubmit={handleFormSubmit} id="application-form">
                {template &&
                  template.fields.map((field, index) => (
                    <input
                      name={String(field.label)}
                      type={field.type}
                      placeholder={String(field.label)}
                      required
                      style={{
                        width: "100%",
                        height: "3rem",
                        padding: "0 2.5rem 0.2rem 1rem",
                        borderRadius: "30px",
                        boxShadow: "none",
                        border: "1px solid #E0E0E0",
                        boxSizing: "border-box",
                        fontSize: "1rem",
                        outline: "none",
                        color: "#353535",
                        margin: "10px 0",
                        marginBottom: `${
                          template.fields.length - 1 === index ? "40" : "10"
                        }px`,
                      }}
                    />
                  ))}
                <div>
                  {template && template.fields && (
                    <Button primary btnColor={theme.btnPriBg}>
                      SUBMIT APPLICATION
                    </Button>
                  )}
                </div>
              </form>
            </Div2>
          </CustomMainContent>
        </MainContentContainer>
      </PageContentContainer>
    </>
  );
};

export default withTheme(NewApplicationUser);
