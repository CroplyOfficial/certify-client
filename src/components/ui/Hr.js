import styled, {withTheme} from 'styled-components'

const Hr = styled.hr`
    border: none;
    height: 1px;
    margin: 2.5rem 0;
    border-top: thin solid ${props => props.theme.pastelColors.grey};

`;

export default withTheme(Hr)
