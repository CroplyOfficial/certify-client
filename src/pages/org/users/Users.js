import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Table,
    Checkbox,
    Button,
    ShowOptions,
    CommonElementsOrg
} from "../../../components/ui/"
import {Filters} from "../../../components/assets/icons"

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

const Users = ({theme}) => {
    const [checkboxState, setCheckboxState] = useState([entries.map((a) => false)]) // sets initial value of all elements of the state to false
    

    const handleCheckboxChange = (e) => {
        let parentTrTag = e.target.parentElement.parentElement
        let index = parentTrTag.key
        let newState = [...checkboxState]
        newState[index] = !newState[index]
        setCheckboxState(newState)
    }
    
    let rows = [];
    let rowIndex = 1;
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
                    <ShowOptions options={{"Edit": hello}} optionListStyling={`margin-left: -4rem`} />
                </td>
            </tr>
        )
        rowIndex++
    }
    const newUserBtn = <Button primary btnColor={theme.mainColors.darkBlue} onClick={() => window.location.href = "/org/users/new"}>+ NEW USER</Button>
    return (
        <>
        <CommonElementsOrg menuActive="Users" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent tablePage contentTitle="Users" componentRight={newUserBtn}>
                    <Table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Username</td>
                                <td>User ID</td>
                                <td>Created</td>
                                <td>Verfication</td>
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

export default withTheme(Users)
