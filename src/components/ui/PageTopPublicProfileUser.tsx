import styled, {withTheme} from "styled-components"
import {LongInput} from "."
import {ReactComponent as CertifyLogo} from "../assets/logo.svg"
import {
    BellHollow,
    BellFilled
} from "../assets/icons"

const Container = styled.div`
    padding: 0.75rem 0;
    width: 100%;
    float: right;
    height: calc(6vh + 20px);
    background-color: ${props => props.theme.mainColors.white};
    display: flex;
    position: relative;
    box-shadow: 10px 12px 33px -22px rgb(0 0 0 / 24%);
    transition: width 0.5s;
`;

const LogoDiv = styled.div`
    font-family: 'Poppins';
    font-size: 1.4rem;
    color: ${props => props.theme.mainColors.darkBlue};
    margin: 0 2vw;
    height: 3.5rem;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
        min-width: 40px;
        max-width: 2rem;
    }
    div {
        margin: 0.7rem auto;
        margin-left: 0.5rem;
    }
`;


const SearchBar = styled(LongInput)`
    margin-left: 20vw;
    width: 60%;
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
    background-color: #E0E0E0;
    color: #A1A1A1;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
`;

/**
 * Returns the PageTopPublicProfileUser component which is displayed at the top of the ViewPublicProfile page component.
 * @returns {ReactElement} - The PageTopPublicProfileUser component.  
 */
const PageTopPublicProfileUser = () => {

    /*
    Varibale to contain the text "menuCollapsed" when the menu is collapsed and an empty string
    when it isn't. This wil be used to provide elements the menuCollapsed class when it the menu is
    collapsed.
    */
    let notifExists = false // Variable to determine whether the user has any notifications or not.
    return (
        <Container>
            <LogoDiv>
                <CertifyLogo />
                <div>CERTIFY</div>
            </LogoDiv>
            <SearchBar placeholder="Search for a Credential or Application" btnText="SEARCH" />
            <NotifBell>
                {
                    notifExists ?
                    <BellFilled fill="#A1A1A1" /> :
                    <BellHollow fill="#A1A1A1" />
                }
            </NotifBell>
            <ProfilePicture>A</ProfilePicture>
        </Container>
    )
}

export default withTheme(PageTopPublicProfileUser)
