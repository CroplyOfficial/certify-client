import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    MenuUser, 
    PageTop,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    UserAppDataHolder
} from "../../../components/ui"

const DataHolder = styled.div`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
    margin-bottom: 1rem;
`;

const ApplicationsUser = ({theme}) => {

    const [apps] = useState([
        {
            appName: 'Animal Agriculture License',
            appDate: '12/03/2021',
            appStatus: 'PENDING',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE'
        },
        {
            appName: 'Animal Agriculture License',
            appDate: '12/03/2021',
            appStatus: 'APPROVED',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE'
        },
        {
            appName: 'Animal Agriculture License',
            appDate: '12/03/2021',
            appStatus: 'DECLINED',
            regAuthority: 'WELSH DEPT. OF AGRICULTURE'
        }
    ])

    const newAppBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue} onClick={() => window.location.href='/user/applications/new'}>+ NEW APPLICATION</Button>
    );
    return (
        <>
        <MenuUser active="Applications" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Applications" componentRight={newAppBtn}>
                    <DataHolder>
                        {
                            apps.map(appData => (
                                    <UserAppDataHolder appData={appData} />
                                )
                            )
                        }
                    </DataHolder>                    
                </MainContent>
            </MainContentContainer>
        </PageContentContainer>
        </>
    );
}

export default withTheme(ApplicationsUser)
