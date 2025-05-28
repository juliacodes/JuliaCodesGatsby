import styled from 'styled-components';
import QUERIES from '../../theming/styles';
import { fadeIn } from '../../theming/animate';
import CollageImage1 from '../../images/collage/collage1.png';
import CollageImage2 from '../../images/collage/collage2.png';
import CollageImage3 from '../../images/collage/collage3.png';
import CollageImage4 from '../../images/collage/collage4.png';
import CollageImage5 from '../../images/collage/collage5.png';

export const CollageCont = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0;
    padding-bottom: 50px;
`;

export const CollageItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.13);
    border-radius: 11px;
    aspect-ratio: 1;
    width: 160px;
    height: 160px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    position: relative;
    overflow: visible;
    will-change: transform;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        border-radius: 9px;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    &:hover {
        cursor: pointer;
        transform: rotate(0deg) !important;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.23);
    }

    &::after {
        content: attr(data-label);
        position: absolute;
        bottom: -30px;
        left: 0;
        width: 100%;
        color: ${props => props.theme.textLight};
        font-size: 14px;
        letter-spacing: -.4px;
        text-align: left;
        opacity: 0;
        transition: opacity 0.3s ease;
        white-space: nowrap;
        z-index: 1;
    }

    &:hover::after {
        opacity: 1;
    }

    &:nth-child(1) { 
        transform: rotate(-4deg) translateZ(0);
    }
    &:nth-child(2) { 
        transform: rotate(6deg) translateZ(0);
    }
    &:nth-child(3) { 
        transform: rotate(-4deg) translateZ(0);
    }
    &:nth-child(4) { 
        transform: rotate(3.5deg) translateZ(0);
    }
    &:nth-child(5) { 
        transform: rotate(-3deg) translateZ(0);
    }
    &:nth-child(6) { 
        transform: rotate(3.4deg) translateZ(0);
    }

    &:nth-child(5) {
        display: none;
    }

    @media (${QUERIES.large}) {
        &:nth-child(5) {
            display: block;
        }
    }
`;