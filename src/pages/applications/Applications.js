import React, {useState} from 'react'
import {useSelector} from "react-redux"
import styled, { withTheme } from 'styled-components'
import {
    Menu, 
    PageTop,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Table,
    Checkbox,
    Button,
    RecordOptions,
} from "../../components/ui"
import {Filters} from "../../components/assets/icons"

const entries = [
    {
        name: "hello",
        reference: "ref",
        created: "hksjdfsl",
        type: "he",
        status: "ACTIVE"
    },
    {
        name: "hello",
        reference: "ref",
        created: "hksjdfsl",
        type: "he",
        status: "ACTIVE"
    },
    {
        name: "hello",
        reference: "ref",
        created: "hksjdfsl",
        type: "he",
        status: "ACTIVE"
    }
]

const EditColHeading = styled.div`
    margin-top: 0.5rem;
`;

const Applications = ({theme}) => {
    const sidebarCollapsed = useSelector(state => state.sidebarCollapsed)
    const [checkboxState, setCheckboxState] = useState([entries.map((a) => false)]) // sets initial value of all elements of the state to false
    const handleCheckboxChange = (e) => {
        let parentTrTag = e.target.parentElement.parentElement
        let index = parentTrTag.key
        let newState = [...checkboxState]
        newState[index] = !newState[index]
        setCheckboxState(newState => newState)
    }
    
    let rows = [];
    var rowIndex = 1;
    const hello =() => {
        console.log("hello")
    }
    for(var entry of entries) {
        rows.push(
            <tr key={rowIndex}>
                <td>
                    <Checkbox checked={checkboxState[rowIndex]} onChange={handleCheckboxChange} />
                </td>
                <td>
                    {entry.name}
                </td>
                <td>
                    {entry.reference}
                </td>
                <td>
                    {entry.created}
                </td>
                <td>
                    {entry.type}
                </td>
                <td>
                    {
                        entry.status === "ACTIVE" ? <span style={{color: theme.mainColors.green}}>{entry.status}</span> : 
                        (
                            entry.status === "INACTIVE" ?
                            <span style={{color: theme.mainColors.red}}>{entry.status}</span> :
                            <span style={{color: theme.mainColors.yellow}}>{entry.status}</span>
                        )
                    }
                </td>
                <td>
                    <RecordOptions optionList={{"Edit": hello}} />
                </td>
            </tr>
        )
        rowIndex++
    }
    const newAppBtn = <Button primary btnColor={theme.mainColors.darkBlue} onClick={() => window.location.href="/applications/new"}>+ NEW APPLICATION</Button>
    return (
        <>
        <Menu active="Applications" />
        <PageTop />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent tablePage contentTitle="Applications" componentRight={newAppBtn}>
                    <Table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <td>Reference</td>
                                <td>Created</td>
                                <td>Type</td>
                                <td>Status</td>
                                <td><EditColHeading><Filters width="1.5rem" fill="#666666" /></EditColHeading></td>
                            </tr>
                           {rows}
                        </tbody>
                    </Table>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(Applications)
