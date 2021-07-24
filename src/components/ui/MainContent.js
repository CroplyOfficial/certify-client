import styled, {css, withTheme} from 'styled-components';
import { useHistory } from "react-router-dom";

import {ArrowLeft} from "../assets/icons";
import {H1} from "./";
import {
    IdentityNavbar,
    SettingsNavbar
} from "./";

const MainContentHead = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 7fr 10fr;
`;
const GoBack = styled.div`
    display: flex;
    justify-content: flex-start;
    svg {
        cursor: pointer;
        margin-right: 1rem;
    }
`;

const ContentWithoutNavbar = styled.div`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 100px);
    border-radius: 30px;
    border: 1px solid ${props => props.theme.mainContent.border};
    background-color: ${props => props.theme.mainContent.bg};
    padding: 2rem;
    box-sizing: border-box;

    ${props => props.tablePage && css`
        padding: 0;
        background: none;
        border: none;
        table {
            width: 100%;
        }
    `}

    /**********************
    For the custom scrollbar 
    ***********************/

    scrollbar-width: thin;     // for Firefox

    &::-webkit-scrollbar {
        background: none;
        width:8px;
        padding-left:10px;
    }

    /* background of the scrollbar except button or resizer */
    &::-webkit-scrollbar-track {
        background: none;
        border-radius: 30px;
        margin:20px;
    }

    /* scrollbar itself */
    &::-webkit-scrollbar-thumb {
        background-color:#babac0;
        border-radius:16px;
    }

    /* set button(top and bottom of the scrollbar) */
    &::-webkit-scrollbar-button {
        display:none;
    }
`;

const ComponentRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    button {
        margin-bottom: 1rem;
        margin-right: 0.5rem;
    }
`;

const ContentWithNavbarContainer = styled(ContentWithoutNavbar)`
    padding: 0;
`;

const ContentWithNavbar = styled(ContentWithoutNavbar)`
    border: none;
    background: none;
    height: calc(100% - 70px);
`;

/**
 * Returns the MainContent component. It contains the page title, components to the right of the page title and the important content of the page and, if specified, the SettingsNavbar and IdentityNavbar components.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {string} [identityActive] - Specifies whether or not to render the IdentityNavbar component in this component. Apply this prop to render the IdentityNavbar component in this component and set it equal to the navbar item you wish to highlight. e.g. <MainContent identityActive="Dashboard" />
 * @param {string} [settingsActive] - Specifies whether or not to render the SettingsNavbar component in this component. Apply this prop to render the IdentityNavbar component in this component.
 * @param {boolean} [tablePage] - Specifies whether or not the main content of the page is a table. Apply this prop to specify that the main content of the page is a table.
 * @param {ReactElement} [componentRight] - The component to be rendered at the top right corner in this component.
 * @param {string} [className] - CSS class of the ContentWithoutNavbar component or the ContentWithNavbar component which are children of this component.
 * @param {string} [contentTitle] - The title of the page displayed at the top left corner in the component.
 * @param {ReactElement} [children] - The children of the ContentWithoutNavbar component or the ContentWithNavbar component which are children of this component.
 * @returns {ReactElement} - The MainContent component.
 */
const MainContent = ({theme, componentRight, className, contentTitle, tablePage, identityActive, settingsActive, children}) => {
    let history = useHistory();
    return (
        <>
           <MainContentHead>
                <GoBack>
                    <ArrowLeft stroke={theme.mainColors.grey} width="2rem" onClick={() => history.goBack()} />
                </GoBack>
                <H1>{contentTitle}</H1>
                <ComponentRight>
                    {componentRight ? componentRight : null}
                </ComponentRight>
            </MainContentHead>
            {
                identityActive || settingsActive ? 
                (
                    <ContentWithNavbarContainer>
                        {
                            identityActive ?
                            <IdentityNavbar identityActive={identityActive} /> :
                            <SettingsNavbar settingsActive={settingsActive} />
                        }
                        <ContentWithNavbar className={className}>
                            {children}
                        </ContentWithNavbar>
                    </ContentWithNavbarContainer> 
                ) :
                <ContentWithoutNavbar className={className} tablePage={tablePage}>
                    {children}
                </ContentWithoutNavbar>
            }
        </>
    )
}

export default withTheme(MainContent)
