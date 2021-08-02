import { useRef } from "react"
import styled, {withTheme} from "styled-components"
import {hexToRgb} from "../../../components/functions/componentFunctions"
import {
    Button,
    H1,
    Hr,
    DynamicSearch
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
    grid-template-rows: repeat(3, auto);
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

const InputDiv = styled.div`
    margin: 1rem 1rem;

    fieldset {
        width: 100%;
    }
`;

const BtnDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0 1rem;
    button {
        max-width: none;
        grid-column: 4 / span 2;
        width: 100%;
    }
`;

/**
 * Returns the IssueCredentialPopup component which is the modal used to
 * duplicate a credential.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {Function} closePopupFunc - The function to close the popup. 
 * @param {string[]} credentialNames - The array of credential names to be displayed in 
 * the dynamic search bar.
 * @returns {ReactElement} - The IssueCredentialPopup component.
 */
const IssueCredentialPopup = ({theme, closePopupFunc, credentialNames}) => {
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
                        <ArrowLeft stroke={theme.mainColors.grey} width="2rem" onClick={closePopupFunc} />
                    </ClosePopup>
                    <H1>Select Credential</H1>
                </BreadcrumbHeader>
                <Note>
                    Please select the credential to issue:<br />
                </Note>
                <Hr />
                <InputDiv>
                    <DynamicSearch credentialNames={credentialNames} />
                </InputDiv>
                <BtnDiv>
                    <Button primary btnColor={theme.mainColors.darkBlue}>SELECT CREDENTIAL</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default withTheme(IssueCredentialPopup)
