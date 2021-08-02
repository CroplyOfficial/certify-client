import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    CredentialHolder
} from "../../../../components/ui"

const Header = styled.div`
    display: grid;
    place-items: center;
    font-weight: bold;
    font-family: 'Open Sans';
    margin-bottom: 2rem;
    position: relative;
`;

const ProfilePicture = styled.div`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    background-color: ${props => props.theme.pastelColors.grey};
    font-size: 1.5rem;
    color: ${props => props.theme.mainColors.grey};
    margin-bottom: 1rem;
`;

const Username = styled.div`
    font-family: 'Open Sans';
    color: ${props => props.theme.mode === 'light' ? props.theme.mainColors.darkBlue : props.theme.mainColors.blue};
    font-size: 1.8rem;
    display: grid;
    place-items: center;
`;

const CredentialsHolder = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
`;

/**
 * Returns the AddCredentials component which is the page to add
 * Identity credentials to a user.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @returns {ReactElement} - The AddCredentials component.
 */
const AddCredentials = ({theme}) => {
    
    const [profileData] = useState({
        profileName: 'TomWork',
        credentials: [
            {
                credentialName: 'Animal Agriculture License',
                issueDate: '11/01/2021',
                expiryDate: '12/03/2021',
                businessName: 'Brecon Mountain Farm',
                issuerIdConfirmation: 'www.welshagriculture.gov.uk',
                regAuthority: 'WELSH DEPT. OF AGRICULTURE',
                licenseNo: 'AAL-675-298-253',
                licenseHolder: 'Tom Jones'
            },
            {
                credentialName: 'Animal Agriculture License',
                issueDate: '11/01/2021',
                expiryDate: '12/03/2021',
                businessName: 'Brecon Mountain Farm',
                issuerIdConfirmation: 'www.welshagriculture.gov.uk',
                regAuthority: 'WELSH DEPT. OF AGRICULTURE',
                licenseNo: 'AAL-675-298-253',
                licenseHolder: 'Tom Jones'
            },
        ]
    });    
    const menuOptions = {
        "Delete Profile": () => console.log("profile deleted"),
        "Domain Settings": () => window.location.href = "/org/identity/profilesList/domainSettings"
    }

    const saveCredentialsBtn = (
        <Button primary btnColor={theme.btnPriBg}>SAVE CREDENTIALS</Button>
    )
    return (
        <>
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Add Credentials" identityActive="Profiles List" componentRight={saveCredentialsBtn}>
                    <Header>
                        <ProfilePicture>
                            {profileData.profileName[0]}
                        </ProfilePicture>
                        <Username>
                            {profileData.profileName}
                        </Username>
                    </Header>
                    <CredentialsHolder>
                    {profileData.credentials.map((credentialData, index) => (
                            <CredentialHolder
                                key={index}
                                credentialData={credentialData}
                                selector
                            />
                        )
                    )}
                    </CredentialsHolder>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(AddCredentials)
