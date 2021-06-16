// Contains code for the password strength meter

/*
props:
confidInfoFieldRef -> reference to the input field to which this component is linked.
*/

import React, {useEffect, useRef} from 'react'
import zxcvbn from "zxcvbn" // Password strength determiner
import styled, {withTheme} from "styled-components"

const Div = styled.div`
    margin-left: 0.5rem;
`;

const Pre = styled.pre`
    text-align: left;
    margin: 0.5rem 0.5rem;
    font-family: "Open Sans";
    font-weight: "normal";
    font-size: 1rem;

`;

const Score = styled.span`
    font-family: "Poppins";
    font-weight: "bold";
    font-size: 1rem;
    letter-spacing: 0.1rem;
`;


const PWStrengthMeter = ({theme, confidInfoFieldRef}) => {
    const strengthMeterRef = useRef(null) // Reference to the span element which contains the strength score for the entered password
    const strength = {
        0: "-",
        1: "--",
        2: "---",
        3: "----",
        4: "-----"
    }

    useEffect(() => {
        if(confidInfoFieldRef.current !== null) {
            let password = confidInfoFieldRef.current
            let text = strengthMeterRef.current
            const strengthMeterHandler = () => {
                let val = password.value;
                let result = zxcvbn(val);
            
                // Update the text indicator
                if(val !== "") {
                    text.innerHTML =  "<strong>"+strength[result.score]+"</strong>"; 
                }
                else {
                    text.innerHTML = "";
                }
            }
        
            password.addEventListener("input", strengthMeterHandler);
            return () => {
                password.removeEventListener("input", strengthMeterHandler)
            }
        }
    })
    
    return (
        <Div>
            <Pre>Password Strength:    <Score ref={strengthMeterRef}></Score></Pre>
        </Div>
        
    )
}

export default withTheme(PWStrengthMeter)
