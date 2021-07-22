import {useState} from 'react'
import styled, {withTheme} from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Hr,
} from "../../../components/ui"

const CustomMainContent = styled(MainContent)`
    & > * {
        width: 100%;   
    }
    .div1{
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
        grid-gap: 2rem;
    }
    .div2 {
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(2, 1fr);
        grid-gap: 2rem;
        div:last-of-type {
            grid-row: 3 / span 1;
            grid-column: 1 / span 2;
            word-wrap: break-word;
        }
    }
`;

const DataFieldTitle = styled.div`
    font-family: "Open Sans";
    font-size: 1rem;
    color: ${props => props.theme.mainColors.grey};
    font-weight: bold;
    margin-bottom: 1rem;
`;

const DataFieldContent = styled.div`
    font-family: "Open Sans";
    font-size: 1rem;
    color: ${props => props.theme.mainColors.black};
    font-weight: 600;
    padding-left: 1.5rem;
`;

/**
 * Returns the DataField component which contains the a piece of information 
 * about a particular credential.
 * @param {Object} theme - To receive the theme from the parent component.
 * @param {ReactElement} [children] - Specifies the content of the DataFieldContent
 * component inside this component.
 * @param {ReactElement} [title] - Specifies the content of the DataFieldTitle
 * component inside this component.
 * @returns {ReactElement} - The DataField component.
 */
const DataField = ({theme, children, title}) => {
    return (
        <div>
            <DataFieldTitle>{title}</DataFieldTitle>
            <DataFieldContent>{children}</DataFieldContent>
        </div>
    )
}

/**
 * Returns the ViewTransactionTangle component which is the page that 
 * contains information about a particular credential.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @returns {ReactElement} - The ViewTransactionTangle component.
 */
const ViewTransactionTangle = ({theme}) => {
    const [userData] = useState({
        licenseHolderID: "did:iota:123456789abcdefghi",
        credentialName: "Animal Agriculture License",
        appFirstName: "Tom",
        appLastName: "Jones",
        appBusinessName: "Brecon Mountain Farm",
        signedByUser: "Bill Bryson",
        signedByDomain: "certify.com",
        dateCreated: "12/02/2021 - 16:13:35",
        currentStatus: "Valid",
        tangleAddress: "9FNJWLMBECSQDKHQAGDHDPXBMZFMQIMAFAUIQTDECJVGKJBKHLEBVU9TWCTPRJGYORFDSYENIQKBVSYKW9NSLGS9UW"
    })
    return (
        <>
        <CommonElementsOrg menuActive="History" />
        <PageContentContainer>
            <MainContentContainer>
                <CustomMainContent contentTitle="Credential History">
                   <div className="div1">
                        <DataField title="License Holder ID">
                            {userData.licenseHolderID}
                        </DataField>
                        <DataField title="Credential">
                            {userData.credentialName}
                        </DataField>
                        <DataField title="Applicant Name">
                            {userData.appFirstName + " " + userData.appLastName}
                        </DataField>
                        <DataField title="Applicant Business Name">
                            {userData.appBusinessName}
                        </DataField>
                   </div>
                   <Hr />
                   <div className="div2">
                        <DataField title="Signed By User">
                            {userData.signedByUser}
                        </DataField>
                        <DataField title="Signed By Domain">
                            {userData.signedByDomain}
                        </DataField>
                        <DataField title="Date Created">
                            {userData.dateCreated}
                        </DataField>
                        <DataField title="Current Status">
                            {
                                userData.currentStatus === "Valid" ?
                                <span style={{color: theme.mainColors.green}}>{userData.currentStatus}</span> :
                                userData.currentStatus === "Invalid" ?
                                <span style={{color: theme.mainColors.red}}>{userData.currentStatus}</span> :
                                <span style={{color: theme.mainColors.yellow}}>{userData.currentStatus}</span>
                            }
                        </DataField>
                        <DataField title="Tangle Address">
                            {userData.tangleAddress}
                        </DataField>
                   </div>
                </CustomMainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(ViewTransactionTangle)
