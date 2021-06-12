import React from 'react'
import styled, {withTheme} from 'styled-components'
import {useSelector} from "react-redux"


const Div = styled.div`
    width: 75%;
    padding: 0 2rem;
    &.dashboard {
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
    }
`;

const MainContentContainer = ({className, children}) => {
    const menuCollapsed = useSelector(state => state.menuCollapsed)
    const menuCollapsedClass = menuCollapsed ? "menuCollapsed" : ""
    return (
        <Div className={className ? (className + " " + menuCollapsedClass) : menuCollapsedClass}>
            {children}
        </Div>
    )
}

export default withTheme(MainContentContainer)
