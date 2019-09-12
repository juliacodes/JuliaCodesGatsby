import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ProjectRow from "../components/ProjectRow";
import Footer from "../components/footer";
import databuddy1 from "../images/270/databuddy1.png";
import databuddy2 from "../images/270/databuddy2.png";
import databuddy3 from "../images/270/databuddy3.png";
import databuddy4 from "../images/270/databuddy4.png";

import acquire from "../images/270/Acquire.jpg";
import parse from "../images/270/Parse.png";
import filter from "../images/270/Filter.jpg";
import mine from "../images/270/Mine.png";

import "../index.css";

const LayoutAlt = styled(Layout)`
  min-height: unset;
`;

const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  height: auto;
  align-items: center;
  h1 {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 100px 0;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-top: 100px;
  }
  :nth-child(1) {
    ${Heading} {
      font-size: 40px;

      @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
      }
    }
  }
`;

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
  height: 400px;
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
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 25%;
    margin-bottom: 0px;
  }

  :nth-child(1) {
    ${ProjectImage} {
      background-repeat: no-repeat;
      background-image: url(${databuddy1});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${databuddy2});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
    }
  }

  :nth-child(3) {
    ${ProjectImage} {
      background-image: url(${databuddy3});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
    }
  }

  :nth-child(4) {
    ${ProjectImage} {
      background-image: url(${databuddy4});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
    }
  }
`;

const Project2 = styled.div`
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
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 25%;
    margin-bottom: 0px;
  }

  :nth-child(1) {
    ${ProjectImage} {
      background-repeat: no-repeat;
      background-image: url(${acquire});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
    }
  }

  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${parse});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
    }
  }

  :nth-child(3) {
    ${ProjectImage} {
      background-image: url(${mine});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
    }
  }

  :nth-child(4) {
    ${ProjectImage} {
      background-image: url(${filter});
      background-size: contain;
      background-position-x: center;
      background-position-y: center;
      background-repeat: no-repeat;
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

function Course() {
  return (
    <>
      <Helmet
        title="Julia Johnson - CGT 270"
        meta={[
          { name: "Julia Johnson", content: "Portfolio - Julia Codes" },
          {
            name: "Julia Johnson",
            content: "Julia Johnson - JuliaCodes - Front End Developer"
          }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <LayoutAlt>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <TextContent>
            <Heading>Data Vis</Heading>
            <Paragraph>
              CGT 270 - Introduction to Data Vis, course content and projects
            </Paragraph>
          </TextContent>
        </Container>
        <ProjectContainer>
          <Project>
            <Link title="Dataset 1" to="/Coffee">
              <ProjectImage />
            </Link>
            <Link title="Dataset 1" to="/Coffee">
              <SubHeading>Data Set 1</SubHeading>
            </Link>

            <Link title="Dataset 1" to="/Coffee">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project>
          <Project>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectImage />
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <SubHeading>Data Set 2</SubHeading>
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project>
          <Project>
            <Link title="Dataset 1" to="/Coffee">
              <ProjectImage />
            </Link>
            <Link title="Dataset 1" to="/Coffee">
              <SubHeading>Data Set 1</SubHeading>
            </Link>

            <Link title="Dataset 1" to="/Coffee">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project>
          <Project>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectImage />
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <SubHeading>Data Set 2</SubHeading>
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project>
        </ProjectContainer>
        <ProjectContainer>
          <Project2>
            <Link title="Dataset 1" to="/Coffee">
              <ProjectImage />
            </Link>
            <Link title="Dataset 1" to="/Coffee">
              <SubHeading>Acquire</SubHeading>
            </Link>

            <Link title="Dataset 1" to="/Coffee">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project2>
          <Project2>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectImage />
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <SubHeading>Parse</SubHeading>
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project2>
          <Project2>
            <Link title="Dataset 1" to="/Coffee">
              <ProjectImage />
            </Link>
            <Link title="Dataset 1" to="/Coffee">
              <SubHeading>Mine</SubHeading>
            </Link>

            <Link title="Dataset 1" to="/Coffee">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project2>
          <Project2>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectImage />
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <SubHeading>Filter</SubHeading>
            </Link>
            <Link title="Dataset 2" to="/Awkward">
              <ProjectLink>
                View Graph <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project2>
        </ProjectContainer>
      </LayoutAlt>
      <Footer />
    </>
  );
}

export default Course;
