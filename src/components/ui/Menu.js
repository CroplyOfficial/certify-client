// Contains code for the menu
/*
props:
active -> The name of the menu item which should be marked active. e.g. on the dashboard page, the Menu component should be typed this way: <Menu active="Dashboard" />
*/

import React from 'react'
import styled, {withTheme} from 'styled-components'
import PropTypes from "prop-types"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"

import {toggleMenuState} from "../../actions"
import {ReactComponent as CertifyLogo} from "../assets/logo.svg"
import {
    DoubleChevronBoxed,
    DashboardFilled,
    DashboardHollow,
    ApplicationsFilled,
    ApplicationsHollow,
    CredentialsFilled,
    CredentialsHollow,
    UsersFilled,
    UsersHollow,
    HistoryFilled,
    HistoryHollow,
    SettingsFilled,
    SettingsHollow,
    IdFilled,
    IdHollow,
    Logout
} from "../assets/icons"

const MenuBase = styled.div`
    position: fixed;
    height: 100%;
    overflow: hidden;
    border-radius: 0 0 20px 0;
    width: 15%;
    transition: width 0.5s;
    box-shadow: 12px 0px 33px -22px rgb(0 0 0 / 24%);

    &.menuCollapsed {
        width: 5vw;
        transition: width 0.5s;
    }

    @media only screen and (max-width: 800px) {
        &{
            display:none;
        }
    }
`;

const LogoDiv = styled.div`
    font-family: 'Poppins';
    font-size: 1.4rem;
    color: ${props => props.theme.mainColors.darkBlue};
    margin: 0.5rem 1.5rem;
    margin-bottom: 0;
    height: 3.5rem;
    display: flex;
    svg {
        min-width: 40px;
        max-width: 2rem;
    }
    div {
        margin: 0.7rem auto;
        margin-left: 0.5rem;
    }

    &.menuCollapsed {
        margin: 0.5rem 1rem;
    }
    div.menuCollapsed {
        display: none;
    }
`;

const MenuChevron = styled.div`
    margin: 1rem auto;
    margin-right: 2rem;
    cursor: pointer;
    width: fit-content;
    transition: all 0.5s;
    &.menuCollapsed {
        transform: rotate(180deg);
        margin-left: 1.2rem;
        transition: all 0.5s;
    }
`;

const MenuItem = styled.div` 
    font-family: 'Open Sans';
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    cursor: pointer;
    height: 1.8rem;
    display: flex;
    text-decoration: none;
    position: relative;
    a {
        text-decoration: none;
        margin-left: 1rem;
        color: ${props => props.theme.mainColors.grey};
        display: flex;
        svg {
            width: 1.2rem;
            transition: all 0.3s ease-out;
        }
        div {
            display: grid;
            place-items: center;
            margin-left: 0.5rem;
            background: none !important;
            transition: visibility 0.1s, opacity 0.5s linear;
        }
    }
    &.active {
        a {
            color: ${props => props.theme.mainColors.blue};
            font-weight: bold;
            div {
                visibility: visible;
                opacity: 1;
            }
        }
        .activePageMarker {
            background-color: ${props => props.theme.mainColors.blue};
        }
    }
    &.menuCollapsed {
        a {
            margin-left: 1.2rem;
            svg {
                width: 1.3rem;
                transition: all 0.3s ease-in;
            }
            div {
                visibility: hidden;
                opacity: 0;
                transition: visibility 0.1s, opacity 0.5s linear;
            }
        }
    }
`;

const ActivePageMarker = styled.div`
    position: absolute;
    width: 0.5rem;
    height: 1.5rem;
    border-radius: 0 3px 3px 0;
    height: 100%;
    margin: 0;

`;

const LogoutDiv = styled.div`
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 1rem;
    margin-left: 1.4rem;
    color: ${props => props.theme.mainColors.grey};
    bottom: 3vh;
    position: absolute;
    cursor: pointer;
    display: flex;
    div {
        margin: 0.1rem 0;
        margin-left: 0.5rem;
        visibility: visible;
        opacity: 1;
        transition: visibility 0.1s, opacity 0.5s linear;

    }
    svg {
        transition: width 0.3s;
    }
    &.menuCollapsed {
        margin-left: 1.4rem;
        svg {
            width: 2rem;
            transition: width 0.3s;
        }
        div {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.1s, opacity 0.5s linear;
        }
    }
`;


const Menu = ({theme, active}) => {
    const menuCollapsed = useSelector(state => state.menuCollapsed)

    let menuCollapsedClass = menuCollapsed ? "menuCollapsed" : "" 

    const dispatch = useDispatch()

    /* Function to expand/collapse the menu */
    const toggleMenu = () => {
        dispatch(toggleMenuState())
    }

    return (
        <MenuBase className={menuCollapsedClass}>
            <LogoDiv className={menuCollapsedClass}>
                <CertifyLogo />
                <div className={menuCollapsedClass}>CERTIFY</div>
            </LogoDiv>
            <MenuChevron className={menuCollapsedClass} onClick={toggleMenu}>
                <DoubleChevronBoxed width="24" />
            </MenuChevron>
            <MenuItem className={`${ menuCollapsedClass} ${active === "Dashboard" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/dashboard">
                    {active === "Dashboard" ? <DashboardFilled /> : <DashboardHollow />}
                    <div>Dashboard</div>
                </Link>
            </MenuItem>
            <MenuItem className={`${menuCollapsedClass} ${active === "Credentials" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/credentials">
                    {active === "Credentials" ? <CredentialsFilled /> : <CredentialsHollow />}                    
                    <div>Credentials</div>
                </Link>
            </MenuItem>
            <MenuItem className={`${menuCollapsedClass} ${active === "Applications" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/applications">
                    {active === "Applications" ? <ApplicationsFilled /> : <ApplicationsHollow />}
                    <div>Applications</div>
                </Link>
            </MenuItem>
            <MenuItem className={`${menuCollapsedClass} ${active === "History" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/history">
                    {active === "History" ? <HistoryFilled /> : <HistoryHollow />}
                    <div>History</div>
                </Link>
            </MenuItem>
            <MenuItem className={`${menuCollapsedClass} ${active === "Identity" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/identity">
                    {active === "Identity" ? <IdFilled /> : <IdHollow />}
                    <div>Identity</div>
                </Link>
            </MenuItem>
            <MenuItem className={`${menuCollapsedClass} ${active === "Users" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/users">
                    {active === "Users" ? <UsersFilled /> : <UsersHollow />}
                    <div>Users</div>
                </Link>
            </MenuItem>
            <MenuItem className={`${menuCollapsedClass} ${active === "Settings" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <Link to="/settings">
                    {active === "Settings" ? <SettingsFilled /> : <SettingsHollow />}
                    <div>Settings</div>
                </Link>
            </MenuItem>
            <LogoutDiv className={menuCollapsedClass}>
                <Logout />
                <div>LOG OUT</div>
            </LogoutDiv>
        </MenuBase>
    )
}

Menu.propTypes = {
    active: PropTypes.string.isRequired
}

export default withTheme(Menu)
