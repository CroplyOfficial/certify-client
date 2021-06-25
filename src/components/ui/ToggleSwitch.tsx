// Credits: https://upmostly.com/tutorials/build-a-react-switch-toggle-component

import styled, {withTheme} from 'styled-components'

const SwitchButton = styled.span`
    content: '';
    position: absolute;
    left: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: 0.2s;
    background: ${props => props.theme.pastelColors.grey};
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 4rem;
    height: 2rem;
    background: ${props => props.isOn ? props.colorOn : props.colorOff};
    border-radius: 30px;
    position: relative;
    transition: background-color .2s;
    border: 4px solid ${props => props.theme.mainColors.grey};
    &:active ${SwitchButton} {
        width: 2.5rem;
    }
`;

const SwitchCheckbox = styled.input.attrs({ type: 'checkbox' })`
    height: 0;
    width: 0;
    visibility: hidden;
    &:checked + span {
        left: 100%;
        transform: translateX(-100%);
        background: #fff;
    }
`;

const ToggleSwitch = ({ isOn, onToggle, colorOn, colorOff }) => {
    return (
        <>  
            <Label 
                isOn={isOn}
                colorOn={colorOn}
                colorOff={colorOff}
            >
                <SwitchCheckbox
                    checked={isOn}
                    onChange={onToggle}
                />
                <SwitchButton />
            </Label>
        </>
    );
};

export default withTheme(ToggleSwitch);