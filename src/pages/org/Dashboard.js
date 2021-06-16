import styled, { withTheme } from 'styled-components'
import {
    Menu, 
    PageTop,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    H1
} from "../../components/ui/"

const DashboardCard = styled.div`
    border-radius: 30px;
    background-color: ${props => props.theme.mainColors.white};
    height: 90%;
    border: 1px solid ${props => props.theme.pastelColors.grey};
`;

const DashboardElement = ({elementTitle, children}) => {
    return (
        <div>
            <H1>{elementTitle}</H1>
            <DashboardCard>
                {children}
            </DashboardCard>
        </div>
    )
}

const Dashboard = () => {
    return (
        <>
        <Menu active="Dashboard" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer className="dashboard">
                <DashboardElement elementTitle="Latest Data"></DashboardElement>
                <DashboardElement elementTitle="Applications"></DashboardElement>
                <DashboardElement elementTitle="Credentials"></DashboardElement>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        
        </>
    )
}

export default withTheme(Dashboard)
