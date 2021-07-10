import {
    PageTop,
    MenuOrg
} from "."

const CommonElementsOrg = ({menuActive=""}) => {
    return (
        <>
            <PageTop />
            <MenuOrg active={menuActive} />
        </>
    )
}

export default CommonElementsOrg
