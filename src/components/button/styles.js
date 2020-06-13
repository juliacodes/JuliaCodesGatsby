import styled from 'styled-components';
import { QUERIES } from '../../theming/styles';

export const ButtonCont = styled.p`
    color: ${({ theme }) => theme.textMain};
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.03em;
    margin: 60px 0 40px 0;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;

    @media (${QUERIES.large}) {
        margin: 60px 0 0 0;
    }

    :hover {
        color: ${({ theme }) => theme.accent};
        svg {
            transform: translate(25px, 3px);
            path {
                fill: ${({ theme }) => theme.accent};
            }
        }
    }

    svg {
        transform: translate(20px, 3px);
        transition: all 0.3s ease-in-out;

        path {
            fill: ${({ theme }) => theme.textMain};
            transition: all 0.3s ease-in-out;
        }
    }
`;
