// Contains code for the main content div on a page.
/*
props:
contentTitle -> The heading that appears for the main content
componentRight -> A ReactJS component that should be aligned to the right of the contentTitle
tablePage -> Add this prop if the page contains a table of records
identityActive -> Add this prop if you want to display the navbar for identity pages. Provide the name of the item which is supposed to be highlighted in the navbar.
*/

import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import styled, {css, withTheme} from 'styled-components';
import { useHistory } from "react-router-dom";

import {ArrowLeft} from "../assets/icons";
import {H1} from "./";

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

const MainContentDiv = styled.div`
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

const IdentityContentDiv = styled(MainContentDiv)`
    padding: 0;
`;

const IdentityNavbar = styled.div`
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 13%);
`;

const ActivePageMarker = styled.div`
    height: 0.5rem;
    border-radius: 3px 3px 0 0;
    margin: 0;
    width: 100%;
    bottom: 0;
`;

const IdentityNavbarItem = styled(Link)`
    position: relative;
    height: 100%;
    text-decoration: none;
    font-family: 'Open Sans';
    font-size: 1rem;
    color: ${props => props.theme.mainColors.grey};
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    span {
        display: grid;
        place-items: center;
        height: 100%;
    }
    &.active {
        font-weight: bold;
        color: ${props => props.theme.mainColors.blue};
        ${ActivePageMarker} {
            background-color: ${props => props.theme.mainColors.blue};
        }
    }
`;

const IdentityContent = styled(MainContentDiv)`
    border: none;
    background: none;
    height: calc(100% - 50px);
`;


const MainContent = ({theme, componentRight, className, contentTitle, tablePage, identityActive, children}) => {
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
                identityActive ? 
                <IdentityContentDiv>
                    <IdentityNavbar>
                        <IdentityNavbarItem
                            to="/org/identity/dashboard"
                            className={identityActive === "Dashboard" ? "active" : ""}
                        >
                            <span>Dashboard</span>
                            <ActivePageMarker />
                        </IdentityNavbarItem>
                        <IdentityNavbarItem
                            to="/org/identity/scan"
                            className={identityActive === "Scan" ? "active" : ""}
                        >
                            <span>Scan</span>
                            <ActivePageMarker />
                        </IdentityNavbarItem>
                        <IdentityNavbarItem 
                            to="/org/identity/profilesList"
                            className={identityActive === "Profiles List" ? "active" : ""}
                        >
                            <span>Profiles List</span>
                            <ActivePageMarker />
                        </IdentityNavbarItem>
                    </IdentityNavbar>
                    <IdentityContent className={className}>
                        {children}
                    </IdentityContent>
                </IdentityContentDiv>:
                <MainContentDiv className={className} tablePage={tablePage}>
                    {children}
                </MainContentDiv>
            }
        </>
    )
}

MainContent.propTypes = {
    contentTitle: PropTypes.string,
    componentRight: PropTypes.element,
    tablePage: PropTypes.bool,
    className: PropTypes.string
}

export default withTheme(MainContent)
