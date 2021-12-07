import styled, {css, withTheme} from 'styled-components';
import {useSelector} from "react-redux";

const Container = styled.div`
    width: 75%;
    padding: 0 2rem;
    ${props => props.orgDashboard && css`
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 0.5rem;
        margin-right: 1rem; 
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 30rem);

        div:nth-of-type(1) {
            grid-row: 1 / span 1;
            grid-column: 1 / span 2;
        }
        div:nth-of-type(2) {
            grid-row: 2 / span 1;
            grid-column: 1 / span 1;
        }
        div:nth-of-type(3) {
            grid-row: 2 /span 1;
            grid-column: 2 / span 1;

        }
        &::-webkit-scrollbar {
            background: none;
            width:8px;
        }

        &.menuCollapsed {
            transition: width 0.5s; 
        }
        /**********************
        For the custom scrollbar 
        ***********************/

        scrollbar-width: thin; //for Firefox
        scrollbar-color: red black;
        /* background of the scrollbar except button or resizer */
        &::-webkit-scrollbar-track {
            background: none;
            border-radius: 16px;

        }

        /* scrollbar itself */
        &::-webkit-scrollbar-thumb {
            background-color:#babac0;
            border-radius:16px;
        }

        /* set button(top and bottom of the scrollbar) */
        &::-webkit-scrollbar-button {
            display:none
        }
    `}
`;

/**
 * Returns the MainContentContainer component. This component contains the MainContent component.
 * @param {string} className - CSS class of this component.
 * @param {ReactElement} children - Children of this component.
 * @param {boolean} orgDashboard - Specifies whether the page is the organization dashboard or not for special styling on that page. Apply this prop to specify that the page is the organization dashboard.
 * @returns {ReactElement} - The MainContentContainer component
 */
const MainContentContainer = ({className, orgDashboard, children}) => {
    const menuCollapsed = useSelector(state => state.menuCollapsed)
    const menuCollapsedClass = menuCollapsed ? "menuCollapsed" : ""
    return (
        <Container orgDashboard={orgDashboard} className={className ? (className + " " + menuCollapsedClass) : menuCollapsedClass}>
            {children}
        </Container>
    )
}

export default withTheme(MainContentContainer)
