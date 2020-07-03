import styled from 'styled-components';
import QUERIES, { Heading } from '../../theming/styles';

export const ArticleCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Article = styled.div`
    display: flex;
    align-items: top;
    justify-content: start;
    margin: 50px 0;
    flex-wrap: wrap;
    width: 100%;

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        justify-content: center;
    }

    ${Heading} {
        font-weight: 400;
        font-size: 25px;
        max-width: 500px;
        margin: 0;
        transition: all 0.5s ease-in-out;
        color: ${({ theme }) => theme.textMain};
        background-repeat: repeat;
        background-size: 220% 100%;
        background-position: -550px 0px;

        @media (${QUERIES.large}) {
            margin-left: 100px;
            font-size: 40px;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-image: ${({ theme }) =>
                `-webkit-linear-gradient(180deg, ${theme.textMain} 50%, #c2e99c 50%)`};
            background-repeat: repeat;
            background-size: 220% 100%;
            background-position: -550px 0px;

            :hover {
                color: ${({ theme }) => theme.accent};
                background-position: 0px 0px;
                cursor: pointer;
            }
        }
    }
`;
export const Date = styled.div`
    width: 100px;
    font-size: 15px;
    font-weight: 700;
    margin-top: 10px;
    color: ${({ theme }) => theme.textLight};
    margin-bottom: 20px;

    @media (${QUERIES.large}) {
        margin-bottom: 0;
        font-size: 20px;
    }
`;
