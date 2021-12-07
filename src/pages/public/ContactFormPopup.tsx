import { useRef, useState} from "react";
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

/**
 * Returns the ContactFormPopup which is the modal that displays the
 * contact form on the public pages.
 * @param {Function} closePopupFunc - The function to close the popup.
 * @returns {ReactElement} - The ContactFormPopup component.
 */
const ContactFormPopup = ({closePopupFunc}) => {

    const popupRef = useRef(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const [nameErr, setNameErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [subjectErr, setSubjectErr] = useState("");
    const [messageErr, setMessageErr] = useState("");

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
        setNameErr('');
        setEmailErr('');
        setSubjectErr('');
        setMessageErr('');
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
        if(nameRef.current.value === "")
            setNameErr("This field cannnot be left empty.");
        if(!emailFormat.test(emailRef.current.value))
            setEmailErr("This is an invalid email address.");
        if(emailRef.current.value === "")
            setEmailErr("This field cannnot be left empty.");
        if(subjectRef.current.value === "")
            setSubjectErr("This field cannnot be left empty.");
        if(messageRef.current.value === "")
            setMessageErr("This field cannnot be left empty.");
    }

    return (
        <BlurredBg onMouseDown={handleClickOutside}>
            <Popup ref={popupRef}>
                <ClosePopup>
                    <Cross fill='#A1A1A1' width="3.5rem" onClick={closePopupFunc} />
                </ClosePopup>
                <BreadcrumbHeader>
                    <H1>Contact Form</H1>
                </BreadcrumbHeader>
                <Inputs>
                    <div className="senderDetails">
                        <InputText lightTheme err={nameErr}  inputRef={el => nameRef.current = el} className="formTextInput" placeholder="Name" />
                        <InputText lightTheme err={emailErr} inputRef={emailRef} className="formTextInput" placeholder="Email Address" />
                    </div>

                    <InputText lightTheme err={subjectErr} inputRef={subjectRef} className="formTextInput" placeholder="Subject" />
                    <Textarea lightTheme err={messageErr} inputRef={messageRef} className="formTextareaInput" placeholder="Message" />
                </Inputs>
                <BtnDiv>
                    <Button primary btnColor='#5D7586' onClick={inputValidation}>SEND</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default ContactFormPopup;
