import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
    Button
} from "../../../components/ui";

const SecuritySettingsOrg = ({theme}) => {

    const saveSettingsBtn = (
        <Button primary btnColor={theme.mainColors.darkBlue}>SAVE SETTINGS</Button>
    );
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent 
                    contentTitle="Security Settings" 
                    settingsActive="Security"
                    componentRight={saveSettingsBtn}
                >
                    security
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(SecuritySettingsOrg)
