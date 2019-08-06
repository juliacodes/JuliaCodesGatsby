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
import Awkward1 from "../images/Awkward1.jpg";
import Awkward2 from "../images/Awkward2.png";
import Awkward3 from "../images/Awkward3.png";
import AwkwardStack from "../images/AwkwardStack.svg";

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
  :nth-child(1) {
    ${Heading} {
      font-size: 40px;

      @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
      }
    }
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 100%;
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

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${AwkwardStack});
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
  height: 450px;
  margin-right: 0;
  margin-bottom: 50px;
  background-image: url(${Awkward2});
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10%;
    height: 650px;
    background-position-x: left;
  }
`;
const RightImage = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 50px;
  background-image: url(${Awkward3});
  background-size: contain;
  background-position-x: center;

  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0;
    background-position-x: right;

    height: 650px;
  }
`;

const CenterText = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    padding-top: 120px;
  }

  ${Heading} {
    font-size: 40px;
  }

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
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 150px;

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

function Forecast() {
  return (
    <>
      <Helmet
        title="Julia Johnson - Awkward"
        meta={[
          { name: "Julia Johnson", content: "Portfolio - Julia Codes" },
          {
            name: "Julia Johnson",
            content: "Julia Johnson - JuliaCodes - Front End Developer"
          }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Layout>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <TextContent>
            <Heading>Working at Awkward</Heading>
            <Paragraph>
              Forecast is a project I put together after learning the basics of
              GraphQL. This application was the perfect way to improve my
              understanding of making queries and managing larger sets of data.
              In this project, I utilized OpenWeatherMap API to gather the
              weather data and injected this data based on the user's zip code
              input.
            </Paragraph>
          </TextContent>
          <Image src={Awkward1} alt="Awkward's Office" />
          <TextContent>
            <Heading>Goal of Internship</Heading>
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
              <Heading>Concepts Learned</Heading>
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
            <Heading>Coffee By Benjamin</Heading>
            <Paragraph>
              I normally work through coding projects and logic by creating
              lists like above. Here I've written down some necessary elements
              that my program needs to find a solution for. I also note a few
              complications that arose once my app was up and running.
            </Paragraph>
          </CenterText>
          <Image src={Awkward1} alt="Coffee By Benjamin Project" />
          <DuoLinks>
            <LinkLeft>
              <a
                target="_blank"
                rel="noreferrer"
                title="Github Code"
                href="https://github.com/juliajohnson18"
              >
                <ProjectLink>
                  View Code <span>&#8250;</span>
                </ProjectLink>
              </a>
            </LinkLeft>
            <LinkRight>
              <a
                target="_blank"
                rel="noreferrer"
                title="Github Code"
                href="https://github.com/juliajohnson18"
              >
                <ProjectLink>
                  Live Site <span>&#8250;</span>
                </ProjectLink>
              </a>
            </LinkRight>
          </DuoLinks>
          <TextContent>
            <Heading>My Contributions</Heading>
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
          <CenterText>
            <Heading>Walter Note</Heading>
            <Paragraph>
              I normally work through coding projects and logic by creating
              lists like above. Here I've written down some necessary elements
              that my program needs to find a solution for. I also note a few
              complications that arose once my app was up and running.
            </Paragraph>
          </CenterText>
          <Image src={Awkward1} alt="Walter Note Application" />
          <DuoLinks>
            <LinkLeft>
              <a
                target="_blank"
                rel="noreferrer"
                title="Github Code"
                href="https://github.com/juliajohnson18"
              >
                <ProjectLink>
                  View Code <span>&#8250;</span>
                </ProjectLink>
              </a>
            </LinkLeft>
            <LinkRight>
              <a
                target="_blank"
                rel="noreferrer"
                title="Github Code"
                href="https://github.com/juliajohnson18"
              >
                <ProjectLink>
                  Live Site <span>&#8250;</span>
                </ProjectLink>
              </a>
            </LinkRight>
          </DuoLinks>
          <TextContent>
            <Heading>My Contributions</Heading>
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
