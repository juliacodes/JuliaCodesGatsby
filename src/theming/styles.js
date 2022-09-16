import styled from 'styled-components';
import { SpreadWhiteAnim, SpreadBlackAnim, fadeIn } from './animate';

const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`,
};

export const Heading = styled.h1`
    font-family: 'Spectral', serif;
    font-size: 50px;
    line-height: 9px;
    margin: 0 auto;
    width: 100%;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    user-select: none;
    opacity: 0;
    letter-spacing: -3px;
    max-width: 700px;
    text-align: center;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        font-size: 82px;
        line-height: 82px;
        font-weight: 200;
    }
`;

export const Heading2 = styled.h1`
    font-size: 50px;
    line-height: 50px;
    font-weight: 200;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    opacity: 0;
    letter-spacing: -1px;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        font-size: 55px;
        line-height: 52px;
    }
`;

export const Paragraph = styled.p`
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    letter-spacing: -3%;
    line-height: 37.2px;
    color: ${({ theme }) => theme.textLight};

    @media (${QUERIES.large}) {
        font-size: 19px;
    }
`;

export const Paragraph2 = styled.p`
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    letter-spacing: 4%;
    line-height: 36.55px;
    color: ${({ theme }) => theme.textLight};

    @media (${QUERIES.large}) {
        font-size: 16px;
        margin: 30px 0;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main};
    overflow: hidden;

    > .growBlack {
        animation: ${SpreadBlackAnim} 2s forwards;
    }

    > .growWhite {
        animation: ${SpreadWhiteAnim} 2s forwards;
    }
`;

export const Full = styled.main`
    width: 100%;
    height: 100%;
    padding: 0px;
    max-width: 1500px;
    margin: 0 auto;

    @media (${QUERIES.large}) {
        padding: 30px;
    }
`;

export const Midi = styled.div`
    width: 100%;
    height: auto;
    margin: 20px auto 50px auto;
    padding: 30px;
    max-width: 1110px;

    @media (${QUERIES.large}) {
        margin: 100px auto 170px auto;
        padding: 0px;
    }
`;

export const Inner = styled.div`
    max-width: 1437px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 30px;

    display: flex;
    flex-direction: column;

    > * {
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 0px;
    background-position: center center;
    background-size: cover;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        border-radius: 6px;
    }
`;

export default QUERIES;
