import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Hamburger from "../components/hamburger";

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

const Content = styled.div`
  margin: 10px;
  display: flex;
  width: calc(100% - 90px);
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  overflow: scroll;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 30px;
  }
`;

const HomeLanding = styled.div`
  height: calc(100vh - 20px);
  background-color: #ecf3f4;
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    display: flex;
    flex: 1 0 auto;
    background-color: #ecf3f4;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <HomeLanding>
        <Hamburger />
      </HomeLanding>
    </Content>
  </Layout>
);

export default IndexPage;
