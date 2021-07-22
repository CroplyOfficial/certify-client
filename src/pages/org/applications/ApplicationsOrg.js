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
    Button,
    ShowOptions,
} from "../../../components/ui"
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

/**
 * Returns the ApplicationsOrg component which is the page that
 * displays the applications of a particular organisation.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @returns {ReactElement} - The ApplicationsOrg component
 */
const ApplicationsOrg = ({theme}) => {
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
                    <ShowOptions options={{"Edit": hello}} optionListStyling={`margin-left: -4rem`} />
                </td>
            </tr>
        )
        rowIndex++
    }
    const newAppBtn = <Button primary btnColor={theme.mainColors.darkBlue} onClick={() => window.location.href="/org/applications/new"}>+ NEW APPLICATION</Button>
    return (
        <>
        <CommonElementsOrg menuActive="Applications" />
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

export default withTheme(ApplicationsOrg)
