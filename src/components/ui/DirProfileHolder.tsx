import styled from 'styled-components';
import {Link} from 'react-router-dom';

import ProfilePic from './ProfilePic';
import { ChevronRight } from '../assets/icons';
import { ReactElement } from 'react';

const Container = styled.div`
    border-radius: 20px;
    box-sizing: border-box;
    background-color: #5D7586;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 3fr 6fr;
    grid-column-gap: 2rem;
    padding: 2rem;
    .infoText {
        margin: 1rem 0;
        display: grid;
        grid-template-rows: 2fr 2fr 1fr 2fr;
        h1, h2, h3 {
            margin: 0;
            color: #fff;
        }
        h1 {
            font-size: 1.5rem;
            font-weight: bold;
        }
        h2 {
            font-size: 1.3rem;
            font-weight: 600;
        }
        h3 {
            font-size: 1rem;

            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            font-weight: normal;
    
        }
        .viewProfileLink {
            width: 100%;
            font-size: 1rem;
            color: #fff;
            text-decoration: none;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .icon {
                margin-left: 0.5rem;
                display: grid;
                place-items: center;
            }
        }
    }
`;

const ProfileImg = styled(ProfilePic)`
    place-self: center;
    width: 13vw;
    height: 13vw;
`;
/**
 * Returns the DirProfileHolder component which displays the data of a specified profile on the public directory page.
 * @param {Object} theme - To receive the theme from the parent component. 
 * @param {Object} profileData - Contains the data of the profile to be displayed. 
 * @returns {ReactElement} - The DirProfileHolder component.
 */
const DirProfileHolder = ({profileData}) => {
    return (
        <Container>
            <ProfileImg noUploadImgPic />
            <div className="infoText"> 
                <h1>{profileData.businessName}</h1>
                <h2>{profileData.businessType}</h2>
                <h3>{profileData.businessCity}, {profileData.businessCountry}</h3>
                <Link className="viewProfileLink" to="">
                    <div>VIEW PROFILE</div>
                    <div className="icon">
                        <ChevronRight width="1.5rem" />
                    </div>
                </Link>
            </div>
        </Container>
    )
}

export default DirProfileHolder