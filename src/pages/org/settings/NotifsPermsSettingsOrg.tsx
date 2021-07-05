import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
} from "../../../components/ui";

const NotifsPermsSettingsOrg = ({theme}) => {
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Notifications/Permissions" settingsActive="Notifications/Permissions">
                    Notifications/Permissions
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(NotifsPermsSettingsOrg)
