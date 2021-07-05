import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
} from "../../../components/ui";

const SecuritySettingsOrg = ({theme}) => {
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Security Settings" settingsActive="Security">
                    security
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(SecuritySettingsOrg)
