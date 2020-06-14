import styled from 'styled-components';
import { Heading, Paragraph, QUERIES } from '../../theming/styles';

export const SplitCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    .left {
        width: 100%;

        * {
            font-weight: 600;
            font-size: 22px;
        }

        @media (${QUERIES.large}) {
            width: 50%;
        }
    }

    .right {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 30px;

        @media (${QUERIES.large}) {
            width: 35%;
            flex-direction: column;
            margin-top: 0px;
        }
    }
`;
