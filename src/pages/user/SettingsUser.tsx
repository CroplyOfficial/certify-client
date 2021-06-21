import {useState, useRef} from 'react'

import styled, { withTheme } from 'styled-components'
import {
    MenuUser, 
    PageTop,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    Select,
    Hr,
    ToggleSwitch
} from "../../components/ui"
import { useThemeUpdate } from '../../contexts/themeContext';

const CustomMainContent = styled(MainContent)`
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
    hr {
        margin: 1.5rem 0;
    }
    h6 {
        margin-bottom: 1.5rem;
        margin-top: 0;
        font-family: "Open Sans";
        font-size: 1rem;
        color: ${props => props.theme.mainColors.darkBlue};
    }
    .toggleSwitchContainer {
        .toggleSwitch {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 1rem;
            margin: 0 auto;
            text-align:center;
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
        margin: 0 auto;
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
    .toggleSwitch {
        display: flex;
        justify-content: space-between;
        div:nth-of-type(1) {
            display: grid;
            place-items: center;
            font-family: 'Open Sans';
            font-weight: 600;
            color: ${props => props.theme.mainColors.black};
            font-size: 1.2rem;
            margin-right: 1rem;
        }
    }
`;

const SettingsUser = ({theme}) => {
    const themeToggler = useThemeUpdate();
    console.log(themeToggler);  
    const inputRefs = useRef(null);
    inputRefs.current = {
        sysLang: null,
        localTimeZone: null,
        dateTimeDisplayFormat: null,
    };

    const [inputValues, setInputValues] = useState(
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
    
    const stateChanger = (property: string, newValue: any) => {
        let newState = {...inputValues};
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
        let notifSettings = ['sysNotifs', 'newCredentialsNotifs', 'domainNotifs'];
        if(notifSettings.every(setting => newState[setting] === true)) {
            newState['toggleAllNotifs'] = true;
        }
        else {
            newState['toggleAllNotifs'] = false;
        }
        setInputValues(newState);
    };

    const saveSettingsBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE SETTINGS</Button>
    );
    return (
        <>
        <MenuUser active="Settings" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="Settings" componentRight={saveSettingsBtn}>
                    <Left>
                        <h6>
                            General
                        </h6>
                        <Select 
                            placeholder="Choose System Language" 
                            defaultValue='English' 
                            optionList={['English', 'German', 'Dutch']} 
                            inputRef={el => inputRefs.current['sysLang'] = el} 
                            onChange={() => stateChanger('sysLang', inputRefs.current['sysLang'].value)} 
                        />
                        <Hr />
                        <Select 
                            placeholder="Local Time Zone" 
                            optionList={['Time Zone']} 
                            inputRef={el => inputRefs.current['localTimeZone'] = el} 
                            onChange={() => stateChanger('localTimeZone', inputRefs.current['localTimeZone'].value)}  />
                        <Hr />
                        <Select 
                            placeholder="Time & Date Display Format" 
                            optionList={['Date Format']} 
                            inputRef={el => inputRefs.current['dateTimeDisplayFormat'] = el} 
                            onChange={() => stateChanger('dateTimeDisplayFormat', inputRefs.current['dateTimeDisplayFormat'].value)} 
                        />
                        <Hr />
                        <div className="toggleSwitchContainer">
                            <h6>
                                Choose Application Theme
                            </h6>
                            <div className="toggleSwitch appThemeChanger">
                                <div>
                                    DARK
                                </div>
                                <div>
                                    <ToggleSwitch
                                        colorOn={theme.mainColors.blue}
                                        colorOff='none'
                                        isOn={inputValues.appTheme}
                                        onToggle={() => {
                                                stateChanger('appTheme', !inputValues.appTheme);
                                                themeToggler.toggle();

                                            }
                                        }
                                    />
                                </div>

                                <div>
                                    LIGHT
                                </div>
                            </div>
                        </div>
                    </Left>
                    <Right>
                        <h6>
                            Notifications
                        </h6>
                        <div className="toggleSwitch">
                            <div>
                                Toggle All
                            </div>
                            <div>
                                    <ToggleSwitch
                                        colorOn={theme.mainColors.blue}
                                        colorOff='none'
                                        isOn={inputValues.toggleAllNotifs}
                                        onToggle={() => stateChanger('toggleAllNotifs', !inputValues.toggleAllNotifs)}
                                    />
                                </div>
                        </div>
                        <Hr />
                        <div className="toggleSwitch">
                            <div>
                                New Credentials
                            </div>
                            <div>
                                    <ToggleSwitch
                                        colorOn={theme.mainColors.blue}
                                        colorOff='none'
                                        isOn={inputValues.newCredentialsNotifs}
                                        onToggle={() => stateChanger('newCredentialsNotifs', !inputValues.newCredentialsNotifs)}
                                    />
                                </div>
                        </div>
                        <Hr />
                        <div className="toggleSwitch">
                            <div>
                                Domain Notifications
                            </div>
                            <div>
                                    <ToggleSwitch
                                        colorOn={theme.mainColors.blue}
                                        colorOff='none'
                                        isOn={inputValues.domainNotifs}
                                        onToggle={() => stateChanger('domainNotifs', !inputValues.domainNotifs)}
                                    />
                                </div>
                        </div>
                        <Hr />
                        <div className="toggleSwitch">
                            <div>
                                System Notifications
                            </div>
                            <div>
                                    <ToggleSwitch
                                        colorOn={theme.mainColors.blue}
                                        colorOff='none'
                                        isOn={inputValues.sysNotifs}
                                        onToggle={() => stateChanger('sysNotifs', !inputValues.sysNotifs)}
                                    />
                                </div>
                        </div>
                        <Hr />
                    </Right>
                </CustomMainContent>
            </MainContentContainer>
        </PageContentContainer>
        
        </>
    )
}

export default withTheme(SettingsUser)
