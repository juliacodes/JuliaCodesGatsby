import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const ButtonCont = styled.p`
    color: ${({ theme }) => theme.textMain};
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0.03em;
    margin: 60px 0 40px 0;
    transition: all 0.3s ease-in-out;
    background-repeat: repeat;
    background-size: 400px 100%;
    background-position: -200px 0px;
    text-decoration: underline;

    :hover {
        text-decoration: none;
    }

    @media (${QUERIES.large}) {
        margin: 60px 0 0 0;
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
