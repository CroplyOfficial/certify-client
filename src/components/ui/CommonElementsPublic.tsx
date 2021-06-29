import {useEffect, useRef, useState} from 'react'
import {
    PageTopPublic,
    MenuPublic
} from "."
import ContactFormPopup from '../../pages/public/home/ContactFormPopup';

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
                <ContactFormPopup closeModal={toggleContactModal} />: 
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
