import styled from 'styled-components';

export const QUERIES = {
    large: `min-width: 1300px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`,
};

export const Midi = styled.div`
    width: 100%;
    height: auto;
    margin: 140px auto 0 auto;
    padding: 30px;

    @media (${QUERIES.large}) {
        margin: 210px auto 0 auto;
    }
`;

export const Heading = styled.h1`
    font-size: 30px;
    line-height: 129.69%;
    font-weight: 600;
    max-width: 1090px;
    margin: 0 auto;
    width: 100%;
    color: ${({ theme }) => theme.textMain};

    alt {
        color: ${({ theme }) => theme.accent};
    }

    @media (${QUERIES.large}) {
        font-size: 60px;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100vh;
`;

export const Full = styled.main`
    width: 100%;
    height: 100vh;
    padding: 30px;
    max-width: 1400px;
    margin: 0 auto;
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

export const Image = styled.img`
    width: 100%;
    height: auto;
`;
