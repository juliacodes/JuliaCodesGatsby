import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import CoffeeChemistry from '../../images/CoffeeChemistry.jpg';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 500px;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: gray;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 119px;
        display: block;
        margin: auto;
    }

    :hover {
        /* border-bottom: 2px solid black; */
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 320px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: 450px;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    /* :hover {
        ${ProjectImage} {
            transform: scale(1.03);
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    } */

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 0%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${CoffeeChemistry});
            background-size: cover;
            background-position-x: left;
            background-position-y: top;

            @media (min-width: ${breakpoints.mobileMax}) {
                background-position-x: center;
                background-position-y: top;
            }
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;

    @media (min-width: ${breakpoints.mobileMax}) {
        text-align: center;
        margin: 30px auto 0 auto;
    }
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 40%;
        text-align: center;
        margin: 10px auto 20px auto;
    }
`;

function FullProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                <ProjectImage />
                <SubHeading>Coffee Chemistry</SubHeading>
                <ProjectParagraph>
                    My current work in progress, a web application that helps
                    you brew the perfect cup of coffee.
                </ProjectParagraph>

                <ProjectLink>COMING SOON</ProjectLink>
            </Project>
        </ProjectContainer>
    );
}

export default FullProjectRow;
