import styled, {withTheme} from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
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

const SettingsNavbarItem = styled(Link)`
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

const SettingsNavbar = ({settingsActive}) => {
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
                to="/org/settings/backupRestore"
                className={settingsActive === "Backup/Restore" ? "active" : ""}
            >
                <span>Backup/Restore</span>
                <ActivePageMarker />
            </SettingsNavbarItem>
            <SettingsNavbarItem 
                to="/org/settings/notifsPerms"
                className={settingsActive === "Notifications/Permissions" ? "active" : ""}
            >
                <span>Notifications/Permission</span>
                <ActivePageMarker />
            </SettingsNavbarItem>
        </Container>
    );
};

export default withTheme(SettingsNavbar);