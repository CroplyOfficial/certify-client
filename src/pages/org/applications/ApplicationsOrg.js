import { useState, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { ViewApplicationModal } from "./modal/viewapplication.modal";
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
import { useDispatch, useSelector } from "react-redux";
import { getApplications } from "../../../actions/applicationActions";
import { Filters } from "../../../components/assets/icons";

const EditColHeading = styled.div`
  margin-top: 0.5rem;
`;

/**
 * Returns the ApplicationsOrg component which is the page that
 * displays the applications of the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component. 
 * @returns {ReactElement} - The ApplicationsOrg component.
 */
const ApplicationsOrg = ({ theme }) => {
  const [visible, setVisible] = useState(false);
  const [appId, setAppId] = useState();

  const sidebarCollapsed = useSelector((state) => state.sidebarCollapsed);

  const applicationsMeta = useSelector((state) => state.getApplications);
  const { error, loading, applications } = applicationsMeta;

  const [checkboxState, setCheckboxState] = useState(
    !loading && !error && applications ? [applications.map((a) => false)] : []
  ); // sets initial value of all elements of the state to false
  const [rows, setRows] = useState([]);

  const dispatch = useDispatch();

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

  const handleCheckApplication = (id) => {
    setAppId(id);
    setVisible(true);
  };

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  useEffect(() => {
    if (!error && applications) {
      const appRows = applications.map((application, rowIndex) => {
        const appDate = new Date(application.createdAt).toLocaleDateString();
        return (
          <tr key={rowIndex}>
            <td>
              <Checkbox
                checked={checkboxState[rowIndex]}
                onChange={handleCheckboxChange}
              />
            </td>
            <td>{application.template.name}</td>
            <td>{application._id}</td>
            <td>{appDate}</td>
            <td>{application.template.credentialType}</td>
            <td>
              {application.status === "APPROVED" ? (
                <span style={{ color: theme.mainColors.green }}>
                  {application.status}
                </span>
              ) : application.status === "DECLINED" ? (
                <span style={{ color: theme.mainColors.red }}>
                  {application.status}
                </span>
              ) : (
                <span style={{ color: theme.mainColors.yellow }}>
                  {application.status}
                </span>
              )}
            </td>
            <td>
              <ShowOptions
                options={{
                  View: () => {
                    handleCheckApplication(application._id);
                  },
                }}
                optionListStyling={`margin-left: -4rem`}
              />
            </td>
          </tr>
        );
      });
      setRows(appRows);
    }
  }, [applications]);

  const newAppBtn = (
    <Button
      primary
      btnColor={theme.btnPriBg}
      onClick={() => (window.location.href = "/org/applications/new")}
    >
      + NEW APPLICATION
    </Button>
  );
  return (
    <>
      <ViewApplicationModal
        visible={visible}
        setVisible={setVisible}
        applicationId={appId}
      />
      <CommonElementsOrg menuActive="Applications" />
      <PageContentContainer>
        <MainContentContainer>
          <MainContent
            tablePage
            contentTitle="Applications"
            componentRight={newAppBtn}
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
                {!loading && rows}
              </tbody>
            </Table>
          </MainContent>
        </MainContentContainer>
        <TangleHistory />
      </PageContentContainer>
    </>
  );
};

export default withTheme(ApplicationsOrg);
