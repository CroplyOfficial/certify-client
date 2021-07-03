import { useEffect, useRef } from "react";
import styled from "styled-components";
import {hexToRgb} from "../../components/functions/componentFunctions";
import {
    Button,
    H1,
    InputText,
    Textarea,
} from "../../components/ui";
import { Cross } from "../../components/assets/icons";

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
    width: 50%;
    box-sizing: border-box;
    padding: 0 2rem 2rem 2rem;
    position: relative;
`;

const BreadcrumbHeader = styled.div`
    margin-left: 1rem;
`;

const ClosePopup = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    margin: 0;
    svg {
        margin:  0.5rem 0.5rem 0 0;
        cursor: pointer;
    }
`;

const Inputs = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 1rem; 
    margin: 0 1rem;
    .senderDetails {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
    }
    .formTextInput {
        width: 100%;
    }
    .formTextareaInput {
        height: 10rem;
        width: 100%;
    }
`;

const BtnDiv = styled.div`
    display: flex;
    justify-content: flex-end; 
    margin: 0 1rem;
    margin-top: 2rem;
    button {
        max-width: 250px;
    }
`;

const ContactFormPopup = ({closeModal}) => {

    const popupRef = useRef(null);

    /* close modal when clicked outside of it */
    useEffect(() => {
        const handleClickOutside = e => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                closeModal();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <BlurredBg >
            <Popup ref={popupRef}>
                <ClosePopup>
                    <Cross fill='#A1A1A1' width="3.5rem" onClick={closeModal} />
                </ClosePopup>
                <BreadcrumbHeader>
                    <H1>Contact Form</H1>
                </BreadcrumbHeader>
                <Inputs>
                    <div className="senderDetails">
                        <InputText className="formTextInput" placeholder="Name" />
                        <InputText className="formTextInput" placeholder="Email Address" />
                    </div>

                    <InputText className="formTextInput" placeholder="Subject" />
                    <Textarea className="formTextareaInput" placeholder="Message" />
                </Inputs>
                <BtnDiv>
                    <Button primary btnColor='#5D7586'>SEND</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default ContactFormPopup
