import styled, {withTheme} from 'styled-components'
import {useSelector} from "react-redux"


const Container = styled.div`
    width: 85%;
    height: calc(100vh - 110px);
    background: ${props => props.theme.pageBg} center no-repeat;
    background-size: 105%;
    float: right;
    transition: width 0.5s; 
    overflow-y: hidden;
    display: flex;
    padding-top: 1rem;

    &.menuCollapsed {
        width: 95vw;
        transition: width 0.5s; 
    }
`;

/**
 * Returns the PageContentContainer component. This component contains the TangleHistory and the MainContentContainer components.
 * @param {string} className - CSS class of this component.
 * @param {ReactElement} children - Children of this component.
 * @returns {ReactElement} - The PageContentContainer component.
 */
const PageContentContainer = ({className, children}) => {
    const menuCollapsed = useSelector(state => state.menuCollapsed)
    const menuCollapsedClass = menuCollapsed ? "menuCollapsed" : ""
    return (
        <Container className={className ? (className + " " + menuCollapsedClass) : menuCollapsedClass}>
            {children}
        </Container>
    )
}

export default withTheme(PageContentContainer)
