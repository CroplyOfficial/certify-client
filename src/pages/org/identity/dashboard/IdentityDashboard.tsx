import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    VerifiedCredentialHolder
} from "../../../../components/ui"
import ViewVerifiedCredentialPopup from './ViewVerifiedCredentialPopup';
import ShareCredentialPopup from './ShareCredentialPopup';
import ShareQrPopup from './ShareQrPopup';
import ShareNfcPopup from './ShareNfcPopup';

const DataHolder = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
`;


const IdentityDashboard = ({theme}) => {
    const [verifiedCredentialPopupVisible, setVerifiedCredentialPopupVisible] = useState(false);
    const toggleVerifiedCredentialPopupVisible = () => {
        setVerifiedCredentialPopupVisible(!verifiedCredentialPopupVisible);
    }
    const [shareCredentialPopupVisible, setShareCredentialPopupVisible] = useState(false);
    const toggleShareCredentialPopupVisible = () => {
        setVerifiedCredentialPopupVisible(false);
        setShareCredentialPopupVisible(!shareCredentialPopupVisible);
    }
    const [shareQrPopupVisible, setShareQrPopupVisible] = useState(false);
    const toggleShareQrPopupVisible = () => {
        setShareCredentialPopupVisible(false);
        setShareQrPopupVisible(!shareQrPopupVisible);
    }
    const [shareNfcPopupVisible, setShareNfcPopupVisible] = useState(false);
    const toggleShareNfcPopupVisible = () => {
        setShareCredentialPopupVisible(false);
        setShareNfcPopupVisible(!shareNfcPopupVisible);
    }

    const [credentials] = useState([
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
    ]);
    const [selectedVerifiedCredential, setSelectedVerifiedCredential] = useState({});

    return (
        <>
        {
            verifiedCredentialPopupVisible ?
            <ViewVerifiedCredentialPopup 
                closePopupFunc={toggleVerifiedCredentialPopupVisible} 
                credential={selectedVerifiedCredential}
                showShareCredentialPopupFunc={toggleShareCredentialPopupVisible}
            />:
            ""
        }
         {
            shareCredentialPopupVisible ?
            <ShareCredentialPopup 
                closePopupFunc={toggleShareCredentialPopupVisible} 
                credential={selectedVerifiedCredential}
                showShareQrPopupFunc={toggleShareQrPopupVisible}
                showShareNfcPopupFunc={toggleShareNfcPopupVisible}
                goBackFunc={() => {
                        toggleShareCredentialPopupVisible();
                        toggleVerifiedCredentialPopupVisible();
                    }
                }
            />:
            ""
        }
         {
            shareQrPopupVisible ?
            <ShareQrPopup 
                credential={selectedVerifiedCredential}
                closePopupFunc={toggleShareQrPopupVisible}
                goBackFunc={() => {
                        toggleShareQrPopupVisible();
                        toggleShareCredentialPopupVisible();
                    }
                }
            />:
            ""
        }
         {
            shareNfcPopupVisible ?
            <ShareNfcPopup 
                credential={selectedVerifiedCredential}
                closePopupFunc={toggleShareNfcPopupVisible}
                goBackFunc={() => {
                        toggleShareNfcPopupVisible();
                        toggleShareCredentialPopupVisible();
                    }
                }
            />:
            ""
        }
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Identity Dashboard" identityActive="Dashboard">
                <DataHolder>
                        {
                            credentials.map((credentialData, index) => (
                                    <VerifiedCredentialHolder
                                        key={index}
                                        viewPopupFunc={toggleVerifiedCredentialPopupVisible}
                                        credentialData={credentialData}
                                        selectCredentialFunc={setSelectedVerifiedCredential}
                                    />
                                )
                            )
                        }
                    </DataHolder> 
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(IdentityDashboard)
