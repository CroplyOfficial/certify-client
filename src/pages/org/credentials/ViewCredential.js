import {useState, useRef} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button,
    InputText,
    Select,
    Hr
} from "../../../components/ui"

const CustomMainContent = styled(MainContent)`
    .inputFields {
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(9, 1fr);
        grid-row-gap: 2rem;
        fieldset:nth-of-type(1) {
            width: 100%;
            grid-column: 1 / span 9;
            max-width: none;
        }

        fieldset:nth-of-type(2) {
            width: 100%;
            grid-row: 2 / span 1;
            grid-column: 1 / span 4;
        }

        fieldset:nth-of-type(3) {
            width: 100%;
            grid-row: 2 / span 1;
            grid-column: 6 / span 4;
            display: flex;
            justify-self: right;
        }
        .durationInput {
            grid-row: 3 / span 1;
            grid-column: 1  / span 4;
            display: flex;
            fieldset:nth-of-type(1) {
                width: 50%;
                margin: 0;
                input {
                    border-radius: 30px 0 0 30px;
                }
            }
            fieldset:nth-of-type(2) {
                width: 50%;
                margin: 0;
                float: left;
                select {
                    border-radius: 0  30px 30px 0;
                }
            }
        }
    }

    h2 {
        font-family: "Open Sans";
        font-weight: "normal";
        color: ${props => props.theme.mainColors.grey};
    }
    .addCustomFields {
        .customFieldDiv {
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            width: 100%;
            grid-row: auto / span 1;
            margin-bottom: 2rem;
            & > * {
                width: 100%;
            }
            fieldset:nth-of-type(1) {
                grid-column: 1 / span 4;
            }
            fieldset:nth-of-type(2) {
                grid-column: 6 / span 4;
            }
        }
    }
    .addFieldBtn {
        display: flex;
        margin: 2rem 0;
        width:100%;
        justify-content: flex-end;
    }
`;

/**
 * Returns the ViewCredential component which is the page that 
 * contains the form to make a edit/view a particular credential for 
 * the organization.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @returns {ReactElement} - The ViewCredential component.
 */
const ViewCredential = ({theme}) => {
    const customFieldNameRefs = useRef([]);
    const customFieldTypeRefs = useRef([]);
    customFieldNameRefs.current =  Array(3).fill().map((_, i) => customFieldNameRefs.current[i]);
    customFieldTypeRefs.current =  Array(3).fill().map((_, i) => customFieldTypeRefs.current[i]);

    const [credentialData] = useState({
        credentialName: "XYZ",
        credentialRefCode: "13131313",
        credentialType: "ABCD",
        credentialDuration: "29",
        credentialDurationPeriod: "Day(s)",
        customFields: [
            {
                name: "Something",
                type: "Text"
            },
            {
                name: "Something",
                type: "Text"
            },
            {
                name: "Something",
                type: "Text"
            }
        ]
    })

    const [userInput] = useState(
        {
            credentialName: "",
            credentialRefCode: "",
            credentialType: "",
            credentialDuration: "",
            credentialDurationPeriod: ""
        }
    )
    
    let initCustomFields = []
    credentialData.customFields.forEach((field, index) => {
        initCustomFields.push(
            <div key={index} className="customFieldDiv">
                <InputText inputRef={customFieldNameRefs.current[index]} placeholder="Custom Field Name" defaultValue={field.name} />
                <Select inputRef={customFieldTypeRefs.current[index]} placeholder="Field Type" optionList={["Text", "Numerical", "Date"]} defaultValue={field.type} />
            </div>
        )
    })
    const [customFields, setCustomFields] = useState(initCustomFields)

    const addCustomField = () => {
        let newState = [...customFields]
        newState.push(
            <div key={newState.length} className="customFieldDiv">
                <InputText inputRef={el => customFieldNameRefs.current[newState.length-1] = el} placeholder="Custom Field Name" />
                <Select inputRef={el => customFieldTypeRefs.current[newState.length-1] = el} placeholder="Field Type" optionList={["Text", "Numerical", "Date"]} />
            </div>
        )
        setCustomFields(newState)
    }

    const saveTemplateBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE TEMPLATE</Button>
    )
    return (
        <>
        <CommonElementsOrg menuActive="Credentials" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="New Credential Template" componentRight={saveTemplateBtn}>
                    <div className="inputFields">
                        <InputText placeholder="Credential Name" required />
                        <InputText placeholder="Credential Reference Code" required />
                        <Select placeholder="Credential Type" optionList={["License","Certificate", "Ticket"]} required />
                        <div className="durationInput">
                            <InputText placeholder="Duration" />
                            <Select placeholder="Period" optionList={["Day(s)", "Month(s)", "Year(s)"]} />
                        </div>
                    </div>
                    <Hr />
                    <h2>Add Custom Fields</h2>
                    <div className="addCustomFields">
                        {customFields}
                    </div>
                    <div className="addFieldBtn">
                        <Button btnColor={theme.mainColors.darkBlue} onClick={addCustomField}>+ ANOTHER FIELD</Button>
                    </div>

                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        
        </>
    )
}
export default withTheme(ViewCredential)
