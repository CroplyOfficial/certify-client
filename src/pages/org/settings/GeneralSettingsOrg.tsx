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
    ToggleSwitch
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
    .appThemeChanger, .sysNotifs {
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
    .sysNotifs {
        width: 60%;
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
                        <div className="appThemeChanger">
                            <div>
                                DARK
                            </div>
                            <div>
                                <ToggleSwitch
                                    bgColorOn={theme.mainColors.blue}
                                    bgColorOff='none'
                                    isOn={settings.generalSettings.appTheme}
                                    onToggle={() => {
                                            settingsHandler('appTheme', !settings.generalSettings.appTheme);
                                            themeToggler.toggle();

                                        }
                                    }
                                />
                            </div>
                            <div>
                                LIGHT
                            </div>
                        </div>
                        <Hr />
                        <H6>
                            System Notifications
                        </H6>
                        <div className="sysNotifs">
                            <div>
                                OFF
                            </div>
                            <div>
                                <ToggleSwitch
                                    bgColorOn={theme.mainColors.blue}
                                    bgColorOff='none'
                                    isOn={settings.notifSettings.sysNotifs}
                                    onToggle={() =>settingsHandler('sysNotifs', !settings.notifSettings.sysNotifs)}
                                />
                            </div>
                            <div>
                                ON
                            </div>
                        </div>
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
