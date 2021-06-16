import React, {useState, useEffect, useRef} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    Menu, 
    PageTop,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    LongInput,
    Select,
    InputText,
} from "../../../components/ui"
import ConfirmDenyAppPopup from './ConfirmDenyAppPopup';

const CustomMainContent = styled(MainContent)`
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(7, 1fr);
    grid-row-gap: 2rem;
    margin-bottom: 2rem;
    fieldset:nth-of-type(even) {
        width: 100%;
        grid-column: 1 / span 3;
    }
    fieldset:nth-of-type(odd) {
        width: 100%;
        grid-column: 5 / span 3;
    }
    fieldset:nth-of-type(1) {
        width: 100%;
        grid-column: 1 / span 7;
    }
`;

const IDSearch = styled(LongInput)`
    width: 100%;
    grid-column: 1 / span 7;
`;

const ViewApplication = ({theme}) => {

    const userInputRefs = useRef({})
    userInputRefs.current = {
        credentialName: null,
        appFirstName: null,
        appLastName: null,
        appBusinessName: null,
        appAddress1: null,
        appAddress2: null,
        appCity: null,
        appState: null,
        appPostalCode: null
    }

    const [userInput, setUserInput] = useState({})
    useEffect(() => {
        setUserInput({
            credentialName: userInputRefs.current.credentialName ? userInputRefs.current.credentialName.value : "",
            appFirstName: userInputRefs.current.appFirstName ? userInputRefs.current.appFirstName.value : "",
            appLastName: userInputRefs.current.appLastName ? userInputRefs.current.appLastName.value : "",
            appBusinessName: userInputRefs.current.appBusinessName ? userInputRefs.current.appBusinessName.value : "",
            appAddress1: userInputRefs.current.appAddress1 ? userInputRefs.current.appAddress1.value : "",
            appAddress2: userInputRefs.current.appAddress2 ? userInputRefs.current.appAddress2.value : "",
            appCity: userInputRefs.current.appCity ? userInputRefs.current.appCity.value : "",
            appState: userInputRefs.current.appState ? userInputRefs.current.appState.value : "",
            appPostalCode: userInputRefs.current.appPostalCode ? userInputRefs.current.appPostalCode.value : ""
        })
    }, [])

    const [userData] = useState({
        credentialName: "Animal Agriculture License",
        appFirstName: "Tom",
        appLastName: "Jones",
        appBusinessName: "Brecon Mountain Farm",
        appAddress1: "Breacon Beacons National Park",
        appAddress2: "",
        appCity: "Breacon",
        appState: "Wales",
        appPostalCode: "1212334"
    })

    const [popupVisible, setPopupVisible] = useState(false)
    const togglePopup = () => {
        setPopupVisible(!popupVisible)
    }

    const viewAppBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue} onClick={togglePopup}>CONFIRM</Button>
    )
    return (
        <>
        <Menu active="Applications" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="View Application" componentRight={viewAppBtn}>
                    <IDSearch placeholder="License Applicant ID" btnText="SCAN" />
                    <Select defaultValue={userData.credentialName} inputRef={el => userInputRefs.current.credentialName = el} placeholder="Credential" optionList={["Animal Agriculture License"]} />
                    <InputText defaultValue={userData.appFirstName} inputRef={el => userInputRefs.current.appFirstName = el} placeholder="Applicant First Name" />
                    <InputText defaultValue={userData.appLastName} inputRef={el => userInputRefs.current.appLastName = el} placeholder="Applicant Last Name" />
                    <InputText defaultValue={userData.appBusinessName} inputRef={el => userInputRefs.current.appBusinessName = el} placeholder="Applicant Business Name" />
                    <InputText defaultValue={userData.appAddress1} inputRef={el => userInputRefs.current.appAddress1 = el} placeholder="Applicant Address 1" />
                    <InputText defaultValue={userData.appAddress2} inputRef={el => userInputRefs.current.appAddress2 = el} placeholder="Applicant Address 2" />
                    <InputText defaultValue={userData.appCity} inputRef={el => userInputRefs.current.appCity = el} placeholder="Applicant City" />
                    <InputText defaultValue={userData.appState} inputRef={el => userInputRefs.current.appState = el} placeholder="Applicant State" />
                    <InputText defaultValue={userData.appPostalCode} inputRef={el => userInputRefs.current.appPostalCode = el} placeholder="Applicant Postal Code" />
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        {
            popupVisible ? 
            <ConfirmDenyAppPopup closePopupFunc={togglePopup} userData={userData} /> :
            null
        }
        </>
    )
}

export default withTheme(ViewApplication)
