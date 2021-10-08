import { useState } from "react";
import styled, { withTheme } from "styled-components";
import {
  CommonElementsOrg,
  TangleHistory,
  PageContentContainer,
  MainContentContainer,
  MainContent,
  Button,
} from "../../../components/ui";

const CustomMainContent = styled(MainContent)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  hr {
    margin: 1.5rem 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 350px;
  .lastBackupDate {
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme.settings.lastBackupDateColor};
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 350px;
  fieldset {
    margin-top: 2rem;
  }
  hr:last-of-type {
    padding-bottom: 2rem;
  }
`;

/**
 * Returns the BackupRestoreSettingsOrg component which is the page to
 * manage the backup/restore settings for the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component.
 * @returns {ReactElement} - The BackupRestoreSettingsOrg component.
 */
const OrgUserSettings = ({ theme }) => {
  /**
   * Function to handle change in settings triggered by the user.
   * @param {string} property - The key of the property to alter in the settings object.
   * @param {boolean} newValue - The new value to be assigned to the specified property.
   */
  const saveSettingsBtn = (
    <Button primary btnColor={theme.btnPriBg} onClick={() => {}}>
      SAVE SETTINGS
    </Button>
  );

  return (
    <>
      <CommonElementsOrg menuActive="Settings" />
      <PageContentContainer>
        <MainContentContainer>
          <CustomMainContent
            contentTitle="Users"
            settingsActive="Users"
            componentRight={saveSettingsBtn}
          >
            <Left></Left>
            <Right></Right>
          </CustomMainContent>
        </MainContentContainer>
        <TangleHistory />
      </PageContentContainer>
    </>
  );
};

export default withTheme(OrgUserSettings);
