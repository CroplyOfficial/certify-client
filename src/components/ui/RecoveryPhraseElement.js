import React from 'react'
import styled, {withTheme} from 'styled-components'

import Button from "./Button"
import { hexToRgb, colorLightLevel } from '../functions/componentFunctions'


const Container = styled.div`
    display: grid;
    grid-template-rows: 45rem 3rem;
    width: fit-content;
`;

const WordsContainer = styled.div`
    background-color: ${props => "rgba("+hexToRgb(props.theme.mainColors.blue)+",0.2)"};
    padding: 0.6rem 0.6rem 0.6rem 0.6rem;
    border-radius: 15px;
    width: fit-content;
    height: fit-content;
`;
const TextBox = styled.div`
    background-color: ${props => "rgba("+hexToRgb(props.theme.mainColors.blue)+",0.2)"};
    margin: 0.3rem 0.3rem 0.3rem 0.3rem;
    border-radius: 20px;
    display: grid;
    place-items: center;
    grid-template-columns: 5.5rem 0rem;
    height: 4.5rem;
    width: 12rem;
    line-height: 3rem;
    font-size: 1rem;

`;

const Number = styled.span`
    color: rgba(255, 255, 255, 0.6);
    font: "Open Sans";
    margin-right: 0.5rem;

`;

const Word = styled.span`
    color: white;
    font: "Open Sans";
    font-weight: bold;
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
`;

const BtnDiv = styled.div`
    display: grid;
    place-items: center;
`;

const RecoveryPhraseElement = () => {
    let recoveryPhraseWords = [
        "hello","hello","hello","hello","hello","hello","hello","hello",
        "hello","hello","hello","hello","hello","hello","hello","hello",
        "hello","hello","hello","hello","hello","hello","hello","hello"
    ]
    let rows = []
    let textBoxes = []

    /*
    3 TextBox components are pushed to the array textBoxes and as soon as textBoxes contains 3 elements, 
    it is wrapped in the Row component and pushed to another array, rows. The array textBoxes is then emptied
    and the loop goes on. So, every element of the array rows contains a Row component with 3 TextBox elements 
    as children 
    */
    for(const [index, word] of recoveryPhraseWords.entries()) {
        let num = index+1
        textBoxes.push(
            <TextBox key={num}>
                <Number>{num+'.'}</Number>
                <Word>{word}</Word>
            </TextBox>
        ) // 3 TextBox components are pushed to textBoxes
        if(num%3 === 0) {
            rows.push(
                <Row key={num/3}>
                    {textBoxes}
                </Row>
            ) // A Row component containing 3 TextBox components is pushed to rows
            textBoxes = [] // textBoxes is emptied
        }   
    }
    return (
        <Container>
            <WordsContainer>
                {rows}
            </WordsContainer>
            <BtnDiv>
                <Button primary btnColor={colorLightLevel("#6D97B5", -10)}>DOWNLOAD AS PDF</Button>
            </BtnDiv>
        </Container>

    )
}

export default withTheme(RecoveryPhraseElement)
