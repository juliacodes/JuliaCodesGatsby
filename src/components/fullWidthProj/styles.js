import styled from 'styled-components';
import QUERIES, { Midi, Heading, Paragraph } from '../../theming/styles';
import GitscapeCover from '../../images/projs/gitscape-cover.png';

export const ProjContainer = styled.div`
    height: auto;
    border-radius: 0px;
    background-color: #eef4e8;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 0;

    @media (${QUERIES.large}) {
        flex-direction: row;
        justify-content: space-evenly;
        padding: 80px 0;
        border-radius: 60px;
    }

    ${Midi} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;
        margin-bottom: 40px;
        flex: 1 0 30%;
        flex-flow: row wrap;
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
