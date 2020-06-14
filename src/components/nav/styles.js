import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const NavCont = styled.nav`
    width: auto;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (${QUERIES.large}) {
        margin: 100px 0 0 0;
        padding: 0 60px;
    }
`;
