import styled from 'styled-components';

export const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`,
};

export const Midi = styled.div`
    width: 100%;
    height: auto;
    margin: 70px auto 70px auto;
    padding: 30px;
    max-width: 1090px;

    @media (${QUERIES.large}) {
        margin: 220px auto 220px auto;
        padding: 0px;
    }
`;

export const Heading = styled.h1`
    font-size: 30px;
    line-height: 129.69%;
    font-weight: 600;
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

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    font-weight: 400;
    color: ${({ theme }) => theme.textMain};

    @media (${QUERIES.large}) {
        font-size: 25px;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
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

    @media (${QUERIES.large}) {
        border-radius: 6px;
    }
`;
