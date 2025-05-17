import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const Spread = styled.div`
    position: absolute;
    display: block;
    top: 20px;
    z-index: -5;
    background-color: ${({ theme }) => theme.main};
    width: 400vmax;
    height: 400vmax;
    top: calc(-250vmax + 3rem);
    right: calc(-250vmax + 3rem);
    border-radius: 100%;
`;

export const SwitchBtn = styled.button`
    position: relative;
    z-index: -1;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: block;
    box-shadow: ${({ theme }) => theme.shadow};
    transition: transform 0.2s ease-in-out;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
        outline: 2px solid rgba(255, 255, 255, 0.26);
        transition: all 0.2s ease-in-out;
    }

    :active {
        svg {
            opacity: 0.5;
        }
    }

    @media (${QUERIES.large}) {
        transform: scale(1);
    }
`;
