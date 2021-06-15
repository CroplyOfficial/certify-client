// Contains code for the a long input component which consists of a long input bar and a button.
/*
props:
placeholder -> placeholder for the input bar
btnText -> text for the button
*/

import React from 'react'
import PropTypes from "prop-types"
import styled, { withTheme } from 'styled-components'

import {Button} from "./"

const Container = styled.div`
    display: flex;
    width: 50rem;
`;

const Input = styled.input`
    border-radius: 30px 0 0 30px;
    padding: 1rem 1rem 1rem 1rem;
    box-sizing: border-box;
    height: 3rem;
    font-family: "Open Sans";
    font-weight: normal;
    color: ${props => props.theme.mainColors.black};
    width: 75%;
    box-shadow: none;
    border: 1px solid ${props => props.theme.pastelColors.grey};
    border-right: none;
    font-size: 1rem;
    cursor: text;
    outline: none;
    float: left;
    &::placeholder {
        font-size: 1rem;
        color: ${props => props.theme.mainColors.grey};
        opacity: 1;
    }
    &:hover { 
        border-color: ${props => props.theme.mainColors.darkBlue};
        border-width:2px;
    }

    &:focus { 
        border-color: ${props => props.theme.mainColors.blue};
        border-width:2px;
    }

    &::placeholder {
       color: ${props => props.theme.mainColors.grey} 
    }
`;

const SearchButton = styled(Button)`
    border-radius: 0 30px 30px 0 !important;
    min-width: 25%;
    max-width: 50px;
    border: 1px solid;
    height: 3rem;
`;

const LongInput = ({theme, className, placeholder, btnText}) => {
    return (
        <Container className={className ? className : ""}>
            <Input placeholder={placeholder} />
            <SearchButton btnColor={theme.mainColors.darkBlue}>{btnText}</SearchButton>
        </Container>
    )
}


// The className prop is required for extending styles with styled-components
LongInput.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
}


export default withTheme(LongInput)
