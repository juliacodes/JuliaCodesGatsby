import React, { Component } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../Media";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import ForecastThumb from "../../images/ForecastThumb.png";
import AwkwardThumb from "../../images/AwkwardThumb.png";

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
      background-image: url(${ForecastThumb});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${AwkwardThumb});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
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
        <Link to="/Forecast">
          <ProjectImage />
        </Link>
        <Link to="/Forecast">
          <SubHeading>Forecast</SubHeading>
        </Link>
        <ProjectParagraph>
          A 7 day weather application that sets weather data based on user
          input.
        </ProjectParagraph>
        <Link to="/Forecast">
          <ProjectLink>
            Read Explanation <span>&#8250;</span>
          </ProjectLink>
        </Link>
      </Project>
      <Project>
        <Link to="/Awkward">
          <ProjectImage />
        </Link>
        <Link to="/Awkward">
          <SubHeading>Working at Awkward</SubHeading>
        </Link>
        <ProjectParagraph>
          Read about my experience as an intern at Awkward, a digital design
          agency.
        </ProjectParagraph>
        <Link as="/Awkward">
          <ProjectLink>
            Read Story <span>&#8250;</span>
          </ProjectLink>
        </Link>
      </Project>
    </ProjectContainer>
  );
}

export default ProjectRow;
