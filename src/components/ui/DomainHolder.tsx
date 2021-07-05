import styled, {withTheme} from 'styled-components';
import PropTypes from 'prop-types'

import { Hr } from '.';
import ShowOptions from './ShowOptions';

const Container = styled.div`
    display: grid;
    box-sizing: border-box;
    border-radius: 30px;
    font-family: "Open Sans";
    font-weight: bold;
    grid-template-columns: 9fr 1fr;
    grid-column-gap: 1rem;
    width: 100%;
    height: fit-content;
    hr{
        margin: 1rem 0;
        grid-row: 2 / span 1;
        grid-column: 1 / span 2;
    }
`;

const Domain = styled.div`
    grid-row: 1 / span 1;
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;
    a {
        text-decoration: none;
        color: ${props => props.theme.mainColors.black};
    }
`;

const DomainOptions = styled.div`
    grid-row: 1 / span 1;
    display: grid;
    place-items: center;
`;

const DomainHolder = ({theme, domain}) => {
    const domainOptions = {
        "Edit": () => {},
        "Pause": () => {},
        "Delete": () => {}
    }
    return (
        <>
        <Container>
            <Domain>
                <a href={"https://"+domain}>
                    {domain}
                </a> 
            </Domain>
            <DomainOptions>
                <ShowOptions options={domainOptions} optionListStyling="margin-left: -5rem;" />
            </DomainOptions>
            <Hr />
        </Container>
        </>
    );
}

DomainHolder.propTypes = {
    domain: PropTypes.string,
};

export default withTheme(DomainHolder)