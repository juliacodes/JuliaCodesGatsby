import React from "react";
import styled from "styled-components";
import { breakpoints } from "../Media";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import MediumPost from "../../images/MediumPost.png";
import StresserThumbnail from "../../images/StressorThumbnail.png";

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
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

  :hover {
    border-bottom: 2px solid black;
  }

  span {
    font-size: 20px;
  }
`;

const ProjectLinkSoon = styled(ProjectLink)`
  color: gray;

  :hover {
    border-bottom: 2px solid transparent !important;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const Project = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 90px;
  transition-duration: 0.3s;

  :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }

    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }

  :nth-child(1) {
    margin-right: 0;

    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
  }

  :nth-child(1) {
    ${ProjectImage} {
      background-image: url(${MediumPost});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${StresserThumbnail});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }
`;

const ProjectSoon = styled(Project)`
  :hover {
    ${ProjectImage} {
      transform: scale(1);
    }
    ${ProjectLinkSoon} {
      border-bottom: 2px solid transparent;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`;

function ProjectRow() {
  return (
    <ProjectContainer>
      <Project>
        <a href="https://medium.com/@juliacodes/managing-your-time-as-a-programming-college-student-5cabf36506ce">
          <ProjectImage />
        </a>
        <a href="https://medium.com/@juliacodes/managing-your-time-as-a-programming-college-student-5cabf36506ce">
          <SubHeading>Managing Your Time</SubHeading>
        </a>
        <ProjectParagraph>
          A brief Medium article I wrote to help young programmers manage their
          time.
        </ProjectParagraph>
        <a href="https://medium.com/@juliacodes/managing-your-time-as-a-programming-college-student-5cabf36506ce">
          <ProjectLink>
            Read Article <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <ProjectSoon>
        <ProjectImage />
        <SubHeading>Stressor</SubHeading>
        <ProjectParagraph>
          My current work in progress, a Chrome extension that helps students
          organize work.
        </ProjectParagraph>
        <>
          <ProjectLinkSoon>Coming Soon</ProjectLinkSoon>
        </>
      </ProjectSoon>
    </ProjectContainer>
  );
}

export default ProjectRow;
