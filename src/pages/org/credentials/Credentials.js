import { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import {
  CommonElementsOrg,
  TangleHistory,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Table,
  Checkbox,
  Button,
  ShowOptions,
} from "../../../components/ui";
import DuplicateCredentialPopup from "./DuplicateCredentialPopup";
import IssueCredentialPopup from "./IssueCredentialPopup";
import { Filters } from "../../../components/assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { getCredentialTemplates } from "../../../actions/credTemplateActions";

const EditColHeading = styled.div`
  margin-top: 0.5rem;
`;

/**
 * Returns the Credentials component which is the page that
 * displays the credentials of the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component. 
 * @returns {ReactElement} - The Credentials component.
 */
const Credentials = ({ theme }) => {
  const dispatch = useDispatch();

  const credentialTemplatesMeta = useSelector(
    (state) => state.credentialTemplates
  );

  console.log(credentialTemplatesMeta);

  const { templates, loading } = credentialTemplatesMeta;

  const [checkboxState, setCheckboxState] = useState(
    templates ? [templates.map((a) => false)] : []
  ); // sets initial value of all elements of the state to false
  /**
   * Handles what happens when a checkbox is clicked.
   * @param {Event} e - The onClick event which is fired when a checkbox is clicked.
   */
  const handleCheckboxChange = (e) => {
    let parentTrTag = e.target.parentElement.parentElement;
    let index = parentTrTag.key;
    let newState = [...checkboxState];
    newState[index] = !newState[index];
    setCheckboxState((newState) => newState);
  };

  let rows = [];
  let rowIndex = 1;

  let credentialNames = [];

  const [credentialToDuplicate, setCredentialToDuplicate] = useState({});

  const [duplicateCredentialPopupVisible, setDuplicateCredentialPopupVisible] =
    useState(false);
  /**
   * Causes the DuplicateCredentialPopup component to become visible
   * and specifies the credential that is to be duplicated.
   * @param {Object} credential - The credential that is to be duplicated.
   */
  const toggleDuplicateCredentialPopup = (credential) => {
    setDuplicateCredentialPopupVisible(!duplicateCredentialPopupVisible);
    setCredentialToDuplicate(credential);
  };

  const [issueCredentialPopupVisible, setIssueCredentialPopupVisible] =
    useState(false);
  /**
   * Causes the IssueCredentialPopup component to become visible.
   */
  const toggleIssueCredentialPopup = () => {
    setIssueCredentialPopupVisible(!issueCredentialPopupVisible);
  };

  useEffect(() => {
    dispatch(getCredentialTemplates());
  }, []);

  if (!loading && templates && templates.length > 0)
    for (let template of templates) {
      credentialNames.push(template.name);
      const created = new Date(template.createdAt);
      const dateString = created.toString().substring(4, 21);
      rows.push(
        <tr key={rowIndex}>
          <td>
            <Checkbox
              checked={checkboxState[rowIndex]}
              onChange={handleCheckboxChange}
            />
          </td>
          <td>{template.name}</td>
          <td>{template.referenceCode}</td>
          <td>{dateString}</td>
          <td>{template.credentialType}</td>
          <td>
            {template.status === "ACTIVE" ? (
              <span style={{ color: theme.mainColors.green }}>
                {template.status}
              </span>
            ) : template.status === "INACTIVE" ? (
              <span style={{ color: theme.mainColors.red }}>
                {template.status}
              </span>
            ) : (
              <span style={{ color: theme.mainColors.yellow }}>
                {template.status}
              </span>
            )}
          </td>
          <td>
            <ShowOptions
              options={{
                Duplicate: () => toggleDuplicateCredentialPopup(template),
              }}
              optionListStyling={`margin-left: -4rem`}
            />
          </td>
        </tr>
      );
      rowIndex++;
    }
  const buttons = (
    <>
      <Button
        btnColor={theme.btnPriBg}
        onClick={() => (window.location = "/org/credentials/new")}
      >
        + NEW CREDENTIAL
      </Button>
      <Button
        primary
        btnColor={theme.btnSecBg}
        onClick={toggleIssueCredentialPopup}
      >
        + ISSUE CREDENTIAL
      </Button>
    </>
  );

  return (
    <>
      <CommonElementsOrg menuActive="Credentials" />
      <PageContentContainer>
        <MainContentContainer>
          <MainContent
            tablePage
            contentTitle="Credentials"
            componentRight={buttons}
          >
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Name</td>
                  <td>Reference</td>
                  <td>Created</td>
                  <td>Type</td>
                  <td>Status</td>
                  <td>
                    <EditColHeading>
                      <Filters width="1.5rem" fill={theme.table.filters} />
                    </EditColHeading>
                  </td>
                </tr>
                {rows}
              </tbody>
            </Table>
          </MainContent>
        </MainContentContainer>
        <TangleHistory />
      </PageContentContainer>
      {duplicateCredentialPopupVisible ? (
        <DuplicateCredentialPopup
          closePopupFunc={toggleDuplicateCredentialPopup}
          credential={credentialToDuplicate}
        />
      ) : null}
      {issueCredentialPopupVisible ? (
        <IssueCredentialPopup
          closePopupFunc={toggleIssueCredentialPopup}
          credentialNames={credentialNames}
        />
      ) : null}
    </>
  );
};

export default withTheme(Credentials);
