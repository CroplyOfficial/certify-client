import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    ToggleSwitch
} from "../../../../components/ui"
import ConfirmationPopup from './ConfirmationPopup';

const ChooseMethod = styled.div`
    font-family: 'Open Sans';
    display: grid;
    place-items: center;
    .inactive {
        color: ${props => props.theme.identityScan.inactive};
    }
    .active {
        color: ${props => props.theme.identityScan.active};
    }
    .switch {
        display: flex;
        justify-content: center;
        justify-items: center;
        div {
            display: grid;
            place-items: center;
            margin: 0 1rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
`;
const ScanCode = styled.div`
    display: grid;
    place-items: center;
    margin: 3.5rem 0;
`;

const Instructions = styled.div`
    font-family: 'Open Sans';
    font-size: 1.3rem;
    font-weight: 600; 
    color: ${props => props.theme.identityScan.color};
    display: grid;
    place-items: center;
`;

/**
 * Returns the IdentityScan component which is the page used to scan
 * credentials.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component. 
 * @returns {ReactElement} - The IdentityScan component.
 */
const IdentityScan = ({theme}) => {
    const [confirmationPopupVisible, setConfirmationPopupVisible] = useState(false);
    /**
     * Function to show/hide the ConfirmationPopup component.
     */
    const toggleConfirmationPopupVisible = () => {
        setConfirmationPopupVisible(!confirmationPopupVisible);
    }
    const [scanMethod, setScanMethod] = useState('QR')
    /**
     * Function to set the scan method (QR or NFC).
     */
    const toggleShareMethod = () => {
        if(scanMethod === "QR")
            setScanMethod("NFC");
        else
            setScanMethod("QR");
    }

    const [credential] = useState(
        {
            credentialName: 'Animal Agriculture License',
            issueDate: '11/01/2021',
            expiryDate: '12/03/2021',
            businessName: 'Brecon Mountain Farm',
            issuerIdConfirmation: 'www.welshagriculture.gov.uk',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE',
            licenseNo: 'AAL-675-298-253',
            licenseHolder: 'Tom Jones',
            verified: true
        },
    );

    return (
        <>
        {
            confirmationPopupVisible ?
            <ConfirmationPopup 
                closePopupFunc={toggleConfirmationPopupVisible} 
                credential={credential}
            />:
            ""
        }
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Scan Credential" identityActive="Scan">
                    <ChooseMethod>
                        <div className="switch">
                            <div className={scanMethod === "QR" ? "active" : "inactive"}>
                                QR
                            </div>
                            <div>
                                    <ToggleSwitch
                                        bgColorOn={theme.mainColors.blue}
                                        bgColorOff={theme.mainColors.blue}
                                        btnColorOn={theme.mainColors.white}
                                        btnColorOff={theme.mainColors.white}
                                        isOn={scanMethod === "NFC"}
                                        onToggle={toggleShareMethod}
                                    />
                            </div>
                            <div className={scanMethod === "NFC" ? "active" : "inactive"}>
                                NFC
                            </div>
                        </div>
                    </ChooseMethod>
                    <ScanCode>
                        {
                            scanMethod === "QR" ?
                            "Put QR scanner here" :
                            "Put NFC code here"
                        }
                    </ScanCode>
                    <Instructions>
                        {
                            scanMethod === "QR" ?
                            "Centre QR Code in frame to verify Credential" :
                            "Hold device over an NFC enabled Credential to Verify"
                        }
                    </Instructions>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(IdentityScan)
