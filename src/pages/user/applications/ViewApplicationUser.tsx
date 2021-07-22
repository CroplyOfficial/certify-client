import {useState, useRef} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsUser,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    Select,
    InputText,
    Hr
} from "../../../components/ui"

const CustomMainContent = styled(MainContent)`
    display: grid;
    grid-template-rows: repeat(3, auto);
    fieldset {
        width: 100%;
    }
    hr {
        width: 100%;
        margin-bottom: 3.3rem;
    }
`;

const Div1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;

`;

const Div2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, auto);
    grid-gap: 2rem;
    padding-bottom: 2rem;
    fieldset:nth-of-type(odd) {
        grid-column: 1 / span 1;
    }
    fieldset:nth-of-type(even) {
        grid-column: 2 / span 1;
    }
`;

/**
 * Returns the ViewApplicationUser component which is the page that 
 * contains the form to view/edit an application of the user.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @returns {ReactElement} - The ViewApplicationUser component
 */
const ViewApplicationUser = ({theme}) => {
    const userInputRefs = useRef({})
    userInputRefs.current = {
        appType: null,
        appName: null,
        firstName: null,
        lastName: null,
        businessName: null,
        businessType: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        postalCode: null,
        country: null,
        businessRegNo: null,
        regAuthority: null
    };

    const [userData] = useState({
        appType: 'Lcicense',
        appName: 'Animal Agriculture License',
        firstName: 'Tom',
        lastName: 'Jones',
        businessName: 'Brecon Mountain Farm',
        businessType: 'Sheep Farm',
        address1: 'Brecon Road',
        address2: 'Breacon Beacons National Park',
        city: 'Breacon',
        state: 'Powys',
        postalCode: 'CF44 0EX',
        country: 'Wales',
        businessRegNo: 'UK1234567890',
        regAuthority: 'Companies House, UK'
    })

    const [userInput] = useState({
        appType: userInputRefs.current['appType'] ? userInputRefs.current['appType'].value : "",
        appName: userInputRefs.current['appName'] ? userInputRefs.current['appName'].value : "",
        firstName: userInputRefs.current['firstName'] ? userInputRefs.current['firstName'].value : "",
        lastName: userInputRefs.current['lastName'] ? userInputRefs.current['lastName'].value : "",
        businessName: userInputRefs.current['businessName'] ? userInputRefs.current['businessName'].value : "",
        businessType: userInputRefs.current['businessType'] ? userInputRefs.current['businessType'].value : "",
        address1: userInputRefs.current['address1'] ? userInputRefs.current['address1'].value : "",
        address2: userInputRefs.current['address2'] ? userInputRefs.current['address2'].value : "",
        city: userInputRefs.current['city'] ? userInputRefs.current['city'].value : "",
        state: userInputRefs.current['state'] ? userInputRefs.current['state'].value : "",
        postalCode: userInputRefs.current['postalCode'] ? userInputRefs.current['postalCode'].value : "",
        country: userInputRefs.current['country'] ? userInputRefs.current['country'].value : "",
        businessRegNo: userInputRefs.current['businessRegNo'] ? userInputRefs.current['businessRegNo'].value : "",
        regAuthority: userInputRefs.current['regAuthority'] ? userInputRefs.current['regAuthority'].value : "",
    });

    const saveAppBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE APPLICATION</Button>
    );
    return (
        <>
        <CommonElementsUser menuActive="Applications" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="View Application" componentRight={saveAppBtn}>
                    <Div1>
                        <Select defaultValue={userData['appType']} inputRef={el => userInputRefs.current['appType'] = el} placeholder="Application Type" optionList={["License"]} />
                        <Select defaultValue={userData['appName']} inputRef={el => userInputRefs.current['appName'] = el} placeholder="Application Name" optionList={["Animal Agriculture License"]} />  
                    </Div1>
                    <Hr />
                    <Div2>
                        <InputText defaultValue={userData['firstName']} inputRef={el => userInputRefs.current['firstName'] = el} placeholder="First Name" />
                        <InputText defaultValue={userData['lastName']} inputRef={el => userInputRefs.current['lastName'] = el} placeholder="Last Name" />
                        <InputText defaultValue={userData['businessName']} inputRef={el => userInputRefs.current['businessName'] = el} placeholder="Business Name" />
                        <InputText defaultValue={userData['businessType']} inputRef={el => userInputRefs.current['businessType'] = el} placeholder="Business Type" />
                        <InputText defaultValue={userData['address1']} inputRef={el => userInputRefs.current['address1'] = el} placeholder="Address 1" />
                        <InputText defaultValue={userData['address2']} inputRef={el => userInputRefs.current['address2'] = el} placeholder="Address 2" />
                        <InputText defaultValue={userData['city']} inputRef={el => userInputRefs.current['city'] = el} placeholder="City" />
                        <InputText defaultValue={userData['state']} inputRef={el => userInputRefs.current['state'] = el} placeholder="State" />
                        <InputText defaultValue={userData['postalCode']} inputRef={el => userInputRefs.current['postalCode'] = el} placeholder="Postal Code" />
                        <InputText defaultValue={userData['country']} inputRef={el => userInputRefs.current['country'] = el} placeholder="Country" />
                        <InputText defaultValue={userData['businessRegNo']} inputRef={el => userInputRefs.current['businessRegNo'] = el} placeholder="Business Regsitration Number" />
                        <InputText defaultValue={userData['regAuthority']} inputRef={el => userInputRefs.current['regAuthority'] = el} placeholder="Regsitration Authority" />
                    </Div2>
                </CustomMainContent>
            </MainContentContainer>
        </PageContentContainer>
        
        </>
    );
}

export default withTheme(ViewApplicationUser)
