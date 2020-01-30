import styled, { keyframes } from 'styled-components';

export const breakpoints = {
    mobileMin: '480px',
    mobileMax: '959px',
    tabletMin: '960px',
    tabletMax: '1199px',
    desktopMin: '1200px'
};

export const COLORS = {};

export const Container = styled.div`
    width: 100vw;
    background-color: white;
    height: auto;
    opacity: 1;
    z-index: 3;
`;

export const Outer = styled.div`
    background-color: ${this.props.bgc};
`;

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const Inner = styled.div`
    min-height: 80vh;
    padding: 35px 10px 35px 10px;
    margin: 0 auto;
    opacity: 0;
    animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

    a {
        text-decoration: none;
        color: black;
    }

    @media (min-width: ${breakpoints.tabletMin}) {
        max-width: 940px;
        padding: 55px 20px 55px 20px;
        margin: 0 auto;
    }

    @media (min-width: ${breakpoints.desktopMin}) {
        max-width: 1200px;
        padding: 75px 20px 75px 20px;
        margin: 0 auto;
    }
`;

export const Heading = styled.h1`
    font-family: Michroma;
    font-size: 30px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
`;

export const SmallHeading = styled.h2`
    font-family: Michroma;
    font-size: 18px;
    max-width: 700px;
    line-height: 149%;
    display: flex;
    align-items: left;
    text-align: left;
    letter-spacing: 0.1em;

    /* @media (${QUERIES.medium}) {
        align-items: center;
        text-align: center;
    } */
`;

export const Paragraph = styled.p`
    font-size: 10px;
    color: ${COLORS.lightGray};
    line-height: 190%;
    letter-spacing: 0.05em;
    padding-right: 10px;

    /* @media (${QUERIES.medium}) {
        font-size: 13px;
        padding-right: 30px;
    } */
`;
