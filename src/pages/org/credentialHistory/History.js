import {useState} from 'react'
import {useSelector} from "react-redux"
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Table,
    Checkbox,
    ShowOptions
} from "../../../components/ui/"
import {Filters} from "../../../components/assets/icons"

const entries = [
    {
        username: "hello",
        userId: "ref",
        created: "hksjdfsl",
        name: "he",
        tangleId: "gdgsgs"
    },
    {
        username: "hello",
        userId: "ref",
        created: "hksjdfsl",
        name: "he",
        tangleId: "gdgsgs"
    },
    {
        username: "hello",
        userId: "ref",
        created: "hksjdfsl",
        name: "he",
        tangleId: "gdgsgs"
    },
]

const EditColHeading = styled.div`
    margin-top: 0.5rem;
`;

/**
 * Returns the History component which is the page that 
 * displays the credential history of the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component. 
 * @returns {ReactElement} - The History component.
 */
const History = ({theme}) => {
    const sidebarCollapsed = useSelector(state => state.sidebarCollapsed)
    const [checkboxState, setCheckboxState] = useState([entries.map((a) => false)]) // sets initial value of all elements of the state to false
    
     /**
     * Handles what happens when a checkbox is clicked.
     * @param {Event} e - The onClick event which is fired when a checkbox is clicked.
     */
    const handleCheckboxChange = (e) => {
        let parentTrTag = e.target.parentElement.parentElement
        let index = parentTrTag.key
        let newState = [...checkboxState]
        newState[index] = !newState[index]
        setCheckboxState(newState => newState)
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
                    {entry.username}
                </td>
                <td>
                    {entry.userId}
                </td>
                <td>
                    {entry.created}
                </td>
                <td>
                    {entry.name}
                </td>
                <td>
                    {entry.tangleId}
                </td>
                <td>
                    <ShowOptions options={{"Edit": hello}} optionListStyling={`margin-left: -4rem`} />
                </td>
            </tr>
        )
        rowIndex++
    }
    return (
        <>
        <CommonElementsOrg menuActive="History" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent tablePage contentTitle="Credential History">
                    <Table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Username</td>
                                <td>User ID</td>
                                <td>Created</td>
                                <td>Name</td>
                                <td>Tangle ID</td>
                                <td><EditColHeading><Filters width="1.5rem" fill={theme.table.filters} /></EditColHeading></td>
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

export default withTheme(History)
