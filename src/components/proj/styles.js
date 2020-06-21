import styled, { keyframes } from 'styled-components';
import QUERIES, { Heading, Paragraph } from '../../theming/styles';

export const ProjImageCont = styled.div`
    width: 100%;
    height: calc(65% - 40px);
    background-image: ${({ theme }) => theme.gradient};
    background-repeat: repeat;
    background-size: contain;
    background-position: 0 0px;
    position: relative;
    z-index: 0;
    border-radius: 14px 14px 0 0;
    transition: 0.3s ease-in-out;
    overflow: visible;
`;

const translateDown = keyframes`
    0%   {  
        transform: translateY(-110px) scale(1.01); 
    }
    100% {     
        transform: translateY(0) scale(1); 
    }
`;

export const ProjImage = styled.img`
    width: 90%;
    margin: 40px auto;
    display: block;
    border-radius: 14px 14px 0 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    z-index: 0;
    position: relative;
    animation: none;
    transform: translateY(0) scale(1);
    animation: ${translateDown} 0.4s;
`;

const translateUp = keyframes`
    0%    {  
        transform: translateY(0); 
    }
    100% {      
        transform: translateY(-110px);
    }
`;

const scaleUp = keyframes`
    0%{ 
        transform: scale(1);
    }

    30%{

        transform: scale(1.017);
    }

    100%{
        transform: scale(1.01);
    }
`;

const scaleUpAlt = keyframes`
    0%{ 
        transform: scale(1) translateY(120px);
    }

    30%{

        transform: scale(1.017) translateY(120px);
    }

    100%{
        transform: scale(1.01) translateY(120px);
    }
`;

const scaleDown = keyframes`
    0%{ 
        transform: scale(1.01);
    }

    100%{
        transform: scale(1);
    }
`;

export const ProjCont = styled.div`
    width: 520px;
    height: 720px;
    background-color: ${({ theme }) => theme.altWhite};
    border-radius: 14px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.08);
    margin-bottom: 40px;
    animation: ${scaleDown} cubic-bezier(0.24, 0.63, 0.86, 0.43);

    :hover {
        box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.21);
        transform: scale(1.01);
        animation-name: ${scaleUp};
        animation-timing-function: cubic-bezier(0.05, 0.63, 0.8, 0.58);
        animation-duration: 0.5s;
        cursor: pointer;

        ${ProjImage} {
            transform: translateY(-110px);
            animation: ${translateUp} 0.4s;
        }
    }

    @media (${QUERIES.large}) {
        margin-bottom: 0px;
        height: 620px;
    }

    :nth-child(even) {
        transform: translateY(0px);

        :hover {
            animation-name: ${scaleUpAlt};
            animation-timing-function: cubic-bezier(0.05, 0.63, 0.8, 0.58);
            animation-duration: 0.5s;
            transform: scale(1.01) translateY(190px);
        }

        @media (${QUERIES.large}) {
            transform: translateY(190px);
            margin-bottom: 80px;
        }
    }

    :last-child {
        margin-bottom: 190px;
    }

    ${Heading} {
        font-size: 40px;
    }

    ${Paragraph} {
        font-size: 15px;
        margin-top: 0;
        color: ${({ theme }) => theme.textLight};
    }
`;

export const DescCont = styled.div`
    position: relative;

    height: calc(35% - 40px);
    margin: 0 20px 20px 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    background-color: ${({ theme }) => theme.altWhite};

    * {
        margin: 10px;
    }
`;

export const TypeCont = styled.div`
    display: flex;
    width: 100%;

    p {
        margin-left: 0;
        line-height: 14px;
        margin-right: 15px;
        font-size: 9px;
        padding: 5px 10px;
        text-transform: uppercase;
        border-radius: 30px;
    }

    .netlify {
        color: #1581ff;
        background-color: #e8f3ff;
    }

    .styled-components {
        color: #ffa115;
        background-color: #ffe9c8;
    }

    .react {
        color: #e4453a;
        background-color: #ffcac3;
    }

    .react-hooks {
        color: #9b51e0;
        background-color: #e8d2f0;
    }
`;
