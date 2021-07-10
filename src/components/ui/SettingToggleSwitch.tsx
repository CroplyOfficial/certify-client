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
        color: ${props => props.isOn ? props.theme.mainColors.black : props.theme.mainColors.grey};
        font-size: 1rem;
        margin-right: 1rem;
    }
`;

const SettingToggleSwitch = ({theme, settingsObj, changeHandlerFunc, settingKey, settingName, newSettingValue=undefined}) => {
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

export default withTheme(SettingToggleSwitch);
