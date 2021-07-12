import { ReactElement } from "react"
import {
    PageTop,
    MenuOrg
} from "."

/**
 * Returns the PageTop and MenuOrg components, both of which are common in all organization pages, as one component CommonElementsOrg.
 * @param {string} [menuActive] - Specifies the menu item to be highlighted. Example usage <CommonElementsOrg menuActive="Dashboard" /> 
 * @returns {ReactElement} - The CommonElementsOrg component.
 */
const CommonElementsOrg = ({menuActive=""}) => {
    return (
        <>
            <PageTop />
            <MenuOrg active={menuActive} />
        </>
    )
}

export default CommonElementsOrg
