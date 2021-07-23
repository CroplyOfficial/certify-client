import { useRef, useState } from "react";
import styled, {withTheme} from "styled-components";
import {hexToRgb} from "../../../../components/functions/componentFunctions";
import {
    Button,
    H1,
    InputText,
} from "../../../../components/ui";
import { ArrowLeft } from "../../../../components/assets/icons";

const BlurredBg = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    backdrop-filter: blur(5px);
    background-color: ${"rgba("+hexToRgb('#5D7586')+", 0.5)"};
    position: fixed;
    display: grid;
    place-items: center;
    z-index: 4;
    overflow-y: auto;

`;

const Popup = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    background-color: #fff;
    border-radius: 30px;
    height: fit-content;
    width: 30%;
    box-sizing: border-box;
    padding: 0 2rem 2rem 2rem;
    position: relative;
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

const InputDiv = styled.div`
    margin: 0 1rem;
    ${InputText} {
        fieldset {
            width: 100%;
        }
    }
`;

const Note = styled.div`
    font-family: "Open Sans";
    color: ${props => props.theme.mainColors.black};
    font-size: 1rem;
    margin: 1rem 0;
    text-align: center;
`;

const BtnDiv = styled.div`
    display: flex;
    justify-content: center; 
    margin: 0 1rem;
    margin-top: 1rem;
    ${Button} {
        button {
            max-width: 250px;
        }
    }
`;

/**
 * Returns the AddDomainPopup component which is the modal to add a domain to a profile. 
 * @param {Object} theme - To receive the theme from the parent component. 
 * @param {Function} closePopupFunc - The function to close this popup.
 * @returns {ReactElement} - The AddDomainPopup component.
 */
const AddDomainPopup = ({theme, closePopupFunc}) => {

    const popupRef = useRef(null);

    const domainRef = useRef(null);

    const [domainErr, setDomainErr] = useState('');

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
    /**
     * Function to validate the input data.
     */
    const inputValidation = () => {
        setDomainErr('');
        const domainFormat = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/; // Credits: https://stackoverflow.com/a/26093611/14323287
        if(!domainFormat.test(domainRef.current.value))
            setDomainErr('This is an invalid domain.')
        if(domainRef.current.value === '')
            setDomainErr("This field cannnot be left empty.");
    }

    return (
        <BlurredBg onMouseDown={handleClickOutside}>
            <Popup ref={popupRef}>
                <BreadcrumbHeader>
                    <ClosePopup>
                        <ArrowLeft stroke={theme.mainColors.grey} onClick={closePopupFunc} width="2rem" />
                    </ClosePopup>
                    <H1>Add Domain</H1>
                </BreadcrumbHeader>
                <InputDiv>
                        <InputText err={domainErr} inputRef={domainRef} placeholder="Domain URL" />
                </InputDiv>
                <Note>
                    <div>
                        <p>
                            Confirming this domain will allow it access to this profile and its information.
                        </p>
                    </div>
                </Note>
                <BtnDiv>
                    <Button primary btnColor='#5D7586' onClick={inputValidation}>CONFIRM DOMAIN</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default withTheme(AddDomainPopup)
