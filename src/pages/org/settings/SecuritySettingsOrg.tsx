import {useState, useRef} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    Select,
    InputConfidInfo,
    InputPIN,
    H6,
    Hr,
    SettingsNavbar
} from "../../../components/ui";


const CustomMainContent = styled(MainContent)`
    display: flex;
    justify-content: space-between;
    hr {
        margin: 1.5rem 0;
    }
    button {
        max-width: 100%;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 350px;
    height: fit-content;
    fieldset {
        margin-bottom: 1rem;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 350px;
    height: fit-content;
    hr:last-of-type {
        padding-bottom: 2rem;
    }
    div {
        font-family: 'Open Sans';
        font-size: 1rem;
        color: ${props => props.theme.mainColors.blue};
        &:nth-of-type(1) {
            margin-bottom: 1.5rem;
        }
        &:nth-of-type(3) {
            margin: 1.5rem 0;
        }
    }
`;


const SecuritySettingsOrg = ({theme}) => {
    const oldPasswordRef = useRef(null);
    const oldPasswordErr = useState('');

    const newPasswordRef = useRef(null);
    const newPasswordErr = useState('');

    const confirmNewPasswordRef = useRef(null);
    const confirmNewPasswordErr = useState('');

    const oldPinRef = useRef(null);
    const oldPinErr = useState('');

    const newPinRef = useRef(null);
    const newPinErr = useState('');

    const confirmNewPinRef = useRef(null);
    const confirmNewPinErr = useState('');

    const [settings, setSettings] = useState(
        {
            automaticLock: '5 minutes',
        }
    )

    const saveSettingsBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE SETTINGS</Button>
    );
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent 
                    contentTitle="Security Settings" 
                    settingsActive="Security"
                    componentRight={saveSettingsBtn}
                >
                <Left>
                    <H6>
                        Change Password
                    </H6>
                    <InputConfidInfo inputRef={oldPasswordRef} err={oldPasswordErr} placeholder="Old Password" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} showHideColor={theme.pastelColors.grey} required />
                    <InputConfidInfo inputRef={newPasswordRef} err={newPasswordErr} placeholder="New Password" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} showHideColor={theme.pastelColors.grey} strengthMeter required />
                    <InputConfidInfo inputRef={confirmNewPasswordRef} err={confirmNewPasswordErr} placeholder="Confirm Password" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} showHideColor={theme.pastelColors.grey} required />
                    <Button
                        primary
                        btnColor={theme.mainColors.darkBlue}
                    >
                        SAVE NEW PASSWORD
                    </Button>
                    <Hr />
                    <H6>
                        Change PIN Code
                    </H6>
                    <InputPIN inputRef={oldPinRef} err={oldPinErr} placeholder="Old PIN" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} deleteDigitColor={theme.mainColors.black} required />
                    <InputPIN inputRef={newPinRef} err={newPinErr} placeholder="New PIN" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} deleteDigitColor={theme.mainColors.black} required />
                    <InputPIN inputRef={confirmNewPinRef} err={confirmNewPinErr} placeholder="Confirm New PIN" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} deleteDigitColor={theme.mainColors.black} required />
                    <Button
                        primary
                        btnColor={theme.mainColors.darkBlue}
                    >
                        SAVE NEW PIN CODE
                    </Button>
                    <Hr />
                </Left>
                <Right>
                    <H6>
                        Automatic Lock
                    </H6>
                    <div>
                        By continuing to delete your profile you will
                        remove all records, profiles, identities, and 
                        associations with this application.
                    </div>
                    <Select
                        defaultValue={settings.automaticLock}
                        placeholder="Automatic Lock"
                        optionList={['5 minutes', '10 minutes', '1 hour']}
                    />
                    <Hr />
                    <H6>
                        Delete Identity Profile
                    </H6>
                    <div>
                        By continuing to delete your profile you will
                        remove all records, profiles, identities, and 
                        associations with this application.
                    </div>
                    <div>
                        Ensure you have a back-up saved.
                    </div>
                    <Button
                        primary
                        btnColor={theme.mainColors.red}
                    >
                        DELETE PROFILE
                    </Button>
                    <Hr />
                </Right>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(SecuritySettingsOrg)
