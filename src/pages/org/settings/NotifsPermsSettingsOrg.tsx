import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Hr,
    H6,
    Button,
    SettingToggleSwitch
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
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 350px;
    hr:last-of-type {
        padding-bottom: 2rem;
    }
`;

const NotifsPermsSettingsOrg = ({theme}) => {
    const [notifSettings, setNotifSettings] = useState(
        {
            toggleAllNotifs: false,
            sysNotifs: false,
            newCredentialsNotifs: false,
            domainNotifs: false
        }
    );

    const [permSettings, setPermSettings] = useState(
        {
            toggleAllPerms: false,
            nfcPerm: false,
            cameraPerm: false,
            wifiPerm: false,
            filesFoldersPerm: false
        }
    );
    
    const notifSettingsHandler = (property: string) => {
        let newState = {...notifSettings};
        let newValue = !newState[property];
        newState[property] = newValue;
        if(property === 'toggleAllNotifs') {
            if(newValue === true) {
                newState.sysNotifs = true;
                newState.newCredentialsNotifs = true;
                newState.domainNotifs = true;
            }
            else if(newValue === false) {
                newState.sysNotifs = false;
                newState.newCredentialsNotifs = false;
                newState.domainNotifs = false;
            }
        }
        let notifSettingsProps = ['sysNotifs', 'newCredentialsNotifs', 'domainNotifs'];
        if(notifSettingsProps.every(setting => newState[setting] === true)) {
            newState.toggleAllNotifs = true;
        }
        else {
            newState.toggleAllNotifs = false;
        }
        setNotifSettings(newState);
    };

    const permSettingsHandler = (property: string) => {
        let newState = {...permSettings};
        let newValue = !newState[property];
        newState[property] = !newState[property];
        if(property === 'toggleAllPerms') {
            if(newValue === true) {
                newState.nfcPerm = true;
                newState.cameraPerm = true;
                newState.wifiPerm = true;
                newState.filesFoldersPerm = true;

            }
            else if(newValue === false) {
                newState.nfcPerm = false;
                newState.cameraPerm = false;
                newState.wifiPerm = false;
                newState.filesFoldersPerm = false;
            }
        }
        let permSettingsProps = ['nfcPerm', 'cameraPerm', 'wifiPerm', 'filesFoldersPerm'];
        if(permSettingsProps.every(setting => newState[setting] === true)) {
            newState.toggleAllPerms = true;
        }
        else {
            newState.toggleAllPerms = false;
        }
        setPermSettings(newState);
    };
    

    const saveSettingsBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE SETTINGS</Button>
    );
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent 
                    contentTitle="Notifications/Permissions" 
                    settingsActive="Notifications/Permissions"
                    componentRight={saveSettingsBtn}
                >
                <Left>
                    <H6>
                        Notifications
                    </H6>
                    <SettingToggleSwitch 
                        settingsObj={notifSettings} 
                        changeHandlerFunc={notifSettingsHandler}
                        settingName="Toggle All"
                        settingKey="toggleAllNotifs"
                    />
                    <Hr />
                    <SettingToggleSwitch 
                        settingsObj={notifSettings} 
                        changeHandlerFunc={notifSettingsHandler}
                        settingName="New Credentials"
                        settingKey="newCredentialsNotifs"
                    />
                    <Hr />
                    <SettingToggleSwitch
                        settingsObj={notifSettings} 
                        changeHandlerFunc={notifSettingsHandler}
                        settingName="Domain Notifications"
                        settingKey="domainNotifs"
                    />
                    <Hr />
                    <SettingToggleSwitch
                        settingsObj={notifSettings} 
                        changeHandlerFunc={notifSettingsHandler}
                        settingName="System Notifications"
                        settingKey="sysNotifs"
                    />
                    <Hr />
                </Left>
                <Right>
                    <H6>
                        Permissions
                    </H6>
                    <SettingToggleSwitch 
                        settingsObj={permSettings} 
                        changeHandlerFunc={permSettingsHandler}
                        settingName="Toggle All"
                        settingKey="toggleAllPerms"
                    />
                    <Hr />
                    <SettingToggleSwitch 
                        settingsObj={permSettings} 
                        changeHandlerFunc={permSettingsHandler}
                        settingName="Camera Permission"
                        settingKey="cameraPerm"
                    />
                    <Hr />
                    <SettingToggleSwitch
                        settingsObj={permSettings} 
                        changeHandlerFunc={permSettingsHandler}
                        settingName="NFC Permission"
                        settingKey="nfcPerm"
                    />
                    <Hr />
                    <SettingToggleSwitch
                        settingsObj={permSettings} 
                        changeHandlerFunc={permSettingsHandler}
                        settingName="WiFi Permission"
                        settingKey="wifiPerm"
                    />
                    <Hr />
                    <SettingToggleSwitch
                        settingsObj={permSettings} 
                        changeHandlerFunc={permSettingsHandler}
                        settingName="Files & Folders Permission"
                        settingKey="filesFoldersPerm"
                    />
                    <Hr />
                </Right>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    );
};

export default withTheme(NotifsPermsSettingsOrg)