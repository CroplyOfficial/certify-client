import { useRef } from "react"
import styled, {withTheme} from "styled-components"
import {hexToRgb} from "../../../components/functions/componentFunctions"
import {
    Button,
    H1,
    Hr
} from "../../../components/ui"
import {ArrowLeft} from "../../../components/assets/icons"

const BlurredBg = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    backdrop-filter: blur(5px);
    background-color: ${props => "rgba("+hexToRgb(props.theme.mainColors.darkBlue)+", 0.5)"};
    position: fixed;
    display: grid;
    place-items: center;
    z-index: 3;
    overflow-y: auto;

`;

const Popup = styled.div`
    display: grid;
    grid-template-rows: repeat(7, auto);
    grid-row-gap: 1rem;
    background-color: ${props => props.theme.mainColors.white};
    border-radius: 30px;
    height: fit-content;
    width: 60%;
    box-sizing: border-box;
    padding: 0 2rem 2rem 2rem; 
    hr {
        width: 100%;
        margin: 0.5rem 0;
    }
`;

const BreadcrumbHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 17fr;
`;

const ClosePopup = styled.div`
    display: flex;
    justify-content: flex-start;
    svg {
        margin-right: 1rem;
        cursor: pointer;
    }
`;

const Note = styled.div`
    padding: 0 1rem;
    font-family: "Open Sans";
    font-size: 1rem;
    color: ${props => props.theme.mainColors.black};
`;

const CredentialName = styled.div`
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.5rem;
`;

const AppData = styled.div`
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr) ;
    grid-row-gap: 1rem; 
    margin: 0 1rem;
    font-family: "Open Sans";
    font-weight: bold;
    color: ${props => props.theme.mainColors.black};
    font-size: 1.1rem;
`;

const Applicant = styled.div`
    grid-column: 1 / span 1;
    span {
        font-size: 1rem;
        font-weight: 600;
    }
`;

const AppDate = styled.div`
    grid-row: 2 / span 1;    
    grid-column: 1 / span 1;

`;

const Business = styled.div`
    grid-row: 1 / span 2;
    grid-column: 2 / span 1;
    span {
        font-size: 1rem;
        font-weight: 600;

    }
`;

const Info = styled.div`
    margin: 0 1rem;
    font-family: "Open Sans";
    color: ${props => props.theme.mainColors.grey};
`;

const BtnDiv = styled.div`
    display: flex;
    margin: 0 1rem;
    justify-content: space-between;
    button {
        max-width: 300px;
        width: 100%;
    }

`;

/**
 * Returns the ConfirmDenyAppPopup component which is the modal used to
 * confirm/deny an application.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {Function} closePopupFunc - The function to close the popup. 
 * @returns {ReactElement} - The ConfirmDenyAppPopup component.
 */
const ConfirmDenyAppPopup = ({theme, closePopupFunc, userData}) => {

    const popupRef = useRef(null);

    /**
     * Closes the popup when clicked outside of it.
     * @param {Event} e - The click event which is fired when the user clicks
     * outside the popup.  
     */    
    const handleClickOutside = e => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
            closePopupFunc();
        }
    }

    return (
        <BlurredBg onMouseDown={handleClickOutside}>
            <Popup ref={popupRef}>
                <BreadcrumbHeader>
                    <ClosePopup>
                        <ArrowLeft stroke={theme.mainColors.grey} onClick={closePopupFunc} width="2rem" />
                    </ClosePopup>
                    <H1>Confirm Application</H1>
                </BreadcrumbHeader>
                <Note>
                    You are about to confirm the application status for the following Credential:<br />
                    <CredentialName>{userData.credentialName}</CredentialName>
                </Note>
                <Hr />
                <AppData>
                    <Applicant>
                        <span>Applicant:</span><br />
                        {userData.appFirstName + ' ' + userData.appLastName}
                    </Applicant>
                    <AppDate>
                        Application Date: 12/03/21
                    </AppDate>
                    <Business>
                        <span>Business:</span><br />
                        {userData.appBusinessName}<br />
                        {userData.appAddress1}<br />
                        {userData.appAddress2}
                        {
                            userData.appAddress2 !== "" ?
                            <br /> :
                            ""
                        }
                        {userData.appCity}<br />
                        {userData.appState}<br />
                        {userData.appPostalCode}<br />
                    </Business>
                </AppData>
                <Hr />
                <Info>
                    By confirming the application you will be issuing a signed verifiable credential to the applicant, if you do not wish to issue the credential click decline application.
                </Info>
                <BtnDiv>
                    <Button primary btnColor={theme.mainColors.red}>DECLINE APPLICATION</Button>
                    <Button primary btnColor={theme.mainColors.green}>CONFIRM APPLICATION</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default withTheme(ConfirmDenyAppPopup)
