import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
} from "../../../../components/ui"

const DataHolder = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
`;


const IdentityScan = ({theme}) => {
    const [verifiedCredentialPopupVisible, setVerifiedCredentialPopupVisible] = useState(false);
    const toggleVerifiedCredentialPopupVisible = () => {
        setVerifiedCredentialPopupVisible(!verifiedCredentialPopupVisible);
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
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Identity Scan" identityActive="Scan">
                <DataHolder>

                    </DataHolder> 
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(IdentityScan)
