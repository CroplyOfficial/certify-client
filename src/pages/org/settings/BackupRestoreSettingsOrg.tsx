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
        color: ${props => props.theme.mainColors.black};
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

const BackupRestoreSettings = ({theme}) => {
    const [selectBackupFilePopupVisible, setSelectBackupFilePopupVisible] = useState(false);
    const toggleSelectBackupFilePopupVisible = () => {
        setSelectBackupFilePopupVisible(!selectBackupFilePopupVisible);
    }
    
    const [restoreWarningPopupVisible, setRestoreWarningPopupVisible] = useState(false);
    const toggleRestoreWarningPopupVisible = () => {
        setSelectBackupFilePopupVisible(false);
        setRestoreWarningPopupVisible(!restoreWarningPopupVisible);
    }

    const [confirmPinForRestorePopupVisible, setConfirmPinForRestorePopupVisible] = useState(false);
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

    const settingsHandler = (property: string, newValue: any) => {
        let newState = {...settings};
        newState[property] = !newState[property];
        setSettings(newState);
    }

    const saveSettingsBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue} onClick={toggleSelectBackupFilePopupVisible}>SAVE SETTINGS</Button>
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
                        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE BACKUP FILE</Button>
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
                        <Button btnColor={theme.mainColors.darkBlue} onClick={toggleSelectBackupFilePopupVisible}>UPLOAD BACKUP FILE</Button>
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

export default withTheme(BackupRestoreSettings)
