import styled from 'styled-components';
import { SpreadWhiteAnim, SpreadBlackAnim, fadeIn } from './animate';

const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    xs:  `min-width: 460px`,
    maxWidth: `1500px`,
};

export const Heading = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 40px;
    line-height: 113%;
    margin: 0 auto;
    width: 100%;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    user-select: none;
    opacity: 0;
    letter-spacing: -0.7px;
    text-align: left;
    animation: ${fadeIn} 1s forwards;
    font-weight: 300;
`;

export const Heading2 = styled.h2`
    font-family: 'Inter', sans-serif;
    line-height: auto;
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    opacity: 0;
    letter-spacing: -0.01em;

    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        font-size: 24px;
    }
`;

export const Heading3 = styled.h3`
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    border-bottom: 3px solid transparent;
    opacity: 0;
    letter-spacing: -0.35px;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
    }
`;

export const Label = styled.h1`
    font-family: 'Inter', sans-serif;
    line-height: auto;
    font-weight: 400;
    color: ${({ theme }) => theme.textMain};
    opacity: 0.5;
    font-size: 12px;
    margin-bottom: 10px;
    letter-spacing: -.003;
`;

export const Quote = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 170%;
    padding: 0;
    letter-spacing: -0.003px;
    border-left: 3px solid ${({ theme }) => theme.textMain};
    padding: 8px 20px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.textMain};
`;

export const Paragraph = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    mix-blend-mode: difference;
    color: white;
    padding: 0;
    letter-spacing: -0.003px;

    color: ${({ theme }) => theme.textLight};

    @media (${QUERIES.large}) {
        font-size: 16px;
    }
`;


export const Caption = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    line-height: auto;
    color: ${({ theme }) => theme.textLight};
    margin: 16px 0 0 0;
    font-size: 14px;
    text-align: center;

    @media (${QUERIES.large}) {
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main};
    overflow: hidden;
    @media (${QUERIES.large}) {
        padding-right: ${(props) => props.paddingRight};
    }

    > .growBlack {
        animation: ${SpreadBlackAnim} 1s forwards;
    }

    > .growWhite {
        animation: ${SpreadWhiteAnim} 1s forwards;
    }
`;

export const Full = styled.main`
    width: 100%;
    height: auto;
    margin: 0px auto 0px auto;
    padding: 20px;
    max-width: 1100px;

    @media (${QUERIES.large}) {
        margin: 64px auto 64px auto;
        padding: 0px;
    }
`;

export const Midi = styled.div`
    width: 100%;
    height: auto;
    margin: 20px auto 20px auto;
    padding: 20px;
    max-width: 750px;

    @media (${QUERIES.large}) {
        margin: 44px auto 60px auto;
        padding: 0px;
    }
`;

export const LandingMidi = styled.div`
    width: 100%;
    height: auto;
    margin: 20px auto 20px auto;
    padding: 20px;
    max-width: 750px;

    @media (${QUERIES.large}) {
        margin: 44px auto 100px auto;
        padding: 0px;
    }
`;

export const Inner = styled.div`
    max-width: 1437px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 30px;

    display: flex;
    flex-direction: column;

    > * {
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 500px;
    background-position: center center;
    background-size: cover;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
`;

export const ImageProj = styled.div`
margin-bottom: 18px;
width: 100%;
height: 290px;
border-radius: 25px;
position: relative;
overflow: hidden;
@media (${QUERIES.small}) {
    height: 400px;
}

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.$image || "#BF4F74"});
    ${props => props.$inputColor || "#BF4F74"};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    transition: filter 0.3s ease;
    @media (${QUERIES.large}) {
        background-position: center;
    }
}
`;

export const Project = styled.div`
padding: 20px 0 40px 0;
margin: 0;
width: 100%;
@media (${QUERIES.large}) {
    padding: 15px 0 32px;
}

&:hover ${ImageProj}::before {
}

&:hover ${ImageProj}::after {
    opacity: .6;
}
`;

export default QUERIES;