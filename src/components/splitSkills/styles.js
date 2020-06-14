import styled from 'styled-components';
import QUERIES from '../../theming/styles';

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
            font-size: 19px;

            @media (${QUERIES.large}) {
                font-size: 22px;
            }
        }

        @media (${QUERIES.large}) {
            width: 45%;
        }
    }

    .right {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        flex-wrap: wrap;

        @media (${QUERIES.large}) {
            width: 30%;
            flex-direction: column;
            margin-top: 0px;
        }
    }
`;
