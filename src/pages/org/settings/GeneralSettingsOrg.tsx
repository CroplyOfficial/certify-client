import {useState} from 'react'
import styled, { withTheme } from 'styled-components'
import {
    CommonElementsOrg,
    TangleHistory,
    PageContentContainer,
    MainContentContainer,
    MainContent,
} from "../../../components/ui"

const GeneralSettingsOrg = ({theme}) => {
    return (
        <>
        <CommonElementsOrg menuActive="Settings" />
        <PageContentContainer>
            <MainContentContainer>
                <MainContent contentTitle="General Settings" settingsActive="General">
                    general
                </MainContent>
            </MainContentContainer>
            <TangleHistory />
        </PageContentContainer>
        </>
    )
}

export default withTheme(GeneralSettingsOrg)
