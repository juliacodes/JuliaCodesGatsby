import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const SkillCont = styled.div`
    justify-content: space-between;
    margin: 0 0 30px 0;
    max-height: 50px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media (${QUERIES.large}) {
        margin: 0 0 60px 0;
    }

    h1 {
        font-size: 30px;
        margin-bottom: 20px;
        font-weight: 400;
        transition: all 0.3s ease-in-out;

        @media (${QUERIES.large}) {
            font-size: 40px;
        }
    }

    p {
        transition: all 0.3s ease-in-out;
        color: ${({ theme }) => theme.textMain};
    }
`;

export const Flip = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    cursor: pointer;
    color: ${({ theme }) => theme.textMain};

    :hover {
        h1 {
            color: ${({ theme }) => theme.accent};
        }

        svg {
            path {
                fill: ${({ theme }) => theme.accent};
            }
        }
    }

    svg {
        transition: all 0.3s ease-in-out;

        path {
            transition: all 0.3s ease-in-out;
        }
        margin-left: 10px;
        margin-top: -3px;
        transform: scale(0.8);

        @media (${QUERIES.large}) {
            margin-left: 10px;
            margin-top: 3px;
        }
    }
`;
