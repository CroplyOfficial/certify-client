import styled, {withTheme} from 'styled-components'
import PropTypes from "prop-types"
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"

import { colorLightLevel } from '../functions/componentFunctions'
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
import { RootState } from '../../reducers'

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
    margin: 3vh 2vw;
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
        display: grid;
        place-items: center;
        margin: 3vh 1vw;
    }
    div.menuCollapsed {
        display: none;
    }
`;

const MenuChevron = styled.div`
    display: grid;
    margin: 2vh auto;
    margin-bottom: 7vh;
    margin-right: 2rem;
    cursor: pointer;
    width: fit-content;
    transition: all 0.5s;
    &.menuCollapsed {
        margin-right: 0;
        svg {
            margin-bottom: -0.5rem;
        }
        width: 100%;
        place-content: center;
        transform: rotate(180deg);
        transition: all 0.5s;
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

const MenuItem = styled(Link)` 
    text-decoration: none;
    font-family: 'Open Sans';
    font-weight: normal;
    font-size: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    height: 2.5rem;
    display: flex;
    text-decoration: none;
    position: relative;
    span {
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
        span {
            color: ${props => props.theme.mainColors.blue};
            font-weight: bold;
            div {
                visibility: visible;
                opacity: 1;
            }
        }
        ${ActivePageMarker} {
            background-color: ${props => props.theme.mainColors.blue};
        }
    }
    &:hover {
        background-color: ${props => colorLightLevel(props.theme.pastelColors.grey, 10)};
    }
    &.menuCollapsed {
        display: grid;
        span {
            display: grid;
            place-items: center;
            margin: 0;
            svg {
                width: 1.5rem;
                transition: all 0.3s ease-in;
            }
            div {
                visibility: hidden;
                opacity: 0;
                transition: visibility 0.1s, opacity 0.5s linear;
                display: none;

            }
        }
    }
`;

const LogoutDiv = styled.div`
    font-family: 'Open Sans';
    font-weight: normal;
    font-size: 1rem;
    bottom: 6vh;  
    cursor: pointer;
    height: 1.8rem;
    display: flex;
    text-decoration: none;
    position: absolute;
    span {
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
    &.menuCollapsed {
        display: grid;
        width: 100%;
        span {
            display: grid;
            place-items: center;
            margin: 0;
            svg {
                width: 1.5rem;
                transition: all 0.3s ease-in;
            }
            div {
                visibility: hidden;
                opacity: 0;
                transition: visibility 0.1s, opacity 0.5s linear;
                display: none;
            }
        }
    }
`;

/**
 * Returns the MenuOrg component which appears on all organization pages.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @param {string} [active] - Specifies the menu item to be highlighted. Example usage <MenuOrg active="Dashboard" /> 
 * @returns {ReactElement} - The MenuOrg component.
 */
const MenuOrg = ({theme, active}) => {
    const menuCollapsed = useSelector((state: RootState) => state.menuCollapsed)

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
            <MenuItem to="/org/dashboard" className={`${ menuCollapsedClass} ${active === "Dashboard" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "Dashboard" ? <DashboardFilled /> : <DashboardHollow />}
                    <div>Dashboard</div>
                </span>
            </MenuItem>
            <MenuItem to="/org/credentials" className={`${menuCollapsedClass} ${active === "Credentials" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "Credentials" ? <CredentialsFilled /> : <CredentialsHollow />}                    
                    <div>Credentials</div>
                </span>
            </MenuItem>
            <MenuItem to="/org/applications" className={`${menuCollapsedClass} ${active === "Applications" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "Applications" ? <ApplicationsFilled /> : <ApplicationsHollow />}
                    <div>Applications</div>
                </span>
            </MenuItem>
            <MenuItem to="/org/history" className={`${menuCollapsedClass} ${active === "History" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "History" ? <HistoryFilled /> : <HistoryHollow />}
                    <div>History</div>
                </span>
            </MenuItem>
            <MenuItem to="/org/identity/dashboard" className={`${menuCollapsedClass} ${active === "Identity" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "Identity" ? <IdFilled /> : <IdHollow />}
                    <div>Identity</div>
                </span>
            </MenuItem>
            <MenuItem to="/org/users" className={`${menuCollapsedClass} ${active === "Users" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "Users" ? <UsersFilled /> : <UsersHollow />}
                    <div>Users</div>
                </span>
            </MenuItem>
            <MenuItem to="/org/settings/general" className={`${menuCollapsedClass} ${active === "Settings" ? "active" : ""}`}>
                <ActivePageMarker/>
                <span>
                    {active === "Settings" ? <SettingsFilled /> : <SettingsHollow />}
                    <div>Settings</div>
                </span>
            </MenuItem>
            <LogoutDiv className={menuCollapsedClass}>
                <span>
                    <Logout />
                    <div>LOG OUT</div>
                </span>
            </LogoutDiv>
        </MenuBase>
    )
}

MenuOrg.propTypes = {
    active: PropTypes.string.isRequired
}

export default withTheme(MenuOrg)
