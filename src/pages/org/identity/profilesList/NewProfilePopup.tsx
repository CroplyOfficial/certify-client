import { useEffect, useRef, useState } from "react";
import styled, {withTheme} from "styled-components";
import {hexToRgb} from "../../../../components/functions/componentFunctions";
import {
    Button,
    H1,
    InputText,
    ProfilePic
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
    width: 50%;
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

const ProfilePicContainer = styled.div`
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    ${ProfilePic} {
        div {
            border-radius: 50%;
            width: 10rem;
            height: 10rem;
            svg {
                width: 4rem;
                height: 4rem;
            }
        }
    }
`;

const Inputs = styled.div`
    margin: 0 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
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
    justify-content: flex-end; 
    margin: 0 1rem;
    margin-top: 1rem;
    ${Button} {
        button {
            max-width: 250px;
        }
    }
`;

const NewProfilePopup = ({theme, closePopupFunc}) => {

    const popupRef = useRef(null);

    const profileUsernameRef = useRef(null);
    const publicNameRef = useRef(null);

    const [profileUsernameErr, setProfileUsernameErr] = useState('');
    const [publicNameErr, setPublicNameErr] = useState('');

    /* close modal when clicked outside of it */
    useEffect(() => {
        const handleClickOutside = e => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                closePopupFunc();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const inputValidation = () => {
        setProfileUsernameErr('');
        setPublicNameErr('');
        // check for white spaces in the profile username
        if(/\s/g.test(profileUsernameRef.current.value))
            setProfileUsernameErr("This field can't contain whitespaces.");
        if(profileUsernameRef.current.value === '')
            setProfileUsernameErr('This field cannot be left empty.');
        if(publicNameRef.current.value === '')
            setPublicNameErr('This field cannot be left empty.');
    }

    return (
        <BlurredBg >
            <Popup ref={popupRef}>
                <BreadcrumbHeader>
                    <ClosePopup>
                        <ArrowLeft stroke={theme.mainColors.grey} onClick={closePopupFunc} width="2rem" />
                    </ClosePopup>
                    <H1>New Profile</H1>
                </BreadcrumbHeader>
                <ProfilePicContainer>
                    <ProfilePic noText />
                </ProfilePicContainer>
                <Inputs>
                        <InputText err={profileUsernameErr} inputRef={profileUsernameRef} placeholder="Profile Username" />
                        <InputText err={publicNameErr} inputRef={publicNameRef} placeholder="Public Name" />
                </Inputs>
                <Note>
                    <div>
                        <p>
                            A new profile will be created.
                        </p>
                        <p>
                            Save and continue to add
                            credentials and assign domain
                            permissions to your new profile.
                        </p>
                    </div>
                </Note>
                <BtnDiv>
                    <Button primary btnColor='#5D7586' onClick={inputValidation}>SAVE & CONTINUE</Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default withTheme(NewProfilePopup)