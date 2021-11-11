import styled, {withTheme} from 'styled-components';

const H6 = styled.h6`
    margin-bottom: 1.5rem;
    margin-top: 0;
    font-family: "Open Sans";
    font-size: 1rem;
    color: ${props => props.theme.h6};
`

export default withTheme(H6);