import styled, { keyframes } from 'styled-components';
import { breakpoints } from '../../components/Media';
import quotation from '../../images/quotation.png';

export const HeadingWrapCont = styled.div`
    background-image: url(${quotation});
    padding-top: 40px;
    background-position: 0 0;
    background-repeat: no-repeat;
`;

export const HeadingElements = styled.div`
    display: flex;
    align-items: center;
`;

export const drawLine = keyframes`
    from {
        width: 0px;
        opacity: 0;
    } 

    to{
        width: 200px;
        opacity: 1;
    }
`;

export const Line = styled.div`
    height: 2px;
    background-color: gray;
    width: 0px;
    animation: ${drawLine} 1s forwards;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 0;
    }
`;

export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 20px;
`;

export const Social = styled.div`
    width: 27px;
    height: 27px;
    margin: 0 15px;
    background-repeat: no-repeat;
    background-size: 27px 27px;
    background-position: center center;
    transition-duration: 0.2s;
    opacity: 1;

    .insta,
    .twitter,
    .git {
        path {
            transition-duration: 0.5s;
        }
    }

    :hover {
        .insta {
            path {
                fill: #dc297b;
            }
        }
    }

    :hover {
        .twitter {
            path {
                fill: #00acee;
            }
        }
    }

    :hover {
        .git {
            path {
                fill: black;
            }
        }
    }
`;
