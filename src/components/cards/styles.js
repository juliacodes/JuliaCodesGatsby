import styled from 'styled-components';
import { QUERIES } from '../../theming/styles';
export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 0 25px;

    @media (${QUERIES.large}) {
        padding: 0;
    }
`;
