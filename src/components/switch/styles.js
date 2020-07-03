import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const Spread = styled.div`
    position: absolute;
    display: block;
    top: 20px;
    z-index: -5;
    background-color: white;
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    border-radius: 100%;
`;
export const SwitchBtn = styled.button`
    position: relative;
    z-index: -1;
    width: 45px;
    height: 45px;
    border-radius: 100px;
    transform: scale(0.7);
    display: block;
    box-shadow: ${({ theme }) => theme.shadow};
    transition: transform 0.2s ease-in-out;
    background-color: white;

    @media (${QUERIES.large}) {
        transform: scale(1);
    }
`;
