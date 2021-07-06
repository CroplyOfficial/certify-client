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
        color: ${props => props.theme.mainColors.black};
        font-size: 1.2rem;
        margin-right: 1rem;
    }
`;

const SettingToggleSwitch = ({theme, settingsObj, changeHandlerFunc, settingKey, settingName, newSettingValue=undefined}) => {
    return (
        <Container>
            <div>
                {settingName}
            </div>
            <div>
                <ToggleSwitch
                    bgColorOn={theme.mainColors.blue}
                    bgColorOff='none'
                    isOn={settingsObj[settingKey]}
                    onToggle={() => {
                            if(newSettingValue)
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
