import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";

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

const SettingsNavbarItem = styled(Link)`
  position: relative;
  height: 100%;
  text-decoration: none;
  font-family: "Open Sans";
  font-size: 1rem;
  color: ${(props) => props.theme.navbar.color};
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
    color: ${(props) => props.theme.mainColors.blue};
    ${ActivePageMarker} {
      background-color: ${(props) => props.theme.mainColors.blue};
    }
  }
`;

/**
 * Returns the SettingsNavbar component. Shows the navbar in the MainContent component on pages related to settings in the organisation UI.
 * @param {string} [settingsActive] - Specifies the menu item to be highlighted. Example usage <IdentityNavbar settingsActive="General" />
 * @returns {ReactElement} - The SettingsNavbar component.
 */
const SettingsNavbar = ({ settingsActive }) => {
  return (
    <Container>
      <SettingsNavbarItem
        to="/org/settings/general"
        className={settingsActive === "General" ? "active" : ""}
      >
        <span>General</span>
        <ActivePageMarker />
      </SettingsNavbarItem>
      <SettingsNavbarItem
        to="/org/settings/security"
        className={settingsActive === "Security" ? "active" : ""}
      >
        <span>Security</span>
        <ActivePageMarker />
      </SettingsNavbarItem>
      <SettingsNavbarItem
        to="/org/settings/users"
        className={settingsActive === "Users" ? "active" : ""}
      >
        <span>Users</span>
        <ActivePageMarker />
      </SettingsNavbarItem>
      <SettingsNavbarItem
        to="/org/settings/roles"
        className={settingsActive === "Roles" ? "active" : ""}
      >
        <span>Roles</span>
        <ActivePageMarker />
      </SettingsNavbarItem>
    </Container>
  );
};

export default withTheme(SettingsNavbar);
