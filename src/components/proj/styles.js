import styled, { keyframes } from 'styled-components';
import QUERIES, { Heading, Paragraph } from '../../theming/styles';
import {
    translateDown,
    translateUp,
    scaleUp,
    scaleUpAlt,
    scaleDown,
    cardSpread1,
    cardSpread1Rev,
    cardSpread2,
    cardSpread2Rev,
} from '../../theming/animate';

export const ProjImageCont = styled.div`
    width: 100%;
    height: 45%;
    background-image: ${({ theme }) => theme.gradient};
    background-repeat: repeat;
    background-size: contain;
    background-position: 0 0px;
    position: relative;
    z-index: 0;
    border-radius: 14px 14px 0 0;
    transition: 0.3s ease-in-out;
    overflow: visible;

    @media (${QUERIES.large}) {
        height: calc(65% - 40px);
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

export const TriProjDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    ${ProjImage} {
        position: absolute;
        top: 5%;
        width: 90%;
        left: 5%;
        margin: 0 auto;
    }

    .img1 {
        animation: ${cardSpread1Rev} 0.4s;
        transform: scale(1) translateY(-20px);
    }

    .img2 {
        transform: scale(0.9) translateY(20px);
        animation: ${cardSpread2Rev} 0.4s;
    }

    .img3 {
        transform: scale(0.8) translateY(70px);
        animation: none;
    }
`;

export const ProjCont = styled.div`
    width: 520px;
    height: 500px;
    background-color: ${({ theme }) => theme.altWhite};
    border-radius: 14px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.08);
    margin-bottom: 40px;
    animation: ${scaleDown} cubic-bezier(0.24, 0.63, 0.86, 0.43);
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.05, 0.63, 0.8, 0.58);

    @media (${QUERIES.large}) {
        margin-bottom: 0px;
        height: 640px;
    }

    :hover {
        @media (${QUERIES.large}) {
            box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.21);
            transform: scale(1.01);
            animation-name: ${scaleUp};
            animation-timing-function: cubic-bezier(0.05, 0.63, 0.8, 0.58);
            animation-duration: 0.5s;
            cursor: pointer;

            ${ProjImage} {
                transform: translateY(-80px);
                animation: ${translateUp} 0.4s;
            }

            ${TriProjDiv} {
                ${ProjImage} {
                    animation: none;
                }
                .img1 {
                    transform: translateY(-80px);
                    animation: ${cardSpread1} 0.4s;
                }

                .img2 {
                    transform: scale(0.9) translateY(-10px);
                    animation: ${cardSpread2} 0.4s;
                }

                .img3 {
                    transform: scale(0.8) translateY(70px);
                }
            }
        }
    }

    :nth-child(even) {
        transform: translateY(0px);

        @media (${QUERIES.large}) {
            :hover {
                animation-name: ${scaleUpAlt};
                animation-timing-function: cubic-bezier(0.05, 0.63, 0.8, 0.58);
                animation-duration: 0.5s;
                transform: scale(1.01) translateY(190px);
            }
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
        font-size: 25px;

        @media (${QUERIES.large}) {
            font-size: 40px;
        }
    }

    ${Paragraph} {
        font-size: 15px;
        margin-top: 0;
        color: ${({ theme }) => theme.textLight};
    }
`;

export const DescCont = styled.div`
    position: relative;
    height: 50%;
    padding: 0 10px 0 10px;
    border-radius: 0 0 14px 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    background-color: ${({ theme }) => theme.altWhite};

    @media (${QUERIES.large}) {
        height: calc(35% - 25px);
        margin: 0 20px 20px 20px;
        padding: 20px 0 0 0;
    }

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
