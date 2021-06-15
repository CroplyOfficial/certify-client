// Contains styling of the table to be used throughout the app

import styled, { withTheme } from "styled-components"

const Table = styled.table`
    border-spacing: 0;
    border-radius: 30px 30px 30px 30px;
    border: 1px solid ${props => props.theme.pastelColors.grey};
    font-family: "Open Sans";
    font-weight: normal;
    font-size: 1.1rem;

    & td {
        padding: 0.5rem 2rem 0.5rem 1rem;
        text-align: left;
    }
    & tr:nth-child(odd) {
        background-color: #F2F4F5;
    }
    & tr:nth-child(even) {
        background-color: #FFFFFF;
    }
    & tr:first-of-type {
        background-color: #DFE3E7;
        font-family: "Poppins";
        color: #666666;
        @-moz-document url-prefix() {
            & {
                background: none;
                td {
                    background-color: #DFE3E7;
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