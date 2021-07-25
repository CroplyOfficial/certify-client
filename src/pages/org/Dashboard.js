import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    H1
} from "../../components/ui/"

const DashboardCard = styled.div`
    border-radius: 30px;
    background-color: ${props => props.theme.dashboardCard.bg};
    height: 90%;
    border: ${props => props.theme.dashboardCard.border};
`;

/**
 * 
 * @param {string} elementTitle - The heading of the element.
 * @param {ReactElement} children -  The content inside the card element.
 * @returns {ReactElement} - The DashboardElement component.
 */
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

/**
 * Returns the Dashboard component which consists of 3 card elements
 * contains info about the latest data relating to the organisation 
 * and its applications and credentials.
 * @returns {ReactElement} - The Dashboard component
 */
const Dashboard = () => {
    return (
        <>
        <CommonElementsOrg menuActive="Dashboard" />
        <PageContentContainer>
            <MainContentContainer orgDashboard>
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
