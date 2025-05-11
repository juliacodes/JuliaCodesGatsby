import styled from 'styled-components';
import { SpreadWhiteAnim, SpreadBlackAnim, fadeIn } from './animate';

const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`,
};

export const Heading = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 48px;
    line-height: 52px;
    margin: 0 auto;
    width: 100%;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    user-select: none;
    opacity: 0;
    letter-spacing: -3px;
    text-align: left;
    animation: ${fadeIn} 1s forwards;
    font-weight: 300;

    @media (${QUERIES.large}) {
        font-size: 48px;
        line-height: 50px;
    }
`;

export const Heading2 = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    line-height: auto;
    font-weight: 400;

    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        font-size: 32px;
    }
`;

export const Label = styled.h1`
    font-family: 'Inter', sans-serif;
    line-height: auto;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textMain};
    opacity: 0.5;
    font-size: 14px;
`;

export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    line-height: auto;
    font-size: 16px;
    line-height: 180%;
    mixBlendMode: 'difference',
    color: 'white',

    color: ${({ theme }) => theme.textMain};

    @media (${QUERIES.large}) {
        font-size: 16px;
    }
`;


export const Caption = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    line-height: auto;

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
    @media (${QUERIES.large}) {
        padding-right: ${(props) => props.paddingRight};
    }

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
    max-width: 1200px;
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
    max-width: 800px;

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
    background-position: center center;
    background-size: cover;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
`;

export default QUERIES;
