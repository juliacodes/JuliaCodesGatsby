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
        <ProjectRow />
      </LayoutAlt>
      <Footer />
    </>
  );
}

export default Course;
