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
import EditProfileCredentialPermissionsPopup from './EditProfileCredentialPermissionsPopup';

const GeneralInfo = styled.div`
    display: grid;
    place-items: center;
    font-weight: bold;
    font-family: 'Open Sans';
    margin-bottom: 2rem;
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
    color: ${props => props.theme.mainColors.darkBlue};
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

const ViewProfile = ({theme}) => {
    const [editCredentialPermsPopupVisible, setEditCredentialPermsPopupVisible] = useState(false);
    const toggleEditCredentialPermsPopupVisible = () => {
        setEditCredentialPermsPopupVisible(!editCredentialPermsPopupVisible);
    }
    
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
    const [selectedCredential, setSelectedCredential] = useState({});
    
    const addCredentialsBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>+ ADD CREDENTIALS</Button>
    )
    return (
        <>
        {
            editCredentialPermsPopupVisible ?
            <EditProfileCredentialPermissionsPopup 
                closePopupFunc={toggleEditCredentialPermsPopupVisible} 
                credential={selectedCredential}
            />:
            ""
        }
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="View Profile" identityActive="Profiles List" componentRight={addCredentialsBtn}>
                    <GeneralInfo>
                        <ProfilePicture>
                            {profileData.profileName[0]}
                        </ProfilePicture>
                        <Username>
                            {profileData.profileName}
                        </Username>
                    </GeneralInfo>
                    <CredentialsHolder>
                    {profileData.credentials.map((credentialData, index) => (
                            <CredentialHolder
                                key={index}
                                viewPopupFunc={toggleEditCredentialPermsPopupVisible}
                                credentialData={credentialData}
                                selectCredentialFunc={setSelectedCredential}
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

export default withTheme(ViewProfile)
