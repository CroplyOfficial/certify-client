import styled, {css, withTheme} from 'styled-components'
import PropTypes from "prop-types"

import {ReactComponent as UploadPic} from "../assets/upload-profile-pic.svg"

const Div = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 30px;
    background: ${props => props.theme.profilePic.bg};
    border: ${props => props.theme.profilePic.border};
    display: grid;
    place-items: center;
    cursor: pointer;
   
    div {
        display: grid;
        place-items: center;
        svg {
            width: 5rem;
            height: 5rem;
            ${props => props.noText && css`
                margin-bottom: 1rem;
            `}
        }
        div {
            color: white;
            font-family: "Open Sans";
            font-size: 1.3rem;
            font-weight: bold;
        }
    }
`;

const ProfilePic = ({noUploadImgPic, noText, className}) => {
    return (
        <Div className={className}>
            {
                noUploadImgPic ? 
                "" :
                <div>
                    <UploadPic fill="white"/>
                    {
                        noText ?
                        "":
                        <div>UPLOAD PROFILE IMAGE</div>
                    }
                </div>
            }
        </Div>
    )
}

ProfilePic.propTypes = {
    noUploadImgPic: PropTypes.bool,
    noText: PropTypes.bool
}

export default withTheme(ProfilePic)
