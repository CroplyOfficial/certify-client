import { ReactElement } from 'react';
import styled, {withTheme} from 'styled-components';
import {
    ToggleSwitch
} from ".";

const Container = styled.div`
    display: flex;
    div {
        display: grid;
        place-items: center;
        font-family: 'Open Sans';
        font-weight: 600;
        font-size: 1.1rem;
        &:nth-of-type(2) {
            margin: 0 3rem;
        }
    }
`;

const TextLeft = styled.div`
    color: ${props => props.isOn ? props.theme.mainColors.grey : props.theme.mainColors.black};
`;

const TextRight = styled.div`
    color: ${props => props.isOn ? props.theme.mainColors.black : props.theme.mainColors.grey};
`;


/**
 * Returns the SettingToggleSwitchTextLR component. This component has text on either side of a ToggleSwitch component which is in the center.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {Object} settingsObj - The object containing the settings.
 * @param {Function} changeHandlerFunc - The function to be executed when a particular setting is changed.
 * @param {string} settingKey - The key of the setting in the settingsObj object.
 * @param {string} textL - The text on the left of the ToggleSwitch component.
 * @param {string} textR - The text on the right of the ToggleSwitch component.
 * @param {any} [newSettingValue] - The new value to assign to the setting in the settingsObj if the changeHandlerFunc doesn't handle it by default. Refer to the SettingsUser component for a bettr understanding of the usage of this prop. 
 * @returns {ReactElement} - The SettingToggleSwitchTextLR component.
 */
const SettingToggleSwitchTextLR = ({theme, settingsObj, changeHandlerFunc, settingKey, textL, textR, newSettingValue=undefined}) => {
    return (
        <Container>
            <TextLeft 
                isOn={settingsObj[settingKey]}
            >
                {textL}
            </TextLeft>
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
            <TextRight
                isOn={settingsObj[settingKey]}
            >
                {textR}
            </TextRight>
        </Container>
    );
};

export default withTheme(SettingToggleSwitchTextLR);
