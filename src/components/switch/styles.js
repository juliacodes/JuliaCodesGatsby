import styled from 'styled-components';

export const SwitchBtn = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 100px;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadow};
    transition: transform 0.2s ease-in-out;

    :hover {
        transform: scale(1.1);
    }
`;
