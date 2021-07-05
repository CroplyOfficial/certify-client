import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    DomainHolder
} from "../../../../components/ui"
import AddDomainPopup from './AddDomainPopup';
import EditDomainPopup from './EditDomainPopup';

const Header = styled.div`
    display: grid;
    place-items: center;
    font-weight: bold;
    font-family: 'Open Sans';
    margin-bottom: 2.5rem;
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

const DomainsHolder = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    grid-row-gap: 1rem;
`;

const ProfileDomainSettings = ({theme}) => {
    const [selectedDomain, setSelectedDomain] = useState({});

    const [addDomainPopupVisible, setAddDomainPopupVisible] = useState(false);
    const toggleAddDomainPopupVisible = () => {
        setAddDomainPopupVisible(!addDomainPopupVisible);
    }

    const [editDomainPopupVisible, setEditDomainPopupVisible] = useState(false);
    const toggleEditDomainPopupVisible = (domain) => {
        setSelectedDomain(domain);
        setEditDomainPopupVisible(!editDomainPopupVisible);
    }

    const [profileData] = useState({
        profileName: 'TomWork',
        domains: [
            {
                url: 'welshagriculture.gov.uk',
                creationStatus: 'ACTIVE'
            },
            {
                url: 'welshagriculture.gov.uk',
                creationStatus: 'ACTIVE'
            },
            {
                url: 'thegovernment.com',
                creationStatus: 'PAUSED'
            },
            {
                url: 'businessregister.com',
                creationStatus: 'PENDING'
            },
        ]
    });

    const addDomainBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue} onClick={toggleAddDomainPopupVisible}>+ ADD DOMAIN</Button>
    )
    return (
        <>
        {
            addDomainPopupVisible ?
            <AddDomainPopup
                closePopupFunc={toggleAddDomainPopupVisible}
            />:
            ""
        }
        {
            editDomainPopupVisible ?
            <EditDomainPopup
                closePopupFunc={toggleEditDomainPopupVisible}
                selectedDomain={selectedDomain}
            />:
            ""
        }
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Profile Domain Settings" identityActive="Profiles List" componentRight={addDomainBtn}>
                    <Header>
                        <ProfilePicture>
                            {profileData.profileName[0]}
                        </ProfilePicture>
                        <Username>
                            {profileData.profileName}
                        </Username>
                    </Header>
                    <DomainsHolder>
                        {profileData.domains.map((domain, index) => (
                                <DomainHolder
                                    key={index}
                                    domain={domain}
                                    toggleEditDomainPopupFunc={toggleEditDomainPopupVisible}
                                />
                            )
                        )}
                    </DomainsHolder>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(ProfileDomainSettings)
