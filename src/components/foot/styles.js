import styled from 'styled-components';
import QUERIES, { Full, Heading, Paragraph } from '../../theming/styles';

export const FootCont = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.alt};

    * {
        margin-bottom: 40px;
    }

    ${Full} {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 200px;
        padding: 100px 30px 0 30px;

        @media (${QUERIES.large}) {
            padding-top: 200px;
        }
    }

    ${Heading} {
        font-size: 25px;
        @media (${QUERIES.large}) {
            font-size: 50px;
        }
    }

    ${Paragraph} {
        color: ${({ theme }) => theme.textLight};
        font-size: 15px;
        max-width: 700px;
        @media (${QUERIES.large}) {
            font-size: 20px;
        }
    }

    a {
        color: ${({ theme }) => theme.textMain};
        font-size: 15px;
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 3px solid ${({ theme }) => theme.textMain};
        transition: all 0.3s ease-in-out;
        :hover {
            border-bottom: 3px solid transparent;
        }

        @media (${QUERIES.large}) {
            font-size: 20px;
        }
    }
`;

export const FootFinal = styled.div`
    display: flex;
    width: 100%;
    height: 130px;
    padding: 0;
    margin: 150px 0 0 0;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        margin: 250px 0 0 0;
        height: 100px;
    }

    ${Paragraph} {
        margin-left: 30px;
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme.textMain};

        @media (${QUERIES.large}) {
            margin-left: 50px;
        }
    }
`;

export const FinalLeft = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0;
    align-items: center;
`;

export const FinalRight = styled(FinalLeft)`
    justify-content: flex-start;
    ${Paragraph} {
        margin-left: 0;
        margin-right: 20px;
    }

    @media (${QUERIES.large}) {
        justify-content: flex-end;
    }
`;

export const LogoSvg = styled.svg`
    transform: scale(0.7);

    * {
        fill: ${({ theme }) => theme.textMain};
        stroke: ${({ theme }) => theme.textMain};
    }

    @media (${QUERIES.large}) {
        transform: scale(1);
    }
`;
