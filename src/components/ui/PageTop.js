import styled, {withTheme} from "styled-components"
import {useSelector} from "react-redux"

import {LongInput} from "./"
import {
    BellHollow,
    BellFilled
} from "../assets/icons"

const Container = styled.div`
    padding: 0.75rem 0;
    width: 85%;
    float: right;
    height: calc(6vh + 20px);
    background-color: ${props => props.theme.mainColors.white};
    display: flex;
    position: relative;
    box-shadow: 10px 12px 33px -22px rgb(0 0 0 / 24%);
    transition: width 0.5s;
    z-index: 2;

    &.menuCollapsed {
        width: 95vw;
        transition: width 0.5s;
    }
`;

const SearchBar = styled(LongInput)`
    margin: 0 2rem;
    width: 75%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

const NotifBell = styled.div`
    position: absolute;
    right: 8rem;
    top: 50%;
    transform: translateY(-50%);
    svg {
        margin-top: 0.1rem;
        width: 2rem;
        cursor: pointer;
    }
`;

const ProfilePicture = styled.div`
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0.2rem 0;
    width: 3.5rem;
    height: 3.5rem;
    right: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${props => props.theme.pastelColors.grey};
    color: ${props => props.theme.mainColors.grey};
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
`;

/**
 * Returns the PageTop component consisting of the search bar, notification bell and profile picture. This component appears on all org and user pages.
 * @param {object} theme - To receive the theme from the parent component.
 * @returns {ReactElement} - The PageTop component.
 */
const PageTop = ({theme}) => {
    const menuCollapsed = useSelector(state => state.menuCollapsed)

    /*
    Varibale to contain the text "menuCollapsed" when the menu is collapsed and an empty string
    when it isn't. This wil be used to provide elements the menuCollapsed class when it the menu is
    collapsed.
    */
    let menuCollapsedClass = menuCollapsed ? "menuCollapsed" : ""

    let notifExists = false // Variable to determine whether the user has any notifications or not.
    return (
        <Container className={menuCollapsedClass}>
            <SearchBar placeholder="Search for a Credential or Application" btnText="SEARCH" />
            <NotifBell>
                {
                    notifExists ?
                    <BellFilled fill={theme.mainColors.grey} /> :
                    <BellHollow fill={theme.mainColors.grey} />
                }
            </NotifBell>
            <ProfilePicture>A</ProfilePicture>
        </Container>
    )
}

export default withTheme(PageTop)
