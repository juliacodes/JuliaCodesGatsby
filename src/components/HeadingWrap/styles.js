import styled from 'styled-components';
import { breakpoints } from '../../components/Media';
import Heading from '../../components/Heading';
import Container from '../../components/container';
import insta from '../../images/social/insta.png';
import twitter from '../../images/social/twitter.png';
import git from '../../images/social/git.png';
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

export const Line = styled.div`
    height: 2px;
    background-color: black;
    width: 100px;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 200px;
    }
`;

export const SocialCont = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-left: 20px;

    & .git {
        background-image: url(${git});
    }

    & .insta {
        background-image: url(${insta});
    }

    & .twitter {
        background-image: url(${twitter});
    }
`;
export const Social = styled.div`
    width: 27px;
    height: 27px;
    margin: 0 15px;
    background-repeat: no-repeat;
    background-size: 27px 27px;
    background-position: center center;
    transition-duration: 2s;

    :hover {
        background-size: 30px;
    }
`;

export const MaxHeading = styled(Heading)`
    font-weight: 900;
    font-size: 7vw;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    margin-bottom: 0;
    margin-left: 0px;

    @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
        transform: scale(1);
        margin-bottom: 0;
        margin-left: 50px;
    }
`;
