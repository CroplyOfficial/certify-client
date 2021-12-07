import styled, {withTheme} from 'styled-components';
import {
    ToggleSwitch
} from ".";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    div:nth-of-type(1) {
        display: grid;
        place-items: center;
        font-family: 'Open Sans';
        font-weight: 600;
        color: ${props => props.isOn ? props.theme.settingToggleSwitchL.textOn : props.theme.settingToggleSwitchL.textOff};
        font-size: 1rem;
        margin-right: 1rem;
    }
`;

/**
 * Returns the SettingToggleSwitchTextL component. This component has text on the left side of a ToggleSwitch component.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component.
 * @param {Object} settingsObj - The object containing the settings.
 * @param {Function} changeHandlerFunc - The function to be executed when a particular setting is changed.
 * @param {string} settingKey - The key of the setting in the settingsObj object.
 * @param {string} settingName - The text on the left of the ToggleSwitch component.
 * @param {any} [newSettingValue] - The new value to assign to the setting in the settingsObj if the changeHandlerFunc doesn't handle it by default. Refer to the SettingsUser component for a bettr understanding of the usage of this prop. 
 * @returns {ReactElement} - The SettingToggleSwitchTextL component.
 */
const SettingToggleSwitchTextL = ({theme, settingsObj, changeHandlerFunc, settingKey, settingName, newSettingValue=undefined}) => {
    return (
        <Container
            isOn={settingsObj[settingKey]}
        >
            <div>
                {settingName}
            </div>
            <div>
                <ToggleSwitch
                    bgColorOn={theme.mainColors.blue}
                    bgColorOff='none'
                    isOn={settingsObj[settingKey]}
                    onToggle={() => {
                            // Checks if the onClick prop has a value or no
                            if(typeof newSettingValue !== "undefined")
                                changeHandlerFunc(settingKey, newSettingValue);
                            else
                                changeHandlerFunc(settingKey);
                        }
                    }
                />
            </div>
        </Container>
    );
};

export default withTheme(SettingToggleSwitchTextL);
