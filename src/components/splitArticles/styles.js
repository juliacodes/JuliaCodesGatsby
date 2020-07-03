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
    justify-content: center;
    margin: 50px 0;

    ${Heading} {
        font-weight: 400;
        font-size: 40px;
        width: 500px;
        margin: 0;
        margin-left: 100px;
        transition: all 0.5s ease-in-out;
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
`;
export const Date = styled.div`
    width: 100px;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: ${({ theme }) => theme.textLight};
`;
