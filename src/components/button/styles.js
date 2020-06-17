import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const ButtonCont = styled.p`
    color: ${({ theme }) => theme.textMain};
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.03em;
    margin: 60px 0 40px 0;
    text-transform: uppercase;
    transition: all 0.3s ease-in-out;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: ${({ theme }) =>
        `-webkit-linear-gradient(180deg, ${theme.textMain} 50%, #c2e99c 50%)`};
    background-repeat: repeat;
    background-size: 400px 100%;
    background-position: -200px 0px;

    @media (${QUERIES.large}) {
        margin: 60px 0 0 0;
    }

    :hover {
        color: ${({ theme }) => theme.accent};
        background-position: 0px 0px;

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

export const ButtonContMini = styled(ButtonCont)`
    font-size: 18px;
    margin-top: 45px;

    :hover {
        svg {
            transform: translate(25px, 4px);
        }
    }

    svg {
        transform: translate(20px, 5px);
    }
`;
