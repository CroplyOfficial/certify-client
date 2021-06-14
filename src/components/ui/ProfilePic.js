import React from 'react'
import styled, {withTheme} from 'styled-components'
import PropTypes from "prop-types"

import {ReactComponent as UploadPic} from "../assets/uploadProfilePic.svg"

const Div = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 30px;
    background: #C8D7E3;
    border: 1px solid #E5E5E5;
    display: grid;
    place-items: center;
    cursor: pointer;
   
    div {
        display: grid;
        place-items: center;
        svg {
            width: 5rem;
            height: 5rem;
            fill: white;
            margin-bottom: 1rem;
        }
        div {
            color: white;
            font-family: "Open Sans";
            font-size: 1.3rem;
            font-weight: bold;
        }
    }
`;

const ProfilePic = ({noUploadImgPic}) => {
    return (
        <Div>
            {
                noUploadImgPic ? 
                "" :
                <div>
                    <UploadPic />
                    <div>UPLOAD PROFILE IMAGE</div>
                </div>
            }
        </Div>
    )
}

ProfilePic.propTypes = {
    noUploadImgPic: PropTypes.bool
}

export default withTheme(ProfilePic)
