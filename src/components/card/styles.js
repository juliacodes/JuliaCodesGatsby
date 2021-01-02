import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const CardContainer = styled.div`
    width: 100%;
    height: 150px;
    background-color: ${({ theme }) => theme.altWhite};
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.altShadow};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 90px 30px 40px 30px;
    max-width: 580px;

    @media (${QUERIES.large}) {
        width: 350px;
        height: 170px;
    }
`;

export const CompLogo = styled.img`
    width: auto;
    height: auto;
    display: block;

    @media (${QUERIES.large}) {
        width: auto;
        height: 150px;
    }
`;

export const Description = styled.div`
    p {
        color: ${({ theme }) => theme.textMain};
        line-height: 30px;
        font-size: 13px;

        @media (${QUERIES.large}) {
            font-size: 18px;
        }
    }
    > :nth-child(1) {
        font-weight: 700;
    }

    > :nth-child(2) {
        font-weight: 500;
    }

    > :nth-child(3),
    > :nth-child(4) {
        color: ${({ theme }) => theme.textLight};
    }
`;
