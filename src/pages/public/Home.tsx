import styled from 'styled-components';

import cropCollectingWomen from "../../components/assets/crop-collecting-women.jpg";
import oldWoman from "../../components/assets/old-woman.jpg";
import identityMap from "../../components/assets/identity-map.jpg";
import { 
    H1,
    Button,
    CommonElementsPublic
} from '../../components/ui';
import { IotaLogo } from '../../components/assets/icons';

const PageContainer = styled.div`
    height: 100%;
    margin: 0;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;    
    display: grid;
    font-family: "Open Sans";
`;

const PicBgDiv = styled.div`
    height: 40rem;
    color: #fff;
    display: flex;
    align-items: center;
    div {
        margin-left: 10%;
        .heading {
            font-family: "Poppins";
            width: 100%;
        }
        .text {
            font-family: "Open Sans";
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 22px #000000;
        }
        .btn {
            margin-top: 2rem;
        }
    }
`;

const CropCollectionBgDiv = styled(PicBgDiv)`
    background: url( ${cropCollectingWomen}) center no-repeat;
    background-size: 120%;
`;

const OldWomanDiv = styled(PicBgDiv)`
    background: url( ${oldWoman}) center no-repeat;
    background-size: 120%;
`;

const IdentityMap = styled.div`
    display: grid;
    place-items: center;
    padding: 2rem 0;
    img {
        width: 60%;
    }
    button {
        margin-top: 2rem;
    }
`;

const DivHeading = styled.div`
    display: flex;
    justify-content: center;
`;

const Footer = styled.footer`
    display: grid;
    place-items: center;
    padding: 1rem 0;
    background-color: #fff;
    box-shadow: 0px 0px 50px rgba(130, 149, 162, 0.15);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #5D7586;
        font-family: "Open Sans";
        .logo {
            width: fit-content;
            margin-right: 0.5rem;
        }
    }
`;

/**
 * Returns the Home component which is the home page.
 * @returns {ReactElement} - The Home component.
 */
const Home = () => {
    return (
        <PageContainer>
            <CommonElementsPublic menuActive="Home" />
            <CropCollectionBgDiv>
                <div>
                    <div className="heading">
                        <h1>Verification for Everyone.<br /> Everywhere.</h1>
                    </div>
                    <div className="text">
                        Create your verified digital identity.<br />
                        Build Opportunity.<br />
                        Build Equality.<br />
                        Build Trust.<br />
                    </div>
                    <div className="btn">
                        <Button primary btnColor="#B1975C">GET VERIFIED NOW</Button>
                    </div>
                </div>
            </CropCollectionBgDiv>
            <DivHeading>
                <H1>Identity for Organizations</H1>
            </DivHeading>
            <OldWomanDiv>
                <div>
                    <div className="heading">
                        <h1>Decentralized directory<br />of businesses</h1>
                    </div>
                    <div className="text">
                    • Secure individual or business identity<br />
                    • Organisation verified credentials<br />
                    • Privacy compliant by design<br />
                    • Open source protocols<br />
                    </div>
                    <div className="btn">
                        <Button primary btnColor="#B1975C">CREATE A PROFILE</Button>
                    </div>
                </div>
            </OldWomanDiv>
            <DivHeading>
                <H1>A Global Identity Network</H1>
            </DivHeading>
            <IdentityMap>
                <img src={identityMap} alt="Identity Map" />
                <Button primary btnColor="#B1975C">GET VERIFIED NOW</Button>
            </IdentityMap>
            <Footer>
                <div>
                    <div className="logo">
                        <IotaLogo width="3rem" />
                    </div>
                    <div>
                        Powered by IOTA Identity
                    </div>
                </div>
            </Footer>
        </PageContainer>
    )
}

export default Home
