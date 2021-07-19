import styled from 'styled-components'
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

import { colorLightLevel } from '../functions/componentFunctions'
import {
    Home,
    Directory,
    Contact,
    Register
} from "../assets/icons"
import { ReactElement } from 'react'

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
            color: #89C7F3;
            font-weight: 800;
            div {
                visibility: visible;
                opacity: 1;
            }
        }
        .activePageMarker {
            background-color: #89C7F3;
        }
    }
    &:hover {
        background-color: ${colorLightLevel("#E0E0E0", 10)};
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


/**
 * Returns the MenuPublic component which appears on all public pages.
 * @param {Ref} menuRef - The reference to this component. 
 * @param {Function} toggleModal - The function to show/hide the contact modal on the public pages. 
 * @param {string} [active] - Specifies the menu item to be highlighted. Example usage <MenuPublic active="Home" /> 
 * @returns {ReactElement} - The MenuPublic component.
 */
const MenuPublic = ({menuRef, toggleModal, active}) => {

    return (
        <MenuBase ref={menuRef}>
            <MenuItem to="/public" className={`${active === "Home" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Home" ? <Home width="1.3rem" fill="#89C7F3" /> : <Home />}
                    <div>Home</div>
                </span>
            </MenuItem>
            <MenuItem to="/public/directory" className={`${active === "Directory" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Directory" ? <Directory width="1.3rem" fill="#89C7F3" /> : <Directory />}                    
                    <div>Directory</div>
                </span>
            </MenuItem>
            <MenuItem to="/user/register" className={`${active === "Register" ? "active" : ""}`}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Register" ? <Register width="1.3rem" fill="#89C7F3" /> : <Register />}
                    <div>Register</div>
                </span>
            </MenuItem>
            <MenuItem className={`${active === "Contact" ? "active" : ""}`} onClick={toggleModal}>
                <ActivePageMarker className="activePageMarker" />
                <span>
                    {active === "Contact" ? <Contact width="1.3rem" fill="#89C7F3" /> : <Contact />}
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
