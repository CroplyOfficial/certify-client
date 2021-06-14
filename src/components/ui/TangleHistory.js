// Contains code for the tangle history table.

import React from 'react'
import styled, {withTheme} from "styled-components"

import H1 from "./H1"
import Table from "./Table"
import {View} from "../assets/icons"

const Div = styled.div`
    float: right;
    width: 25%;
    padding-right: 2rem;
`;

const TangleHistoryTable = styled(Table)`
    width: 100%;
    tr {
        svg {
            float: right;
            cursor: pointer;
        }
    }
`;

const TangleHistory = ({theme}) => {
    let history = ['Jake', 'Jon', 'Thruster','John']
    return (
        <Div>
            <H1>Tangle History</H1>
            <TangleHistoryTable>
                <tbody>
                    <tr><td colSpan="2">Latest Records</td></tr>
                        {history.map((name, index) => {
                            return (
                                <tr key={ index }>
                                    <td>{name}</td>
                                    <td><View stroke={theme.mainColors.darkBlue} /></td>
                                </tr>
                            )
                        })}
                </tbody>
            </TangleHistoryTable>
        </Div>
    )
}

export default withTheme(TangleHistory)
