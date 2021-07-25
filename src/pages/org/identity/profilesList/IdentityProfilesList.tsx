import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    IdentityProfileHolder
} from "../../../../components/ui"
import NewProfilePopup from './NewProfilePopup';

const ProfilesHolder = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
`;

const IdentityProfilesList = ({theme}) => {
    const [newProfilePopupVisible, setNewProfilePopupVisible] = useState(false);
    const toggleNewProfilePopupVisible = () => {
        setNewProfilePopupVisible(!newProfilePopupVisible);
    }
    const [profiles] = useState([
        {
            profileName: 'TomWork',
            publicName: 'Tom Jones',
            dateCreated: '12/07/2021'
        },
        {
            profileName: 'SocialTom',
            publicName: 'Tom Jones',
            dateCreated: '11/07/2021'
        },
    ]);
    const newProfileBtn = (
        <Button primary btnColor={theme.btnPriBg} onClick={toggleNewProfilePopupVisible}>+ ADD NEW PROFILE</Button>
    )
    return (
        <>
        {
            newProfilePopupVisible ?
            <NewProfilePopup 
                closePopupFunc={toggleNewProfilePopupVisible}
            />:
            ""
        }
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Identity Profiles List" identityActive="Profiles List" componentRight={newProfileBtn}>
                    <ProfilesHolder>
                        {profiles.map((profileData, index) => (
                                    <IdentityProfileHolder 
                                        profileData={profileData} 
                                        key={index} 
                                    />
                                )
                            )
                        }
                    </ProfilesHolder>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(IdentityProfilesList)
