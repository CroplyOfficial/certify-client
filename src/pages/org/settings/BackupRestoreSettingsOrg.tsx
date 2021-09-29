import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    H6,
    Hr,
    Select,
    SettingToggleSwitchTextLR
} from "../../../components/ui";
import SelectBackupFilePopup from './SelectBackupFilePopup';
import RestoreWarningPopup from './RestoreWarningPopup';
import ConfirmPinForRestorePopup from './ConfirmPinForRestorePopup';

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
        font-family: 'Open Sans';
        font-weight: bold;
        font-size: 1rem;
        color: ${props => props.theme.settings.lastBackupDateColor};
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
const BackupRestoreSettingsOrg = ({theme}) => {
    const [selectBackupFilePopupVisible, setSelectBackupFilePopupVisible] = useState(false);
    /**
     * Function to show/hide the SelectBackupFilePopup component.
     */
    const toggleSelectBackupFilePopupVisible = () => {
        setSelectBackupFilePopupVisible(!selectBackupFilePopupVisible);
    }
    
    const [restoreWarningPopupVisible, setRestoreWarningPopupVisible] = useState(false);
    /**
     * Function to show/hide the RestoreWarningPopup component.
     */
    const toggleRestoreWarningPopupVisible = () => {
        setSelectBackupFilePopupVisible(false);
        setRestoreWarningPopupVisible(!restoreWarningPopupVisible);
    }

    const [confirmPinForRestorePopupVisible, setConfirmPinForRestorePopupVisible] = useState(false);
    /**
     * Function to show/hide the ConfirmPinForRestorePopup component.
     */
    const toggleConfirmPinForRestorePopupVisible = () => {
        setRestoreWarningPopupVisible(false);
        setConfirmPinForRestorePopupVisible(!confirmPinForRestorePopupVisible);
    }

    const [settings, setSettings] = useState(
        {
            lastBackupDate: '21:17:35 - 16/03/2021',
            autoBackupOn: false,
            autoBackupPeriod: 'Every 7 Days',
        }
    );

    /**
     * Function to handle change in settings triggered by the user.
     * @param {string} property - The key of the property to alter in the settings object.
     * @param {boolean} newValue - The new value to be assigned to the specified property.
     */
    const settingsHandler = (property: string, newValue: boolean) => {
        let newState = {...settings};
        newState[property] = newValue;
        setSettings(newState);
    }

    const saveSettingsBtn = (
        <Button primary btnColor={theme.btnPriBg} onClick={toggleSelectBackupFilePopupVisible}>SAVE SETTINGS</Button>
    );

    return (
        <>
        {
            selectBackupFilePopupVisible ?
            <SelectBackupFilePopup
                closePopupFunc={toggleSelectBackupFilePopupVisible}
                showRestoreWarningPopupFunc={toggleRestoreWarningPopupVisible}    
            />:
            ""
        }
        {
            restoreWarningPopupVisible ?
            <RestoreWarningPopup
                closePopupFunc={toggleRestoreWarningPopupVisible}
                showConfirmPinForRestorePopupFunc={toggleConfirmPinForRestorePopupVisible}
                goBackFunc={() => {
                        toggleRestoreWarningPopupVisible();
                        toggleSelectBackupFilePopupVisible();
                    }
                }
            />:
            ""
        }
        {
            confirmPinForRestorePopupVisible ?
            <ConfirmPinForRestorePopup
                closePopupFunc={toggleConfirmPinForRestorePopupVisible}
                goBackFunc={() => {
                        toggleConfirmPinForRestorePopupVisible();
                        toggleRestoreWarningPopupVisible();
                    }
                }
            />:
            ""
        }
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent 
                    contentTitle="Backup/Restore" 
                    settingsActive="Backup/Restore"
                    componentRight={saveSettingsBtn}
                >
                    <Left>
                        <H6>
                            Export Backup
                        </H6>
                        <Button primary btnColor={theme.btnPriBg}>SAVE BACKUP FILE</Button>
                        <Hr />
                        <H6>
                            Last Backup Date
                        </H6>
                        <div className="lastBackupDate">
                            {settings.lastBackupDate}
                        </div>
                        <Hr />

                    </Left>
                    <Right>
                        <H6>
                           Restore From Backup
                        </H6>
                        <Button btnColor={theme.btnSecBg} onClick={toggleSelectBackupFilePopupVisible}>UPLOAD BACKUP FILE</Button>
                        <Hr />
                        <H6>
                            Auto Backup
                        </H6>
                        <SettingToggleSwitchTextLR
                            settingsObj={settings}
                            settingKey='autoBackupOn'
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.autoBackupOn}
                            textL='OFF'
                            textR='ON'
                        />
                        <Select 
                            defaultValue={settings.autoBackupPeriod}
                            placeholder="Auto Backup Period"
                            optionList={["Every 7 Days", "Every 30 Days"]}
                        />
                        <Hr />
                    </Right>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(BackupRestoreSettingsOrg)
