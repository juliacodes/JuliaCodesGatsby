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

        ${Paragraph} {
            font-size: 19px;

            @media (${QUERIES.large}) {
                font-size: 25px;
            }
        }

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
            margin-bottom: 30px;
        }

        ${Paragraph} {
            max-width: 200px;
            line-height: 20px;
            font-size: 15px;

            @media (${QUERIES.large}) {
                font-size: 20px;
                line-height: 25px;
            }
        }
    }

    ${Heading} {
        font-weight: 900;
        font-size: 60px;

        @media (${QUERIES.large}) {
            font-size: 90px;
        }
    }
`;
