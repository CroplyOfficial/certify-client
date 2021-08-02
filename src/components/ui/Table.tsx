// Contains styling of the table to be used throughout the app

import styled, { withTheme } from "styled-components"

const Table = styled.table`
    border-spacing: 0;
    border-radius: 30px 30px 30px 30px;
    border: ${props => props.theme.table.border};
    font-family: "Open Sans";
    font-weight: normal;
    font-size: 1.1rem;
    color: ${props => props.theme.table.otherRowsColor};

    & td {
        padding: 0.5rem 2rem 0.5rem 1rem;
        text-align: left;
    }
    & tr {
        height: 3.5rem;
    }
    & tr:nth-child(odd) {
        background-color: ${props => props.theme.table.oddRowBg};
    }
    & tr:nth-child(even) {
        background-color: ${props => props.theme.table.evenRowBg};
    }
    & tr:first-of-type {
        background-color: ${props => props.theme.table.firstRowBg};
        font-family: "Poppins";
        color: ${props => props.theme.table.firstRowColor};
        @-moz-document url-prefix() {
            & {
                background: none;
                td {
                    background-color: ${props => props.theme.table.firstRowBg};
                }
            }
        }
    }
    & tr:first-child td:last-child  {
        border-top-right-radius: 30px;
        
    }
    & tr:first-child td:first-child  {
        border-top-left-radius: 30px;
    }
    & tr:last-child td:first-child {
        border-bottom-left-radius: 30px;
    }

    & tr:last-child td:last-child {
        border-bottom-right-radius: 30px;
    }
`;

export default withTheme(Table)