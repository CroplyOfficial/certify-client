import { useState } from 'react';
import styled from 'styled-components';

import backgroundLight from "../../components/assets/Background-light.svg";
import { 
    PageTopPublic,
    DirProfileHolder
} from '../../components/ui';

const PageContainer = styled.div`
    height: 100%;
    margin: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;    
    display: grid;
    font-family: "Open Sans";
`;

const ProfilesHolder = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    padding: 3rem 6rem;
`;

const Directory = () => {

    const [profiles] = useState([
        {
            businessName: 'Brecon Mountain Farm',
            businessType: 'Sheep Farm',
            businessCity: 'Brecon',
            businessCountry: 'Wales'
        },
        {
            businessName: 'Brecon Mountain Farm',
            businessType: 'Sheep Farm',
            businessCity: 'Brecon',
            businessCountry: 'Wales'
        },
        {
            businessName: 'Brecon Mountain Farm',
            businessType: 'Sheep Farm',
            businessCity: 'Brecon',
            businessCountry: 'Wales'
        },
        {
            businessName: 'Brecon Mountain Farm',
            businessType: 'Sheep Farm',
            businessCity: 'Brecon',
            businessCountry: 'Wales'
        },
        {
            businessName: 'Brecon Mountain Farm',
            businessType: 'Sheep Farm',
            businessCity: 'Brecon',
            businessCountry: 'Wales'
        },
        {
            businessName: 'Brecon Mountain Farm',
            businessType: 'Sheep Farm',
            businessCity: 'Brecon',
            businessCountry: 'Wales'
        },
    ])

    return (
        <PageContainer>
            <PageTopPublic />
            <ProfilesHolder>
                {
                    profiles.map(profileData => (
                            <DirProfileHolder profileData={profileData} />
                        )
                    )
                }
            </ProfilesHolder>
        </PageContainer>
    )
}

export default Directory