import { useEffect, useRef, useState } from "react"
import styled, {withTheme} from "styled-components"
import {hexToRgb} from "../../../components/functions/componentFunctions"
import {
    H1,
    Hr,
    Button,
    InputPIN
} from "../../../components/ui"
import {
    ArrowLeft,
} from "../../../components/assets/icons"

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
    background-color: ${props => props.theme.mainColors.white};
    border-radius: 30px;
    height: fit-content;
    max-width: fit-content;
    width: 30%;
    padding: 0 2rem 2rem 2rem;
    font-family: 'Open Sans';
    color: ${props => props.theme.mainColors.black};
    hr {
        width: 100%;
        margin: 1.5rem 0;
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

const PinEnter = styled.div`
    ${InputPIN} {
        fieldset {
            margin: 0 auto;

        }
    }
    div {
        margin-bottom: 1.5rem;
    }
`;

const BtnDiv = styled.div`
    display: flex;
    margin: 0 1rem;
    justify-content: center;
    button {
        max-width: 300px;
        width: 100%;
    }
`;


const ConfirmPinForRestorePopup = ({theme, goBackFunc, closePopupFunc}) => {
    const popupRef = useRef(null);
    const pinRef = useRef(null);
    const [pinErr, setPinErr] = useState('');

    /* close modal when clicked outside of it */
    useEffect(() => {
        const handleClickOutside = e => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                closePopupFunc();
            }
        }

        // Bind the event listeners
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listeners on clean up
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });
    
    const inputValidation = e => {
        if(pinRef.current.value === "") {
            setPinErr("Please enter your PIN.") 
        }
        /*
        else if() {
            setPinErr("The entered PIN is incorrect.")
        }
        */
        else {
            setPinErr("")
        }
    }

    return (
        <BlurredBg>
            <Popup ref={popupRef}>
                <BreadcrumbHeader>
                    <ClosePopup>
                        <ArrowLeft 
                            stroke={theme.mainColors.grey}
                            onClick={goBackFunc} 
                            width="2rem"
                        />
                    </ClosePopup>
                    <H1>PIN Confirmation</H1>
                </BreadcrumbHeader>
                <PinEnter>
                    <div>
                        Please enter your PIN to continue:
                    </div>
                    <InputPIN inputRef={pinRef} err={pinErr} placeholder="PIN" inputUnderlineColor="#C4C4C4" maskColor={theme.mainColors.blue} deleteDigitColor={theme.mainColors.black} required />
                </PinEnter>
                <Hr />
                <BtnDiv>
                    <Button 
                        primary 
                        btnColor={theme.mainColors.darkBlue}
                        onClick={inputValidation}
                    >
                        RESTORE
                    </Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default withTheme(ConfirmPinForRestorePopup) 