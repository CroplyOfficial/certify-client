import {useState} from 'react'
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
import DuplicateCredentialPopup from './DuplicateCredentialPopup'
import IssueCredentialPopup from './IssueCredentialPopup'
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
        name: "hello1",
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
 * Returns the Credentials component which is the page that 
 * displays the credentials of the organization.
 * @param {Object} theme - To receive the theme from the CustomThemeProvider component. 
 * @returns {ReactElement} - The Credentials component.
 */
const Credentials = ({theme}) => {

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

    let credentialNames = [];

    const [credentialToDuplicate, setCredentialToDuplicate] = useState({})

    const [duplicateCredentialPopupVisible, setDuplicateCredentialPopupVisible] = useState(false)
    /**
     * Causes the DuplicateCredentialPopup component to become visible
     * and specifies the credential that is to be duplicated. 
     * @param {Object} credential - The credential that is to be duplicated. 
     */
    const toggleDuplicateCredentialPopup = (credential) => {
        setDuplicateCredentialPopupVisible(!duplicateCredentialPopupVisible)
        setCredentialToDuplicate(credential)
    }

    const [issueCredentialPopupVisible, setIssueCredentialPopupVisible] = useState(false)
    /**
     * Causes the IssueCredentialPopup component to become visible.
     */
    const toggleIssueCredentialPopup = () => {
        setIssueCredentialPopupVisible(!issueCredentialPopupVisible)
    }

    for(let entry of entries) {
        credentialNames.push(entry.name)
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
                    <ShowOptions options={{"Duplicate": () => toggleDuplicateCredentialPopup(entry)}} optionListStyling={`margin-left: -4rem`} />
                </td>
            </tr>

        )
        rowIndex++
    }
    const buttons = (
        <>
        <Button btnColor={theme.btnPriBg} onClick={() => window.location = "/org/credentials/new"}>+ NEW CREDENTIAL</Button>
        <Button primary btnColor={theme.btnSecBg} onClick={toggleIssueCredentialPopup}>+ ISSUE CREDENTIAL</Button>
        </>
    )

    return (
        <>
        <CommonElementsOrg menuActive="Credentials" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent tablePage contentTitle="Credentials" componentRight={buttons}>
                    <Table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <td>Reference</td>
                                <td>Created</td>
                                <td>Type</td>
                                <td>Status</td>
                                <td><EditColHeading><Filters width="1.5rem" fill={theme.table.filters} /></EditColHeading></td>
                            </tr>
                           {rows}
                        </tbody>
                    </Table>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        {
            duplicateCredentialPopupVisible ? 
            <DuplicateCredentialPopup closePopupFunc={toggleDuplicateCredentialPopup} credential={credentialToDuplicate} /> :
            null
        }
        {
            issueCredentialPopupVisible ?
            <IssueCredentialPopup closePopupFunc={toggleIssueCredentialPopup} credentialNames={credentialNames} /> :
            null
        }
        </>
    )
}

export default withTheme(Credentials)
