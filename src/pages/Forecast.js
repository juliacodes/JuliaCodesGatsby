import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/footer";
import "../index.css";
import Forecast1 from "../images/Forecast1.jpg";
import Forecast2 from "../images/Forecast2.jpg";
import ForecastLogic from "../images/ForecastLogic.jpg";
import ForecastComp from "../images/ForecastComp.jpg";
import ForecastStack from "../images/ForecastStack.svg";

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

  :nth-child(1) > ${Heading} {
    font-size: 40px;

    @media (min-width: ${breakpoints.mobileMax}) {
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
    font-size: 14px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
  }
`;

const Bold = styled.td`
  a {
    font-size: 16px;
    line-height: 184.69%;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #dd7834;
    border-bottom: 2px solid transparent;
    transition: 0.3s;
    padding-bottom: 3px;

    :hover {
      border-bottom: 2px solid #dd7834;
    }
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 105%;
  transform: translatex(-2.5%);
  height: auto;
  border-radius: 4px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: auto;
    margin: 100px 0 50px 0;
  }
`;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;

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
  height: 350px;
  margin-right: 0;
  margin-bottom: 50px;
  background-image: url(${ForecastLogic});
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10%;
    background-position-x: left;

    height: 350px;
  }
`;
const RightImage = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 0px;
  background-image: url(${ForecastComp});
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    background-position-x: right;
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
  width: 100%;
  margin: 0 auto;
  margin-bottom: 150px;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    width: 60%;
  }
`;

const LinkLeft = styled.div`
  width: 100%;
  margin: 10px auto;
  text-align: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: unset;
    text-align: left;
    margin: unset;
  }
`;
const LinkRight = styled(LinkLeft)``;

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
      <Helmet
        title="Julia Johnson - Forecast"
        meta={[
          { name: "Julia Johnson", content: "Portfolio - Julia Codes" },
          {
            name: "Julia Johnson",
            content: "Julia Johnson - JuliaCodes - Front End Developer"
          }
        ]}
      >
        {" "}
        <html lang="en" />
      </Helmet>
      <Layout>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <TextContent>
            <Heading>Forecast</Heading>
            <Paragraph>
              Forecast is a project I put together after learning the basics of
              GraphQL. This application was the perfect way to improve my
              understanding of making queries and managing larger sets of data.
              In this project, I utilized OpenWeatherMap API to gather the
              weather data and injected this data based on the user's zip code
              input.
            </Paragraph>
            <ProjectTable>
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>Stack</th>
                  <th>Code</th>
                  <th>Live</th>
                </tr>
                <tr>
                  <td>Personal</td>
                  <td>React</td>

                  <Bold>
                    <a
                      title="React Weather API"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/juliajohnson18/react-weather-api"
                    >
                      Repository
                    </a>
                  </Bold>

                  <Bold>
                    <a
                      title="React Weather API"
                      target="_blank"
                      rel="noreferrer"
                      href="https://juliacodes-react-weather-api.netlify.com/?_ga=2.21680952.2095234260.1564771306-1974042282.1561901389&_gac=1.15529028.1561901389.Cj0KCQjwu-HoBRD5ARIsAPIPencUBnLPuagkqomokcwvip05K7oU4TtFiMIosaNakqNaPUKbB9ocHWIaAvfyEALw_wcB"
                    >
                      View Site
                    </a>
                  </Bold>
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
              </tbody>
            </ProjectTable>
          </TextContent>
          <Image src={Forecast1} alt="Forecast Application Work in Progress" />
          <TextContent>
            <Heading>Project Purpose and Goal</Heading>
            <Paragraph>
              As the main purpose of this project was to improve my
              comprehension of GraphQL and APIs in general, I spend a good
              amount of time making sure I was using the best practices of state
              management and data manipulation. Besides this, I also wanted to
              make this a weather application that I would enjoy using, meaning
              it had to be visually pleasing and allow the user to see their
              weather status at a quick glance.
            </Paragraph>
          </TextContent>
          <WebStack>
            <LeftContent></LeftContent>
            <RightContent>
              <Heading>Web Stack and Explanation</Heading>
              <Paragraph>
                For this project I used React, but many different Javascript
                libraries could've been used, and even vanilla Javascript could
                have been easily implemented. I chose to use React because of
                its ease of use and the ability to smoothly manipulate states
                without having to re-render the pages.
              </Paragraph>
              <Paragraph>
                GraphQL was mainly chosen because I wanted to improve my
                abilities with it, but also because their server performance is
                extremely fast, and I knew there wouldn't be any wait time. To
                publish the application, I hosted it through Netlify, because
                its easy, free and how I've hosted many of my projects.
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
              I normally work through coding projects and logic by creating
              lists like above. Here I've written down some necessary elements
              that my program needs to find a solution for. I also note a few
              complications that arose once my app was up and running. <br />{" "}
              <br /> In this case, I noticed that it would grow tedious for a
              user to have to enter and re-enter their zip code over and over,
              so I saved their first entry to Localhost. Another small problem
              was making the proper icon render, as the data I was pulling had
              no quick numerical reference for the icons, I was forced to have
              the icons render based on the object that described the weather.
            </Paragraph>
          </CenterText>
          <Image
            src={Forecast2}
            alt="Forecast image with differing weather information"
          />
          <DuoLinks>
            <LinkLeft>
              <a
                title="React Weather API"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/juliajohnson18/react-weather-api"
              >
                <ProjectLink>
                  View Code <span>&#8250;</span>
                </ProjectLink>
              </a>
            </LinkLeft>
            <LinkRight>
              <a
                title="React Weather API"
                target="_blank"
                rel="noreferrer"
                href="https://juliacodes-react-weather-api.netlify.com/?_ga=2.21680952.2095234260.1564771306-1974042282.1561901389&_gac=1.15529028.1561901389.Cj0KCQjwu-HoBRD5ARIsAPIPencUBnLPuagkqomokcwvip05K7oU4TtFiMIosaNakqNaPUKbB9ocHWIaAvfyEALw_wcB"
              >
                <ProjectLink>
                  Live Site <span>&#8250;</span>
                </ProjectLink>
              </a>
            </LinkRight>
          </DuoLinks>
          <TextContent>
            <Heading>Future Improvements</Heading>
            <Paragraph>
              I still have a few features I would love to implement with this
              project. I'd really like to update the background images so that
              they display based on what the weather status currently is, so
              that the application has the feel of the weather they're currently
              experiencing. I also have plans to create secondary zip-codes, so
              the user can click back and forth between two locations and
              compare the weather.
            </Paragraph>
          </TextContent>
        </Container>
      </Layout>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Forecast;
