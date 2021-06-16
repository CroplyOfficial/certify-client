import {useState, useRef} from 'react'
import styled, {withTheme} from 'styled-components'
import {
    MenuOrg, 
    PageTop,
    TangleHistory,
    PageContentContainer,
    ProfilePic,
    MainContentContainer,
    MainContent,
    Button,
    InputText,
    LongInput,
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
        fieldset:nth-of-type(odd) {
            grid-column: 1 / span 3;
        }
        fieldset:nth-of-type(even) {
            grid-column: 5 / span 3;
        }
        div:first-of-type {
            width: 100%;
            grid-column: 1 / span 7; 
            grid-row: 1 / span 1;
        }    
    }
`;

const NewUser = ({theme}) => {
    const userInputRefs = useRef({})
    userInputRefs.current = {
        userProfileDesc: null,
        licenseHolderID: null,
        userBusinessName: null,
        userBusinessType: null,
        userCity: null,
        userCountry: null,
        userProfileURL: null
    }
    const [userInput] = useState({
        userProfileDesc: userInputRefs.current.userProfileDesc ? userInputRefs.current.userProfileDesc.value : "",
        licenseHolderID: userInputRefs.current.licenseHolderID ? userInputRefs.current.licenseHolderID.value : "",
        userBusinessName: userInputRefs.current.userBusinessName ? userInputRefs.current.userBusinessName.value : "",
        userBusinessType: userInputRefs.current.userBusinessType ? userInputRefs.current.userBusinessType.value : "",
        userCity: userInputRefs.current.userCity ? userInputRefs.current.userCity.value : "",
        userCountry: userInputRefs.current.userCountry ? userInputRefs.current.userCountry.value : "",
        userProfileURL: userInputRefs.current.userProfileURL ? userInputRefs.current.userProfileURL.value : ""
    })
    const saveUserBtn = <Button primary btnColor={theme.mainColors.darkBlue}>SAVE USER</Button>
    return (
        <>
        <MenuOrg active="Users" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="New User" componentRight={saveUserBtn}>
                    <div className="profileImageAndDesc">
                        <ProfilePic />
                        <Textarea placeholder="User Profile Description" inputRef={el => userInputRefs.current.userProfileDesc = el} />
                    </div>
                    <div className="inputFields">
                        <LongInput placeholder="License Holder ID" btnText="SCAN" />
                        <InputText placeholder="User Business Name" inputRef={el => userInputRefs.current.userBusinessName = el} />
                        <InputText placeholder="User Business Type" inputRef={el => userInputRefs.current.userBusinessType = el} />
                        <InputText placeholder="User City" inputRef={el => userInputRefs.current.userCity = el} />
                        <InputText placeholder="User Country" inputRef={el => userInputRefs.current.userCity = el} />
                        <InputText placeholder="User Profile URL" elinputRef={el => userInputRefs.current.userCity = el} />
                    </div>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(NewUser)
