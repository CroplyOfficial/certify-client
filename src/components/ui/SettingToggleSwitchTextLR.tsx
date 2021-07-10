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
