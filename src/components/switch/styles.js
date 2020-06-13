import styled from 'styled-components';

export const SwitchBtn = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    display: block;
    background-color: blue;
    /* box-shadow: ${({ theme }) => theme.shadow}; */
    transition: transform 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.heading};

    :hover {
        transform: scale(1.1);
    }
`;
