import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const LogoSvg = styled.svg`
    transform: scale(0.7);

    * {
        fill: ${({ theme }) => theme.textMain};
        stroke: ${({ theme }) => theme.textMain};
    }

    @media (${QUERIES.large}) {
        transform: scale(1);
    }
`;
