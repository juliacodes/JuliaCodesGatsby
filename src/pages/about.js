import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Hamburger from "../components/hamburger";
import Square from "../components/Square";
import IntroRow from "../components/introrow";
import TimelineRow from "../components/timelineRow";
import GridRow from "../components/gridRow";
import SkillsGrid from "../components/SkillsGrid";
import Footer from "../components/footer";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100vw;
    height: 100vh;
  }

  .cursor {
    height: 50px;
    width: 50px;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-50%);
  }

  .Mouse .cursor:nth-child(2) {
    border: 1px solid gray;
    z-index: 100002;
  }
  .Mouse .cursor:nth-child(1) {
    height: 20px;
    width: 20px;
    background-color: black;
    opacity: 0.8;
    z-index: 100001;
  }
`;

const Content = styled.div`
  margin: 10px;
  display: flex;
  width: calc(100% - 90px);
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  background-color: #f6f6f6;
  overflow: scroll;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 30px;
  }
`;

const AboutLanding = styled.div`
  height: 120vh;
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    display: flex;
    flex: 1 0 auto;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const RowSpacer = styled.div`
  width: 100%;
  padding: 80px 0;
`;

const AboutPage = () => (
  <Layout>
    <Content>
      <AboutLanding>
        <Square />
        <IntroRow />
      </AboutLanding>
      <RowSpacer />
      <TimelineRow />
      <RowSpacer />
      <GridRow />
      <RowSpacer />
      <SkillsGrid />
      <Hamburger />
      <Footer />
    </Content>
  </Layout>
);

export default AboutPage;
