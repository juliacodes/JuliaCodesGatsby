import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Gitscape from '../../images/gitscape.jpg';

const ProjectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: auto;
    background-color: #fbfbfb;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 190px;
        margin-top: 50px;
        height: 800px;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    @media (min-width: ${breakpoints.mobileMax}) {
        display: inline;
        margin: auto;
    }

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImageCont = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 8%;
`;

const ProjectImage = styled.div`
    width: 100%;
    width: 540px;
    height: 300px;
    border-radius: 4px;

    transition-duration: 0.3s;
    background-size: cover;
    background-position: center center;
    background-image: url(${Gitscape});

    @media (min-width: ${breakpoints.mobileMax}) {
        height: 620px;
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin: 30px auto 0 auto;
    }
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin: 10px auto 20px auto;
    }
`;
const ProjectTextCont = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 8%;
`;

const ProjectText = styled.div`
    max-width: 369px;
`;

function FullProjectRow() {
    return (
        <ProjectContainer>
            <ProjectTextCont>
                <ProjectText>
                    <SubHeading>Gitscape</SubHeading>
                    <ProjectParagraph>
                        Built out of my frustration from using Github's explore
                        tab, Gitscape allows developers to find trending new
                        repositories based on stars, search, language, and
                        category.
                    </ProjectParagraph>
                    <Link title='Gitscape' to='/gitscape'>
                        <ProjectLink>
                            View Project <span>&#8250;</span>
                        </ProjectLink>
                    </Link>
                </ProjectText>
            </ProjectTextCont>
            <ProjectImageCont>
                <ProjectImage />
            </ProjectImageCont>
        </ProjectContainer>
    );
}

export default FullProjectRow;
