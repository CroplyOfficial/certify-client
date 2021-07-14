import styled from "styled-components"
import {LongInput} from "."
import {ReactComponent as CertifyLogo} from "../assets/logo.svg"
import {
    HamburgerMenuLines,
    Cross
} from "../assets/icons"
import Button from "./Button"

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
    display: grid;
    grid-template-columns: auto 20fr 5fr 2fr;
    grid-column-gap: 2rem;
    z-index: 2;
`;

const LogoDiv = styled.div`
    font-family: 'Poppins';
    font-size: 1.4rem;
    color: ${props => props.theme.mainColors.darkBlue};
    margin: 0 2vw;
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
`;

const SearchBar = styled(LongInput)`
    display: flex;
    justify-self: center;
    align-self: center;
    width: 100%;
`;

const LoginBtn = styled(Button)`
    display: flex;
    justify-self: center;
    align-self: center;
    max-width: 180px;
`;

const MenuToggle = styled.div`
    display: flex;
    justify-self: flex-start;
    align-self: center;
    width: fit-content;
    svg {
        cursor: pointer;
    }
`;

/**
 * Returns the PageTopPublic component consisting of the Certify logo and text, search bar, the login button and hamburger menu. This component appears on all org and public pages.
 * @param {Function} toggleMenu - The function to show/hide the MenuPublic component.
 * @param {boolean} menuOpen - The state which determines whether the MenuPublic component is shown or not.
 * @returns {ReactElement} - The PageTopPublic component.
 */
const PageTopPublic = ({toggleMenu, menuOpen}) => {
     return (
        <Container>
            <LogoDiv>
                <CertifyLogo />
                <div>CERTIFY</div>
            </LogoDiv>
            <SearchBar placeholder="Search for a Credential or Application" btnText="SEARCH" />
            <LoginBtn primary btnColor="#8295A2" onClick={() => window.location.href="/user/register"}>LOGIN</LoginBtn>
            <MenuToggle>
                {
                    menuOpen ?
                    <Cross width="3.5rem" onClick={toggleMenu} fill="#8295A2" /> :
                    <HamburgerMenuLines width="2.5rem" onClick={toggleMenu} />
                }
            </MenuToggle>
        </Container>
    )
}

export default PageTopPublic
