// Contains code for the org dashboard menu
/*
props:
active -> The name of the menu item which should be marked active. e.g. on the dashboard page, the Menu component should be typed this way: <Menu active="Dashboard" />
*/

import styled from 'styled-components'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

import { colorLightLevel } from '../functions/componentFunctions'
import {
    DashboardFilled,
    DashboardHollow,
    ApplicationsFilled,
    ApplicationsHollow,
    CredentialsFilled,
    CredentialsHollow,
    HistoryFilled,
    HistoryHollow,
} from "../assets/icons"

const MenuBase = styled.div`
    position: fixed;
    height: 100%;
    overflow: hidden;
    border-radius: 20px 0 0 20px;
    width: 20%;
    transition: right 0.5s;
    box-shadow: 12px 0px 33px -22px rgb(0 0 0 / 24%);
    background-color: #fff;
    right: -20vw;
    z-index: 1;
    padding-top: 17vh;

    &.menuShow {
        right: 0;
        transition: right 0.5s;
    }

    @media only screen and (max-width: 800px) {
        &{
            display:none;
        }
    }
`;

const MenuItem = styled(Link)` 
    font-family: 'Open Sans';
    font-weight: 200;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    height: 2.5rem;
    display: flex;
    text-decoration: none;
    position: relative;
    a, span {
        text-decoration: none;
        margin-left: 1rem;
        color: #000;
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
        a, span {
            color: ${props => props.theme.mainColors.blue};
            font-weight: 800;
            div {
                visibility: visible;
                opacity: 1;
            }
        }
        .activePageMarker {
            background-color: ${props => props.theme.mainColors.blue};
        }
    }
    &:hover {
        background-color: ${props => colorLightLevel(props.theme.pastelColors.grey, 10)};
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

const MenuPublic = ({menuRef, toggleModal, active}) => {

    return (
        <MenuBase ref={menuRef}>
            <MenuItem to="/public" className={`${active === "Home" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Dashboard" ? <DashboardFilled /> : <DashboardHollow />}
                    <div>Home</div>
                </span>
            </MenuItem>
            <MenuItem to="/public/directory" className={`${active === "Directory" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Directory" ? <CredentialsFilled /> : <CredentialsHollow />}                    
                    <div>Directory</div>
                </span>
            </MenuItem>
            <MenuItem to="/user/register" className={`${active === "Register" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Register" ? <ApplicationsFilled /> : <ApplicationsHollow />}
                    <div>Register</div>
                </span>
            </MenuItem>
            <MenuItem className={`${active === "Contact" ? "active" : ""}`} onClick={toggleModal}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Contact" ? <HistoryFilled /> : <HistoryHollow />}
                    <div>Contact</div>
                </span>
            </MenuItem>
        </MenuBase>
    )
}

MenuPublic.propTypes = {
    active: PropTypes.string.isRequired
}

export default MenuPublic
