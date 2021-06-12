// Contains code for the password strength meter

import React, {useEffect} from 'react'
import zxcvbn from "zxcvbn" // For password strength meter
import styled, {withTheme} from "styled-components"

const Div = styled.div`
    bottom: 1.2rem;
    position: absolute;
    left: 0.5rem;
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


const PWStrengthMeter = ({theme, confidInfoFieldRef, strengthMeterRef}) => {
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
