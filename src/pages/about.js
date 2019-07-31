import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../../Media";

import SEO from "../components/seo";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  max-width: 2000px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100vw;
    height: 100vh;
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;
