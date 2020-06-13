import styled from 'styled-components';

export const LogoSvg = styled.svg`
    * {
        fill: ${({ theme }) => theme.textMain};
        stroke: ${({ theme }) => theme.textMain};
    }
`;
