// Credits: https://upmostly.com/tutorials/build-a-react-switch-toggle-component

import styled, {withTheme} from 'styled-components'

const SwitchButton = styled.span`
    content: '';
    position: absolute;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    transition: 0.2s;
    background: ${props => props.btnColorOff ? props.btnColorOff : props.theme.pastelColors.grey};
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 3rem;
    height: 1.5rem;
    background: ${props => props.isOn ? props.bgColorOn : props.bgColorOff};
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
    &:checked + ${SwitchButton} {
        left: 100%;
        transform: translateX(-100%);
        background: ${props => props.btnColorOn ? props.btnColorOn : '#fff'};
    }
`;

const ToggleSwitch = ({ isOn, onToggle, bgColorOn, bgColorOff, btnColorOn, btnColorOff }) => {
    return (
        <>  
            <Label 
                isOn={isOn}
                bgColorOn={bgColorOn}
                bgColorOff={bgColorOff}
            >
                <SwitchCheckbox
                    checked={isOn}
                    onChange={onToggle}
                    btnColorOn={btnColorOn}
                />
                <SwitchButton 
                    btnColorOff={btnColorOff}
                />
            </Label>
        </>
    );
};

export default withTheme(ToggleSwitch);