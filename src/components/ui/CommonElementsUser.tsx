import {
    PageTop,
    MenuUser
} from "."

const CommonElementsUser = ({menuActive=""}) => {
    return (
        <>
            <PageTop />
            <MenuUser active={menuActive} />
        </>
    )
}

export default CommonElementsUser
