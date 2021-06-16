import React, {useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {
    Menu, 
    PageTop,
    TangleHistory,
    PageContentContainer,
    ProfilePic,
    MainContentContainer,
    MainContent,
    Button,
    InputText,
    Textarea
} from "../../../components/ui/"


const CustomMainContent = styled(MainContent)`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 3rem;
    .profileImageAndDesc {
        display: grid;
        width: 100%;
        grid-column-gap: 2rem; 
        grid-template-columns: 20rem auto;
        & > * {
            grid-row: 2 / span 1;
            width: 100%;
        }
        h1 {
            grid-row: 1 / span 1;
            grid-column: 1 / span 2;
        }
    }
    .inputFields {
        display: grid;
        grid-template: repeat(4, 1fr) / repeat(7, 1fr);
        grid-gap: 2rem;
        & > * {
            width: 100%;
        }
        fieldset:nth-of-type(even) {
            grid-column: 1 / span 3;
        }
        fieldset:nth-of-type(odd) {
            grid-column: 5 / span 3;
        }
        fieldset:first-of-type {
            width: 100%;
            grid-column: 1 / span 7; 
            grid-row: 1 / span 1;
        }    
    }
`;

const ViewUser = ({theme}) => {
    const [userData] = useState({
        userProfileDesc: "hello",
        licenseHolderID: "did:iota:abcd12243434",
        userBusinessName: "Breacon mountain Farm",
        userBusinessType: "Sheep Farm",
        userCity: "Brecon",
        userCountry: "Wales",
        userProfileURL: "/breconmountainfarm"
    })

    const newUserBtn = <Button primary btnColor={theme.mainColors.darkBlue} onClick={() => window.location.href = "/org/users/new"}>+ NEW USER</Button>
    return (
        <>
        <Menu active="Users" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="View User" componentRight={newUserBtn}>
                    <div className="profileImageAndDesc">
                        <ProfilePic noUploadImgPic />
                        <Textarea value={userData.userProfileDesc} placeholder="User Profile Description" />
                    </div>
                    <div className="inputFields">
                        <InputText value={userData.licenseHolderID} placeholder="License Holder ID" />
                        <InputText value={userData.userBusinessName} placeholder="User Business Name" />
                        <InputText value={userData.userBusinessType} placeholder="User Business Type" />
                        <InputText value={userData.userCity} placeholder="User City" />
                        <InputText value={userData.userCountry} placeholder="User Country" />
                        <InputText value={userData.userProfileURL} placeholder="User Profile URL" />
                    </div>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(ViewUser)
