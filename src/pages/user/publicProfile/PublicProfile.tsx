import {useState, useRef, useEffect} from 'react'
import styled, {withTheme} from 'styled-components'
import {
    CommonElementsUser,
    PageContentContainer,
    ProfilePic,
    MainContentContainer,
    MainContent,
    Button,
    InputText,
    LongInput,
    Textarea
} from "../../../components/ui"


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
    .inputFieldsandBtn {
        display: grid;
        grid-template: repeat(4, 1fr) / repeat(7, 1fr);
        grid-gap: 2rem;
        padding-bottom: 2rem;
        & > * {
            width: 100%;
            max-width: 100%;
        }
        fieldset:nth-of-type(odd) {
            grid-column: 1 / span 3;
        }
        fieldset:nth-of-type(even) {
            grid-column: 5 / span 3;
        }
        button {
            grid-column: 5 / span 3;
            height: 3rem;
            
        }
        div:first-of-type {
            width: 100%;
            grid-column: 1 / span 7; 
            grid-row: 1 / span 1;
        }    
    }
`;

const PublicProfile = ({theme}) => {

    const userInputRefs = useRef({});
    userInputRefs.current = {
        userProfileDesc: null,
        licenseHolderID: null,
        userBusinessName: null,
        userBusinessType: null,
        userCity: null,
        userCountry: null,
        userProfileURL: null
    };

    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    const [userData] = useState({
        userProfileDesc: "",
        licenseHolderID: "did:iota:abcd12243434",
        userBusinessName: "Breacon mountain Farm",
        userBusinessType: "Sheep Farm",
        userCity: "Brecon",
        userCountry: "Wales",
        userProfileURL: "/breconmountainfarm"
    })
    
    const allFieldsFilledCheck = (): any => {
        const fields = ["userProfileDesc", "licenseHolderID", "userBusinessName", "userBusinessType", "userCity", "userCountry", "userProfileURL"];
        const allFieldsExist = fields.every((p)=>userInputRefs.current[p]);
        if(allFieldsExist) {
            const allFieldsAreFilled = fields.every((p)=>userInputRefs.current[p].value !== "");
            if(allFieldsAreFilled) {
                setAllFieldsFilled(true)
            }
            else {
                setAllFieldsFilled(false)
            }
        }
        else {
            setAllFieldsFilled(false)
        }
    }

    useEffect((): void => {
        window.onload = (): void => {
            allFieldsFilledCheck();
        }
    }, [])

    const buttons = (
        <>
            <Button btnColor={theme.btnSecBg}>VIEW PROFLE</Button>
            <Button primary btnColor={theme.btnPriBg}>SAVE PROFLE</Button>
        </>
    )

    return (
        <>
        <CommonElementsUser menuActive="Public Profile" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="Public Profile" componentRight={buttons}>
                    <div className="profileImageAndDesc">
                        <ProfilePic />
                        <Textarea onChange={allFieldsFilledCheck} defaultValue={userData['userProfileDesc']} placeholder="User Profile Description" inputRef={el => userInputRefs.current['userProfileDesc'] = el} />
                    </div>
                    <div className="inputFieldsandBtn">
                        <LongInput onChange={allFieldsFilledCheck} defaultValue={userData['licenseHolderID']} placeholder="License Holder ID" inputRef={el => userInputRefs.current['licenseHolderID'] = el} btnText="SCAN" />
                        <InputText onChange={allFieldsFilledCheck} defaultValue={userData['userBusinessName']} placeholder="User Business Name" inputRef={el => userInputRefs.current['userBusinessName'] = el} />
                        <InputText onChange={allFieldsFilledCheck} defaultValue={userData['userBusinessType']} placeholder="User Business Type" inputRef={el => userInputRefs.current['userBusinessType'] = el} />
                        <InputText onChange={allFieldsFilledCheck} defaultValue={userData['userCity']} placeholder="User City" inputRef={el => userInputRefs.current['userCity'] = el} />
                        <InputText onChange={allFieldsFilledCheck} defaultValue={userData['userCountry']} placeholder="User Country" inputRef={el => userInputRefs.current['userCountry'] = el} />
                        <InputText onChange={allFieldsFilledCheck} defaultValue={userData['userProfileURL']} placeholder="User Profile URL" inputRef={el => userInputRefs.current['userProfileURL'] = el} />
                        {
                            allFieldsFilled ?
                            <Button primary btnColor={theme.mainColors.darkBlue}>CONNECT IDENTITY TO URL</Button>:
                            ""
                        }
                    </div>
                </CustomMainContent>
            </MainContentContainer>
        </PageContentContainer>
        </>
    )
}

export default withTheme(PublicProfile)
