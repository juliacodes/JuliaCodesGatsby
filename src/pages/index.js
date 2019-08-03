import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ContactEmail from "../components/ContactEmail";
import Footer from "../components/footer";
import "../index.css";

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const SubContainer = styled.div`
  margin: 0px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const HeadingImage = styled.div`
  margin-left: 0px;
  margin-top: 50px;
  width: 100%;
  border-radius: 4px;
  height: 600px;
  background-color: #f5f5f5;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 50%;
    margin-left: 100px;
    margin-top: 50px;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
  }
`;

const Project = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 90px;

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
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
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
  border-bottom: 2px solid white;
  transition: border-bottom 0.2s;

  :hover {
    border-bottom: 2px solid black;
  }

  span {
    font-size: 20px;
  }
`;

const IndexPage = () => (
  <>
    <Layout>
      <Link to="/">
        <Logo />
      </Link>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Julia Johnson | Front End Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <TextContent>
          <Heading>
            Hi there, I’m Julia. <br />
            Front End <span>Developer</span>, <br />
            Student and Minimalist
          </Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            pretium magna. Mauris lorem tortor, consectetur vitae tellus vel,
            tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
            consequat vitae et risus.
          </Paragraph>
          <ContactEmail />
        </TextContent>
        <HeadingImage />
      </Container>
      <SubContainer>
        <TextContent>
          <Heading>What I've been working on </Heading>
          <SubParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            pretium magna.
          </SubParagraph>
        </TextContent>
      </SubContainer>
      <SubContainer>
        <ProjectRow>
          <Project>
            <Link to="">
              <ProjectImage />
            </Link>
            <Link to="">
              <SubHeading>Forecast</SubHeading>
            </Link>
            <ProjectParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna.
            </ProjectParagraph>
            <Link as="">
              <ProjectLink>
                Read Explanation <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project>
          <Project>
            <Link to="">
              <ProjectImage />
            </Link>
            <Link to="">
              <SubHeading>Forecast</SubHeading>
            </Link>
            <ProjectParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna.
            </ProjectParagraph>
            <Link as="">
              <ProjectLink>
                Read Explanation <span>&#8250;</span>
              </ProjectLink>
            </Link>
          </Project>
        </ProjectRow>
      </SubContainer>
    </Layout>
    <Footer />
  </>
);

export default IndexPage;
