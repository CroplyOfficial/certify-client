import React, {useState, useRef} from 'react'
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
} from "../../components/ui"

const CustomMainContent = styled(MainContent)`
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(7, 1fr);
    grid-row-gap: 2rem; 
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

const NewCredential = ({theme}) => {

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

    const [userInput] = useState({
        credentialName: "",
        appFirstName: "",
        appLastName: "",
        appBusinessName: "",
        appAddress1: "",
        appAddress2: "",
        appCity: "",
        appState: "",
        appPostalCode: ""    
    })
    const issueCredentialBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>ISSUE CREDENTIAL</Button>
    )
    return (
        <>
        <Menu active="Credentials" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="New Credential Application" componentRight={issueCredentialBtn}>
                    <IDSearch placeholder="License Applicant ID" btnText="SCAN" />
                    <Select inputRef={el => userInputRefs.current.credentialName = el} placeholder="Credential" optionList={["Animal Agriculture License"]} />
                    <InputText inputRef={el => userInputRefs.current.appFirstName = el} placeholder="Applicant First Name" />
                    <InputText inputRef={el => userInputRefs.current.appLastName = el} placeholder="Applicant Last Name" />
                    <InputText inputRef={el => userInputRefs.current.appBusinessName = el} placeholder="Applicant Business Name" />
                    <InputText inputRef={el => userInputRefs.current.appAddress1 = el} placeholder="Applicant Address 1" />
                    <InputText inputRef={el => userInputRefs.current.appAddress2 = el} placeholder="Applicant Address 2" />
                    <InputText inputRef={el => userInputRefs.current.appCity = el} placeholder="Applicant City" />
                    <InputText inputRef={el => userInputRefs.current.appState = el} placeholder="Applicant State" />
                    <InputText  inputRef={el => userInputRefs.current.appPostalCode = el} placeholder="Applicant Postal Code" />
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(NewCredential)
