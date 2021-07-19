import styled, {withTheme} from "styled-components";
import {Link} from 'react-router-dom';
import { ReactElement } from "react";

const Container = styled.div`
    height: 3.5rem;
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

/**
 * Returns the IdentityNavbar component. Shows the navbar in the MainContent component on pages related to Identity in the organisation UI.
 * @param {string} [identityActive] - Specifies the menu item to be highlighted. Example usage <IdentityNavbar identityActive="Dashboard" />
 * @returns {ReactElement} - The IdentityNavbar component.
 */
const IdentityNavbar = ({identityActive}) => {
    return (
        <Container>
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
        </Container>
    );
};

export default withTheme(IdentityNavbar);