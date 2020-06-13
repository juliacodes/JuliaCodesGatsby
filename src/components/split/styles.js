import styled from 'styled-components';
import { Heading, Paragraph, QUERIES } from '../../theming/styles';

export const SplitCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .left {
        width: 100%;

        @media (${QUERIES.large}) {
            width: 60%;
        }
    }

    .right {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 30px;

        @media (${QUERIES.large}) {
            width: 20%;
            flex-direction: column;
            margin-top: 0px;
        }

        .leftInner {
            margin-bottom: 50px;
        }

        ${Paragraph} {
            max-width: 200px;
            font-size: 18px;
            line-height: 30px;
            color: ${({ theme }) => theme.textLight};
            @media (${QUERIES.large}) {
                font-size: 20px;
            }
        }
    }

    .odometer.odometer-auto-theme,
    .odometer.odometer-theme-default {
        font-weight: 900;
        font-size: 60px;
        letter-spacing: 4px;
        margin: 0;
        line-height: 1.1em;
        padding: 0;
        color: ${({ theme }) => theme.textMain};

        @media (${QUERIES.large}) {
            font-size: 90px;
        }
    }
`;
