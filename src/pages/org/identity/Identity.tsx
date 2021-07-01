import {useState, useRef} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    VerifiableCredentialHolder
} from "../../../components/ui"

const DataHolder = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
`;


const Identity = ({theme}) => {
    const [credentials] = useState([
        {
            credentialName: 'Animal Agriculture License',
            expiryDate: '12/03/2021',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE'
        },
        {
            credentialName: 'Animal Agriculture License',
            expiryDate: '12/03/2021',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE'
        },
        {
            credentialName: 'Animal Agriculture License',
            expiryDate: '12/03/2021',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE'
        }
    ])

    return (
        <>
        <CommonElementsOrg menuActive="Identity" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Identity" identityActive="Dashboard">
                <DataHolder>
                        {
                            credentials.map(credentialData => (
                                    <VerifiableCredentialHolder credentialData={credentialData} />
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

export default withTheme(Identity)
