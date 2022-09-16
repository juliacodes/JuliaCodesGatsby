import styled from 'styled-components';
import QUERIES, { Full, Heading, Paragraph } from '../../theming/styles';

export const FootCont = styled.footer`
    width: 100%;
    margin-bottom: 20px;
    ${Full} {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 100px;

        @media (${QUERIES.large}) {
            padding-top: 100px;
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
`;

export const FootFinal = styled.div`
    display: flex;
    width: 100%;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        padding: 0;
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
    gap: 30px;
    margin-top: 40px;

    ${Paragraph} {
        margin-left: 0;
        border-bottom: 1px solid transparent;
        :hover {
            border-bottom: 1px solid;
            border-bottom-color: ${({ theme }) => theme.textMain};
        }
    }

    @media (${QUERIES.large}) {
        justify-content: flex-end;
        margin-top: 0px;
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
