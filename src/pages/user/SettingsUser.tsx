import {useState, useRef} from 'react'

import styled, { withTheme } from 'styled-components'
import {
    CommonElementsUser,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    Select,
    Hr,
    H6,
    SettingToggleSwitchTextLR,
    SettingToggleSwitchTextL
} from "../../components/ui"
import { useThemeUpdate } from '../../contexts/themeContext';

const CustomMainContent = styled(MainContent)`
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
    hr {
        margin: 1.5rem 0;
        &:last-of-type {
            padding-bottom: 2rem;
        }
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 350px;
    fieldset {
        margin: 0 auto;
    }
    .appThemeChanger {
        width: 80%;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        div {
            display: grid;
            place-items: center;
            font-family: 'Open Sans';
            font-weight: 600;
            color: ${props => props.theme.mainColors.black};
            font-size: 1.3rem;
        }
    }
`;  

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    max-width: 350px;
`;

const SettingsUser = ({theme}) => {
    const themeToggler = useThemeUpdate();
    const settingsRefs = useRef(null);
    settingsRefs.current = {
        sysLang: null,
        localTimeZone: null,
        dateTimeDisplayFormat: null,
    };

    const [settings, setSettings] = useState(
        {
            sysLang: null,
            localTimeZone: null,
            dateTimeDisplayFormat: null,
            toggleAllNotifs: false,
            sysNotifs: false,
            newCredentialsNotifs: false,
            domainNotifs: false,
            appTheme: theme.mode === 'light',
        }
    );
    
    const settingsHandler = (property: string, newValue: any) => {
        let newState = {...settings};
        newState[property] = newValue;
        if(property === 'toggleAllNotifs') {
            if(newValue === true) {
                newState['sysNotifs'] = true;
                newState['newCredentialsNotifs'] = true;
                newState['domainNotifs'] = true;
            }
            else if(newValue === false) {
                newState['sysNotifs'] = false;
                newState['newCredentialsNotifs'] = false;
                newState['domainNotifs'] = false;
            }
        }
        if(property === 'appTheme')
            themeToggler.toggle();
        let notifSettings = ['sysNotifs', 'newCredentialsNotifs', 'domainNotifs'];
        if(notifSettings.every(setting => newState[setting] === true)) {
            newState['toggleAllNotifs'] = true;
        }
        else {
            newState['toggleAllNotifs'] = false;
        }
        setSettings(newState);
    };

    const saveSettingsBtn = (
        <Button primary btnColor={theme.btnPriBg}>SAVE SETTINGS</Button>
    );
    return (
        <>
        <CommonElementsUser menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="Settings" componentRight={saveSettingsBtn}>
                    <Left>
                        <H6>
                            General
                        </H6>
                        <Select 
                            placeholder="Choose System Language" 
                            defaultValue='English' 
                            optionList={['English', 'German', 'Dutch']} 
                            inputRef={el => settingsRefs.current['sysLang'] = el} 
                            onChange={() => settingsHandler('sysLang', settingsRefs.current['sysLang'].value)} 
                        />
                        <Hr />
                        <Select 
                            placeholder="Local Time Zone" 
                            optionList={['Time Zone']} 
                            inputRef={el => settingsRefs.current['localTimeZone'] = el} 
                            onChange={() => settingsHandler('localTimeZone', settingsRefs.current['localTimeZone'].value)}  />
                        <Hr />
                        <Select 
                            placeholder="Time & Date Display Format" 
                            optionList={['Date Format']} 
                            inputRef={el => settingsRefs.current['dateTimeDisplayFormat'] = el} 
                            onChange={() => settingsHandler('dateTimeDisplayFormat', settingsRefs.current['dateTimeDisplayFormat'].value)} 
                        />
                        <Hr />
                        <H6>
                            Choose Application Theme
                        </H6>
                        <SettingToggleSwitchTextLR
                            settingsObj={settings}
                            settingKey='appTheme'
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.appTheme}
                            textL='DARK'
                            textR='LIGHT'
                        />
                        <Hr />
                    </Left>
                    <Right>
                        <H6>
                            Notifications
                        </H6>
                        <SettingToggleSwitchTextL 
                            settingsObj={settings} 
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.toggleAllNotifs}
                            settingName="Toggle All"
                            settingKey="toggleAllNotifs"
                        />
                        <Hr />
                        <SettingToggleSwitchTextL 
                            settingsObj={settings} 
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.newCredentialsNotifs}
                            settingName="New Credentials"
                            settingKey="newCredentialsNotifs"
                        />
                        <Hr />
                        <SettingToggleSwitchTextL 
                            settingsObj={settings} 
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.domainNotifs}
                            settingName="Domain Notifications"
                            settingKey="domainNotifs"
                        />
                        <Hr />
                        <SettingToggleSwitchTextL 
                            settingsObj={settings} 
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.sysNotifs}
                            settingName="System Notifications"
                            settingKey="sysNotifs"
                        />
                        <Hr />
                    </Right>
                </CustomMainContent>
            </MainContentContainer>
        </PageContentContainer>
        
        </>
    )
}

export default withTheme(SettingsUser)
