import styled, {withTheme} from 'styled-components'

const Hr = styled.hr`
    background-color: ${props => props.theme.pastelColors.grey};
    border: none;
    height: 1px;
    margin: 2.5rem 0;
`;

export default withTheme(Hr)
