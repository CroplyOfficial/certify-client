import {useState, useRef} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    H6,
    Hr,
    Button,
    Select,
    ToggleSwitch,
    SettingToggleSwitchTextL,
    SettingToggleSwitchTextLR
} from "../../../components/ui"
import { useThemeUpdate } from '../../../contexts/themeContext';
import {
    ChevronRight
} from "../../../components/assets/icons";

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
    
    .linkToNotifSettingsDiv {
        font-family: 'Open Sans';
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.mainColors.black};
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        margin-top: 1rem;
        div {
            display: grid;
            place-items: center;
        }
    }
`;

const GeneralSettingsOrg = ({theme}) => {
    const themeToggler = useThemeUpdate();

    const settingsRefs = useRef(null);
    settingsRefs.current = {
        sysLang: null,
        localTimeZone: null,
        dateTimeDisplayFormat: null,
    };

    const [settings, setSettings] = useState(
        {
            generalSettings: {
                sysLang: null,
                localTimeZone: null,
                dateTimeDisplayFormat: null,
                appTheme: theme.mode === 'light',
            },
            notifSettings: {
                sysNotifs: false,
            }
        }
    );

    const settingsHandler = (property: string, newValue: any) => {
        let newState = {...settings}; 
        if(property === "sysNotifs")
            newState.notifSettings[property] = newValue;
        else
            newState.generalSettings[property] = newValue;
        
        if(property === 'appTheme')
            themeToggler.toggle();
        setSettings(newState);
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
                    contentTitle="General Settings" 
                    settingsActive="General"
                    componentRight={saveSettingsBtn}    
                >
                <Left>
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
                    </Left>
                    <Right>
                        <H6>
                            Choose Application Theme
                        </H6>
                        <SettingToggleSwitchTextLR
                            settingsObj={settings.generalSettings}
                            settingKey='appTheme'
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.generalSettings.appTheme}
                            textL='DARK'
                            textR='LIGHT'
                        />
                        <Hr />
                        <H6>
                            System Notifications
                        </H6>
                        <SettingToggleSwitchTextLR
                            settingsObj={settings.notifSettings}
                            settingKey='sysNotifs'
                            changeHandlerFunc={settingsHandler}
                            newSettingValue={!settings.notifSettings.sysNotifs}
                            textL='OFF'
                            textR='ON'
                        />
                        <div className="linkToNotifSettingsDiv">
                            <div>
                                more
                            </div>
                            <div>
                                <ChevronRight 
                                    width="1.3rem" 
                                    fill={theme.mainColors.darkBlue}
                                    onClick={() => window.location.href = "/org/settings/notifsPerms"}
                                />
                            </div>                            
                            
                            
                        </div>
                        <Hr />
                    </Right>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(GeneralSettingsOrg)
