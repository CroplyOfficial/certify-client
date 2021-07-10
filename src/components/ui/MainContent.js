// Contains code for the main content div on a page.
/*
props:
contentTitle -> The heading that appears for the main content
componentRight -> A ReactJS component that should be aligned to the right of the contentTitle
tablePage -> Add this prop if the page contains a table of records
identityActive -> Add this prop if you want to display the navbar for identity pages. Provide the name of the item which is supposed to be highlighted in the navbar.
*/

import PropTypes from "prop-types";
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
    border: 1px solid ${props => props.theme.pastelColors.grey};
    background-color: ${props => props.theme.mainColors.white};
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

MainContent.propTypes = {
    contentTitle: PropTypes.string,
    componentRight: PropTypes.element,
    tablePage: PropTypes.bool,
    identityActive: PropTypes.string,
    settingsActive: PropTypes.string,
    className: PropTypes.string
}

export default withTheme(MainContent)
