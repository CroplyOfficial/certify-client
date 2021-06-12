import React from 'react'
import styled, {withTheme} from 'styled-components'
import {useSelector} from "react-redux"
import backgroundLight from "../assets/Background-light.svg"
import backgroundDark from "../assets/Background-dark.svg"


const Div = styled.div`
    width: 85%;
    height: calc(100vh - 150px);
    background: url(${props => props.theme.mode === "light" ? backgroundLight : backgroundDark}) center no-repeat;
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

const PageContentContainer = ({className, children}) => {
    const menuCollapsed = useSelector(state => state.menuCollapsed)
    const menuCollapsedClass = menuCollapsed ? "menuCollapsed" : ""
    return (
        <Div className={className ? (className + " " + menuCollapsedClass) : menuCollapsedClass}>
            {children}
        </Div>
    )
}

export default withTheme(PageContentContainer)
