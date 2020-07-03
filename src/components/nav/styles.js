import styled from 'styled-components';
import QUERIES from '../../theming/styles';
import { fadeIn } from '../../theming/animate';
export const NavCont = styled.nav`
    width: auto;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        margin: 100px 0 0 0;
        padding: 0 60px;
    }
`;
