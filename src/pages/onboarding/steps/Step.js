import styled from "styled-components"
import { colorLightLevel } from '../../../components/functions/componentFunctions'


const Step = styled.div`
display: grid;
grid-gap: 1rem;
grid-template-rows: 10rem 18rem 5rem;
padding: 0 8rem;
width: 55%;
margin-top: 1rem;
.div1{
    width: 100%;
    p{
        font-family: "Open Sans";
        font-size: 1.1rem;
        text-align: justify;
        color: ${colorLightLevel("#FFFFFF", -10)}
    }
    .heading {
        font-family: "Poppins";
        letter-spacing: 0.1rem;
        font-size: 1.2rem;
        text-align: left;
    }
}
.warning {
    color: #89C7F3;
    font-family: "Open Sans";
    margin: 2rem 0;
}
.downloadKitBtn {
    font-size: 1rem;
}
.div2 {
    font-size: 1rem;
    padding: 2rem 0;
    p {
        color: #89C7F3;
        font-family: "Open Sans";
        margin: 1rem 0;
    }


    fieldset {
        &:nth-of-type(2) {
            margin-top: 0.6rem;
        }
        div {
            background: none;
        }
        pre {
           color: ${colorLightLevel("#FFFFFF", -25)}
        }
        input {
            color: white;
        }
        input:focus ~ label, input:valid ~ label {
            background-color: #5A7181;
            color: white;
        }
        label {
            color: ${colorLightLevel("#FFFFFF", -25)};
            &.inputFilled {
                color: white;
                background-color: #546979;
            }
        }
    }
}
.div3 {
    width: 100%;
}
`;

export default Step