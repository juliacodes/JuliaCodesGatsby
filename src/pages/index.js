import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ContactEmail from "../components/ContactEmail";
import "../index.css";

const Layout = styled.div`
  min-height: 100vh;
  padding: 20px;
  margin: 75px auto;

  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 1000px;
    padding: 0px;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 0px;
  }
`;

const Container = styled.div`
  margin: 150px 0;
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

const IndexPage = () => (
  <Layout>
    <Link to="/">
      <Logo />
    </Link>
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
          tempor iaculis turpis. Nunc venenatis nisi nec orci gravida consequat
          vitae et risus.{" "}
        </Paragraph>
        <ContactEmail />
      </TextContent>
      <HeadingImage />
    </Container>
    <Container>
      <TextContent>
        <Heading>What I've been working on </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          pretium magna.{" "}
        </Paragraph>
      </TextContent>
    </Container>
  </Layout>
);

export default IndexPage;
