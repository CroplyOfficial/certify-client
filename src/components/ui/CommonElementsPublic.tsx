import {useEffect, useRef, useState} from 'react'
import {
    PageTopPublic,
    MenuPublic
} from "."

const CommonElementsPublic = ({menuActive="", toggleModal=() => {}}) => {
    const [menuOpen, setMenuOpen] = useState(false);
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
    return (
        <>
            <PageTopPublic toggleMenu={toggleMenu} menuOpen={menuOpen} />
            <MenuPublic toggleModal={toggleModal} menuRef={el => menuRef.current = el} active={menuActive} />
        </>
    )
}

export default CommonElementsPublic
