import styled, {withTheme} from 'styled-components';
import PropTypes from 'prop-types'
import { colorLightLevel } from '../functions/componentFunctions';

import {
    ChevronRight
} from '../assets/icons'

const Container = styled.div`
    display: grid;
    box-sizing: border-box;
    border-radius: 30px;
    font-family: "Open Sans";
    font-weight: bold;
    grid-template-columns: 1fr 3fr 3fr 1fr;
    grid-column-gap: 1rem;
    width: 100%;
    height: 6rem;
    padding: 1rem;
    background-color: ${props => colorLightLevel(props.theme.pastelColors.grey, 9)};
`;

const Div1 = styled.div`
    display: grid;
    place-items: center;
`;

const ProfilePicture = styled.div`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    display: grid;
    place-items: center;
    background-color: ${props => props.theme.pastelColors.grey};
    font-size: 1.5rem;
    color: ${props => props.theme.mainColors.grey};
`;

const Div2 = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.mainColors.darkBlue};
    font-size: 1.2rem;
`;

const Div3 = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    div:nth-of-type(1) {
        color: ${props => props.theme.mainColors.darkBlue};
        font-size: 0.8rem;
    }
    div:nth-of-type(2) {
        color: #666666;
        font-size: 1rem;
    }
`;

const Div4 = styled.div`
    display: grid;
    place-items: center;
    svg {
        cursor: pointer;
    }
`;

/**
 * Returns the IdentityProfileHolder component which displays the data of a specified Identity profile.
 * @param {object} theme - To receive the theme from the parent component. 
 * @param {object} profileData - Contains the data of the profile to be displayed. 
 * @returns {ReactElement} - The IdentityProfileHolder component.
 */
const IdentityProfileHolder = ({theme, profileData}) => {

    return (
        <Container>
            <Div1>
                <ProfilePicture>
                    {profileData.profileName[0]}
                </ProfilePicture>
            </Div1>
            <Div2>
                {profileData.profileName}
            </Div2>
            <Div3>
                <div>
                    DATE CREATED
                </div>
                <div>
                    {profileData.dateCreated}
                </div>
            </Div3>
            <Div4>
                <ChevronRight width="2rem" fill={theme.mainColors.grey} />
            </Div4>
        </Container>
    );
}

IdentityProfileHolder.propTypes = {
    profileData: PropTypes.object
};

export default withTheme(IdentityProfileHolder)