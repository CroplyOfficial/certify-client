import React, {useState} from 'react'
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
    DuplicateCredentialPopup
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

const Credentials = ({theme}) => {

    const [checkboxState, setCheckboxState] = useState([entries.map((a) => false)]) // sets initial value of all elements of the state to false
    const handleCheckboxChange = (e) => {
        let parentTrTag = e.target.parentElement.parentElement
        let index = parentTrTag.key
        let newState = [...checkboxState]
        newState[index] = !newState[index]
        setCheckboxState(newState => newState)
    }
    
    let rows = [];
    let rowIndex = 1;

    const [credentialToDuplicate, setCredentialToDuplicate] = useState({})

    const [popupVisible, setPopupVisible] = useState(false)
    const togglePopup = (credential) => {
        setPopupVisible(!popupVisible)
        setCredentialToDuplicate(credential)
    }

    for(let entry of entries) {
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
                    <RecordOptions optionList={{"Duplicate": () => togglePopup(entry)}} />
                </td>
            </tr>
        )
        rowIndex++
    }
    const buttons = (
        <>
        <Button btnColor={theme.mainColors.darkBlue} onClick={() => window.location = "/credentials/new"}>+ NEW CREDENTIAL</Button>
        <Button primary btnColor={theme.mainColors.darkBlue} onClick={() => window.location = "/credentials/issue"}>+ ISSUE CREDENTIAL</Button>
        </>
    )
    return (
        <>
        <Menu active="Credentials" />
        <PageTop />
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
                                <td><EditColHeading><Filters width="1.5rem" fill="#666666" /></EditColHeading></td>
                            </tr>
                           {rows}
                        </tbody>
                    </Table>
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        {
            popupVisible ? 
            <DuplicateCredentialPopup closePopupFunc={togglePopup} credential={credentialToDuplicate} /> :
            null
        }
        </>
    )
}

export default withTheme(Credentials)
