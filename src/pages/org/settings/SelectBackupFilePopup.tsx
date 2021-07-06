import { useEffect, useRef, useState } from "react"
import styled, {withTheme} from "styled-components"
import {hexToRgb} from "../../../components/functions/componentFunctions"
import {
    H1,
    Hr,
    Button
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
    grid-row-gap: 1rem;
    background-color: ${props => props.theme.mainColors.white};
    border-radius: 30px;
    height: fit-content;
    width: 30%;
    padding: 0 2rem 2rem 2rem;
    font-family: 'Open Sans';
    color: ${props => props.theme.mainColors.black};
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

const ChooseFile = styled.div`
    input[type='file'] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        width: 100%;
        height: 100%;
        &::file-selector-button {
            cursor: pointer;
        }
    }
    button {
        margin: 0 auto;
    }
    div {
        margin-top: 1.5rem;
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


const SelectBackupFilePopup = ({theme, closePopupFunc, showRestoreWarningPopupFunc}) => {
    const popupRef = useRef(null);
    const chooseFileRef = useRef(null);
    const [chosenFile, setChosenFile] = useState('');

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

    return (
        <BlurredBg>
            <Popup ref={popupRef}>
                <BreadcrumbHeader>
                    <ClosePopup>
                        <ArrowLeft 
                            stroke={theme.mainColors.grey}
                            onClick={closePopupFunc} 
                            width="2rem"
                        />
                    </ClosePopup>
                    <H1>Choose Backup File</H1>
                </BreadcrumbHeader>
                <ChooseFile>
                    <Button btnColor={theme.mainColors.darkBlue}>
                        <input 
                            type="file" 
                            ref={chooseFileRef}
                            onChange={() => setChosenFile(chooseFileRef.current.files.item(0).name)}
                        />
                        CHOOSE FILE
                    </Button>
                    <div>
                        {
                            chosenFile === '' ?
                            'No file chosen':
                            <>
                                Chosen file: <b>{chosenFile}</b>
                            </>
                        }
                    </div>
                </ChooseFile>
                <Hr />
                <BtnDiv>
                    <Button 
                        primary
                        btnColor={theme.mainColors.darkBlue}
                        onClick={showRestoreWarningPopupFunc}
                    >
                        CONTINUE
                    </Button>
                </BtnDiv>
            </Popup>
        </BlurredBg>
    )
}

export default withTheme(SelectBackupFilePopup) 