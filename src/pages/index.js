import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import Hamburger from "../components/hamburger";
import DescriptionHome from "../components/descriptionhome";
import { Container } from "../components/container";
import TwoColumnDiv from "../components/TwoColumnDiv";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  max-width: 2000px;
  margin: 0 auto;

  * {
    font-family: "Lato", sans-serif;
    text-decoration: none;
  }

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

const WhiteTriangleAlt = styled.div`
  opacity: 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 0;
    border-bottom: 100vh solid white;
    border-left: 40vw solid transparent;
    opacity: 1;
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
    font-family: "Source Sans Pro", sans-serif;
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

const GrayContainer = styled(Container)`
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f2 100%);
  margin: 0;
`;

const SolidGrayContainer = styled(Container)`
  background-color: #f2f2f2;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 0;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    padding-left: 10%;
  }

  p {
    max-width: 400px;
  }
`;

const ProjectDescription = styled(Container)`
  width: 100%;
  height: 100%;
  height: auto;
  vertical-align: middle;
  margin-left: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 40%;
    margin-left: 5%;
  }
`;

const ProjectDiv = styled(Container)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 30%;
    height: 800px;
    display: block;
    margin: 100px;
  }
`;

const Project = styled(Container)`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d3d3d3;
  transition: box-shadow 0.2s;
  /* background-image: url("https://s3-alpha-sig.figma.com/img/0f29/4ab3/d756d27ec4094f94acb28e642e628864?Expires=1563753600&Signature=JYk6w9M-Jj4Er-y8IuSG-FEiZUTuj9M~QP7b4wMho1fT3~ElNEBmAMNTo-N1jvOAye~RuJDBXVSqvqxv06B0ffJIIQPA3IcZ~sLtgipNokLkvWR4XhTOsc-mcbzrsExUkK~ERKBUiA0a4uO80vJpWIyygk~GyQLkamxvS4cp36rXe1K97nG6LzhMSgcFG86PQTr6EGk6ZqllqdIoqkOHdDPKVnMIiVcZO7XCOGOGU8SpVnP8FR7ZCxC-6KERGw2x4naITmG3uI5Is9EI1Js4Q~SHDSjepUJr9bnyNgJyhPHbAdTV-FI74dvWBAVsTS2KYPCeBbr9szlP~dFcXoNKNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"); */

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 0 20px 20px 40px;
    width: 400px;
    height: 33%;
  }

  ::after {
    content: "+";

    opacity: 0;
    transform: translateY(20px);
    transition: 0.2s;
    font-size: 20px;
    content: "+";
    padding: 20px 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: white;
  }

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    ::after {
      transform: translateY(0);
      opacity: 1;
    }
  }
  :nth-child(1) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(0px);
    }
  }

  :nth-child(2) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(-100px);
    }
  }

  :nth-child(3) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(-200px);
    }
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
      <GrayContainer>
        <TwoColumnDiv />
      </GrayContainer>
      <SolidGrayContainer>
        <WhiteTriangleAlt />
        <ProjectDescription>
          <Heading>My Projects</Heading>
          <Paragraph>
            I spend lots of my free exploring new technologies and picking up
            new development projects. <br />
            <br />
            Take a look at what I've been working on recently.
          </Paragraph>
          <Button>See My Work</Button>
        </ProjectDescription>
        <ProjectDiv>
          <Project />
          <Project />
          <Project />
        </ProjectDiv>
      </SolidGrayContainer>
    </Content>
  </Layout>
);

export default IndexPage;
