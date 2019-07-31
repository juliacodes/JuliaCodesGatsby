import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Hamburger from "../components/hamburger";
import DescriptionHome from "../components/descriptionhome";

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

const WhiteTriangle = styled.div`
  opacity: 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    opacity: 1;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 40%;
    height: 0;
    border-top: 100vh solid white;
    border-right: 30vw solid transparent;
  }
`;

const Left = styled.div`
  flex: 100%;
  z-index: 1;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const JULIA = styled.div`
  background-color: white;
  padding: 20px;
  width: 200px;
  z-index: 99;

  p {
    margin: 0 auto;
    font-weight: 900;
    font-size: 100px;
    line-height: 86.95%;
    letter-spacing: -0.03em;

    @media (min-width: ${breakpoints.mobileMax}) {
      font-size: 200px;
    }
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    background-color: unset;
    padding: 0;
    width: 100%;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    background-position: center center;
  }
`;

const Right = styled.div`
  flex: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const IndexPage = () => (
  <Layout>
    <Content>
      <HomeLanding>
        <Hamburger />
        <Left>
          <WhiteTriangle />
          <JULIA>
            <p>
              JU <br />
              LIA
            </p>
          </JULIA>
        </Left>
        <Right>
          <DescriptionHome />
        </Right>
      </HomeLanding>
    </Content>
  </Layout>
);

export default IndexPage;
