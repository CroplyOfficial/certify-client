import styled from "styled-components"
import {hexToRgb} from "../../../components/functions/componentFunctions"
import {
    Button,
    H1,
    InputText,
    Select,
    Textarea,
} from "../../../components/ui"
import {ArrowLeft} from "../../../components/assets/icons"

const BlurredBg = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    backdrop-filter: blur(5px);
    background-color: ${props => "rgba("+hexToRgb('#5D7586')+", 0.5)"};
    position: fixed;
    display: grid;
    place-items: center;
    z-index: 1;
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
    justify-content: space-between; 
    margin: 0 1rem;
    margin-top: 2rem;
    button {
        max-width: 250px;
    }
`;

const ContactFormPopup = () => {
    return (
        <BlurredBg>
            <Popup>
                <BreadcrumbHeader>
                    <ClosePopup>
                        <ArrowLeft stroke='#A1A1A1' width="2rem"  />
                    </ClosePopup>
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
                    <Button primary btnColor='#ED8A8A'>CANCEL</Button>
                    <Button primary btnColor='#5D7586'>SEND</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default ContactFormPopup
