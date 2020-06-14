import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const SwitchBtn = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    transform: scale(0.7);
    display: block;
    background-color: ${({ theme }) => theme.togglerFill};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: transform 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.heading};

    @media (${QUERIES.large}) {
        transform: scale(1);
    }

    :hover {
        transform: scale(0.8);
        @media (${QUERIES.large}) {
            transform: scale(1.1);
        }
    }
`;
