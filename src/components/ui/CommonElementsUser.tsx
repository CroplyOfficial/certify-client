import {
    PageTop,
    MenuUser
} from "."

/**
 * Returns the PageTop and MenuUser components, both of which are common in all user pages, as one component CommonElementsUser.
 * @param {string} [menuActive] - Specifies the menu item to be highlighted. Example usage <CommonElementsUser menuActive="Applications" /> 
 * @returns {ReactElement} - The CommonElementsUser component.
 */
const CommonElementsUser = ({menuActive=""}) => {
    return (
        <>
            <PageTop />
            <MenuUser active={menuActive} />
        </>
    )
}

export default CommonElementsUser
