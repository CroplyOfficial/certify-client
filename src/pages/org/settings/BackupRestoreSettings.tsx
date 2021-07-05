import {useState} from 'react';
import styled, { withTheme } from 'styled-components';
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
} from "../../../components/ui";

const BackupRestoreSettings = ({theme}) => {
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="Backup/Restore" settingsActive="Backup/Restore">
                    backup/restore
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(BackupRestoreSettings)
