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
  max-width: 1200px;
  min-height: 100vh;
  padding: 0;
  margin: 75px auto;
`;

const Landing = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const HeadingImage = styled.div`
  margin-left: 100px;
  width: 50%;
  height: 400px;
  background-color: #f5f5f5;
`;

const IndexPage = () => (
  <Layout>
    <Link to="/">
      <Logo />
    </Link>
    <Landing>
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
    </Landing>
  </Layout>
);

export default IndexPage;
