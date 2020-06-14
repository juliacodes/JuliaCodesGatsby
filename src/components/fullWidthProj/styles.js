import styled from 'styled-components';
import QUERIES, { Heading, Paragraph } from '../../theming/styles';
import GitscapeCover from '../../images/projs/gitscape-cover.png';

export const ProjContainer = styled.div`
    width: 100%;
    height: 800px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.alt};
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 30px;

    @media (${QUERIES.large}) {
        flex-direction: row;
        justify-content: space-evenly;
        padding: 0;
    }
`;

export const LeftCont = styled.div`
    width: 100%;

    @media (${QUERIES.large}) {
        width: 40%;
    }

    ${Heading} {
        margin-bottom: 35px;
    }

    ${Paragraph} {
        font-size: 20px;
    }
`;

export const RightCont = styled.div`
    width: 100%;
    height: 50%;

    @media (${QUERIES.large}) {
        width: 40%;
        height: 100%;
    }
`;

export const ProjImage = styled.div`
    background-image: url(${GitscapeCover});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    @media (${QUERIES.large}) {
        background-size: 80%;
    }
`;
