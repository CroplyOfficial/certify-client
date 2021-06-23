import { useState } from 'react';
import styled from 'styled-components';

import backgroundLight from "../../components/assets/Background-light.svg";
import { 
    PageTopPublic,
} from '../../components/ui';
import ProfilePic from '../../components/ui/ProfilePic';
import {
    TickBadge,
    CrossBadge 
} from '../../components/assets/icons';

const PageContainer = styled.div`
    height: 100%;
    margin: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;    
    display: grid;
    background: url( ${backgroundLight}) center no-repeat;
    background-size: 105%;
    padding-bottom: 2rem;
    font-family: "Open Sans";

`;
const ProfileImg = styled(ProfilePic)`
    place-self: center;
    height: 15rem;
    width: 15rem;    
`;
const GeneralInfoDiv = styled.div`
    background-color: #5D7586;
    height: 20rem;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 8rem;
    .generalInfo {
        display: grid;
        height: fit-content;
        grid-template-columns: 3fr 6fr;
        grid-column-gap: 5rem;
        .infoText {
            display: grid;
            grid-template-rows: 1fr 2fr 1fr;
            margin: 1.5rem 0;
            h1, h2, h3 {
                margin: 0;

                color: #fff;
            }
            h1 {
                font-size: 2rem;
                font-weight: bold;
            }
            h2 {
                font-weight: 600;
            }
            h3 {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                font-weight: normal;
            }
        }
    }
 `;

const DetailedInfoDiv = styled.div`
    padding: 3rem 8rem 0 8rem;
    display: grid;
    grid-template-columns: 6fr 3fr;
    grid-column-gap: 4rem;
`;

const InfoContainer = styled.div`
    border-top: 6px solid #5D7586;
    box-sizing: border-box;
    background-color: #fff;
    height: fit-content;
    box-shadow: 0px 0px 20px 6px rgba(0,0,0,0.1);
    padding: 1.5rem;
    min-height: 13rem;
    margin-bottom: 2rem;
    h3 {
        color: #5D7586;
        margin: 0;
    }
    .content {
        font-size: 1rem;
        margin-top: 1rem;
        color: #353535;
    }
`;

const CredentialInfoHolder = styled.div`
    background-color: #8295A2;
    color: #fff;
    border-radius: 30px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    padding: 1rem;
    margin-bottom: 2rem;
    div:nth-of-type(1) {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        h3, h4, h5 {
            display: flex;
            align-items: center;
            margin: 0;
        }
        h4 {
            font-weight: 600;
        }
        h5 {
            font-weight: normal;
        }
    } 
    div:nth-of-type(2) {
        display: flex;
        justify-content: flex-end;
    }
`;

const Profile = () => {
    const [userData] = useState({
        userProfileDesc: "Nestled on the beautiful hillsides of the Brecon Beacons National Park, Wales, Brecon Mountain Farm are an award winning upland sheep farm specialising in traditional all natural wool produce. With almost 100 years in the business, the fourth generation farm still operate traditional, natural farming methods, to help preserve the natural Welsh landscape through organic and regenerative farming practices. ",
        licenseHolderID: "did:iota:abcd12243434",
        userBusinessName: "Breacon Mountain Farm",
        userBusinessType: "Sheep Farm",
        userCity: "Brecon",
        userCountry: "Wales",
        userProfileURL: "/breconmountainfarm",
        userCredentials: [
            {
                credentialName: "Swiss Agricultural License",
                verified: true,
                verifier: "Swiss Farmers Union"
            },
            {
                credentialName: "Swiss Agricultural License",
                verified: true,
                verifier: "Swiss Farmers Union"
            },
            {
                credentialName: "Swiss Agricultural License",
                verified: true,
                verifier: "Swiss Farmers Union"
            },
            {
                credentialName: "Swiss Agricultural License",
                verified: false,
                verifier: "Swiss Farmers Union"
            }
        ]
    });

    return (
        <PageContainer>
            <PageTopPublic />
            <GeneralInfoDiv>
                <div className="generalInfo">
                    <ProfileImg noUploadImgPic />
                    <div className="infoText"> 
                        <h1>{userData.userBusinessName}</h1>
                        <h2>{userData.userBusinessType}</h2>
                        <h3>{userData.userCity}, {userData.userCountry}</h3>
                    </div>
                </div>
            </GeneralInfoDiv>
            <DetailedInfoDiv>
                <div>
                    <InfoContainer>
                        <h3>Profile Description</h3>
                        <div className="content">
                            {userData.userProfileDesc}
                        </div>
                    </InfoContainer>
                    <InfoContainer>
                        <h3>Verified Documents</h3>
                        <div className="content">
                        </div>
                    </InfoContainer>
                </div>
                <div>
                    {userData.userCredentials.map((credential, index) => {
                       return ( 
                            <CredentialInfoHolder key={index}>
                                <div>
                                    <h3>{credential.credentialName}</h3>
                                    {credential.verified ?
                                        <>
                                            <h5>Verified by</h5>
                                            <h4>{credential.verifier}</h4>
                                        </>: 
                                        <h5>Not verified</h5>

                                    }
                                </div>
                                <div>
                                    {credential.verified ? <TickBadge width="2.5rem" /> : <CrossBadge width="2.5rem" />}
                                </div>
                            </CredentialInfoHolder>
                       )
                    })}
                </div>
            </DetailedInfoDiv>
        </PageContainer>
    )
}

export default Profile
