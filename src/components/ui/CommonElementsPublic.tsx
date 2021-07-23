import {useEffect, useRef, useState} from 'react'
import {
    PageTopPublic,
    MenuPublic
} from "."
import ContactFormPopup from '../../pages/public/ContactFormPopup';

/**
 * Returns the ContactFormPopup, PageTopPublic and MenuPublic components, all three of which are common in all public pages, as one component CommonElementsPublic.
 * @param {string} [menuActive] - Specifies the menu item to be highlighted. Example usage <CommonElementsPublic menuActive="Home" /> 
 * @returns {ReactElement} - The CommonElementsPublic component.
 */
const CommonElementsPublic = ({menuActive=""}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactModalVisible, setContactModalVisible] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        if(menuRef.current.classList.contains("menuShow")) {
            menuRef.current.classList.remove("menuShow");
            setMenuOpen(false);
        }
        else {
            menuRef.current.classList.add("menuShow")
            setMenuOpen(true);
        }
    }
    useEffect(() => {
        if(menuRef) {
            window.onscroll = () => {
                if(menuRef.current.classList.contains("menuShow")) {
                    menuRef.current.classList.remove("menuShow");
                    setMenuOpen(false);
                }
            }
        }
    });
    const toggleContactModal = () => {
        if(contactModalVisible)
            setContactModalVisible(false);
        else
            setContactModalVisible(true);
    }
    return (
        <>
            {
                contactModalVisible ? 
                <ContactFormPopup closePopupFunc={toggleContactModal} />: 
                ""
            }
            <PageTopPublic toggleMenu={toggleMenu} menuOpen={menuOpen} />
            <MenuPublic 
                toggleModal={toggleContactModal} 
                menuRef={el => menuRef.current = el} 
                active={contactModalVisible ? "Contact" : menuActive} 
            />
        </>
    )
}

export default CommonElementsPublic
