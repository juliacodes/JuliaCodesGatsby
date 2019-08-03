import React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/footer";
import "../index.css";
import ForecastStack from "../images/ForecastStack.svg";

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  height: auto;
  align-items: center;
  h1 {
    font-size: 30px;
  }
`;

const TextContent = styled.div`
  max-width: 800px;

  :nth-child(1) {
    ${Heading} {
      font-size: 60px;
    }
  }
`;

const ProjectTable = styled.table`
  width: 100%;
  text-align: left;

  th {
    font-style: normal;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 129.69%;
    letter-spacing: 0.03em;
    padding-bottom: 20px;
  }

  td {
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }
`;

const Bold = styled.td`
  font-size: 16px;
  line-height: 184.69%;
  letter-spacing: 0.03em;
  font-weight: 900;
  color: #dd7834;
`;

const Image = styled.div`
  margin: 100px 0;
  width: 100%;
  height: 350px;
  border-radius: 4px;
  background-color: #f5f5f5;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 650px;
  }
`;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;
const LeftContent = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${ForecastStack});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 55%;
  }
`;
const RightContent = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

const DuoImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftImage = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  height: 350px;
  margin-right: 0;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10%;
  }
`;
const RightImage = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  height: 350px;
  margin-bottom: 50px;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0;
  }
`;

const CenterText = styled.div`
  width: 100%;
  padding-bottom: 50px;
  text-align: center;

  ${Paragraph} {
    max-width: 700px;
    margin: 30px auto;
  }
`;

const DuoLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 150px;
`;

const LinkLeft = styled.div``;
const LinkRight = styled.div``;

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

function Forecast(props) {
  return (
    <>
      <Layout>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <TextContent>
            <Heading>Forecast</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna. Mauris lorem tortor, consectetur vitae tellus vel,
              tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
              consequat vitae et risus. Mauris lorem tortor, consectetur vitae
              tellus vel, tempor iaculis turpis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Duis ac pretium magna. Mauris lorem
              tortor, consectetur vitae tellus vel, tempor iaculis turpis.
            </Paragraph>
            <ProjectTable>
              <tr>
                <th>Type</th>
                <th>Stack</th>
                <th>Code</th>
                <th>Live</th>
              </tr>
              <tr>
                <td>Personal</td>
                <td>React</td>
                <Bold>Repository</Bold>
                <Bold>View Site</Bold>
              </tr>
              <tr>
                <td></td>
                <td>GraphQL</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Netlify</td>
                <td></td>
                <td></td>
              </tr>
            </ProjectTable>
          </TextContent>
          <Image />
          <TextContent>
            <Heading>Project Purpose and Goal</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna. Mauris lorem tortor, consectetur vitae tellus vel,
              tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
              consequat vitae et risus. Mauris lorem tortor, consectetur vitae
              tellus vel, tempor iaculis turpis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Duis ac pretium magna. Mauris lorem
              tortor, consectetur vitae tellus vel, tempor iaculis turpis.
            </Paragraph>
          </TextContent>
          <WebStack>
            <LeftContent></LeftContent>
            <RightContent>
              <Heading>Web Stack and Explanation</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                pretium magna. Mauris lorem tortor, consectetur vitae tellus
                vel, tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
                consequat vitae et risus.
              </Paragraph>
              <Paragraph>
                lorem tortor, consectetur vitae tellus vel, tempor iaculis
                turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis ac pretium magna. Mauris lorem tortor, consectetur vitae
                tellus vel, tempor iaculis turpis.
              </Paragraph>
            </RightContent>
          </WebStack>
          <DuoImages>
            <LeftImage></LeftImage>
            <RightImage></RightImage>
          </DuoImages>
          <CenterText>
            <Heading>Problems and Thought Process</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna. Mauris lorem tortor, consectetur vitae tellus vel,
              tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
              consequat vitae et risus.
            </Paragraph>
          </CenterText>
          <Image />
          <DuoLinks>
            <LinkLeft>
              <Link as="">
                <ProjectLink>
                  View Code <span>&#8250;</span>
                </ProjectLink>
              </Link>
            </LinkLeft>
            <LinkRight>
              <Link as="">
                <ProjectLink>
                  Live Site <span>&#8250;</span>
                </ProjectLink>
              </Link>
            </LinkRight>
          </DuoLinks>
          <TextContent>
            <Heading>Future Improvements</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna. Mauris lorem tortor, consectetur vitae tellus vel,
              tempor iaculis turpis. Nunc venenatis nisi nec orci gravida
              consequat vitae et risus. Mauris lorem tortor, consectetur vitae
              tellus vel, tempor iaculis turpis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Duis ac pretium magna. Mauris lorem
              tortor, consectetur vitae tellus vel, tempor iaculis turpis.
            </Paragraph>
          </TextContent>
        </Container>
      </Layout>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Forecast;
