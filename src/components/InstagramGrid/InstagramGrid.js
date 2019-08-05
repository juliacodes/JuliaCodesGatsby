import React from "react";
import styled from "styled-components/macro";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { breakpoints } from "../Media";
import coffee from "../../images/coffee.jpg";
import ipad from "../../images/ipad.jpg";
import sticker from "../../images/sticker.jpg";
import comp from "../../images/comp.jpg";

const InstagramCTA = styled.div`
  margin-top: 100px;
  display: ${props => props.instagramDisplay || "none"};
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
  flex-wrap: wrap-reverse;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const LeftGrid = styled.div`
  flex: 100%;
  padding: 0px;
  margin-top: 40px;
  align-items: left;
  display: flex;
  max-width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 30%;
    margin-top: 0px;
    max-width: 200px;
    margin-right: 200px;
  }
`;

const GridLeft = styled.div`
  grid-area: Left;
  height: 220px;
  background-image: url(${comp});
  background-size: cover;
  border-radius: 4px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 300px;
  }
`;
const CenterTop = styled.div`
  grid-area: centertop;
  background-image: url(${sticker});
  background-size: cover;
  border-radius: 4px;
  height: 100px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: unset;
  }
`;
const CenterBot = styled.div`
  grid-area: centerbot;
  background-image: url(${coffee});
  border-radius: 4px;
  background-size: cover;
  height: 100px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: unset;
  }
`;
const GridRight = styled.div`
  grid-area: Right;
  height: 220px;
  background-image: url(${ipad});
  border-radius: 4px;
  background-size: cover;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 300px;
  }
`;

const RightGrid = styled.div`
  flex: 100%;
  flex-wrap: wrap;
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Left Left centertop Right Right" "Left Left centerbot Right Right";
  grid-gap: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 70%;
  }
  * {
    position: relative;
  }
`;

const CTAText = styled.div`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-position: center center;

  ${Heading} {
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 129.69%;
    text-align: left;
    max-width: 90%;
    letter-spacing: 0.03em;

    @media (min-width: ${breakpoints.mobileMax}) {
      max-width: 200px;
      text-align: left;
    }
  }
`;

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-align: left;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;

  @media (min-width: ${breakpoints.mobileMax}) {
    text-align: right;
  }

  :hover {
    border-bottom: 2px solid black;
  }

  span {
    font-size: 20px;
  }
`;

function InstagramGrid(props) {
  return (
    <InstagramCTA instagramDisplay={props.instagramDisplay}>
      <LeftGrid>
        <CTAText>
          <Heading>I'm a lot cooler on instagram</Heading>
          <a
            target="_blank"
            title="Instagram - JuliaCodes"
            href="https://www.instagram.com/juliacodes/"
          >
            <ProjectLink>
              See More <span>&#8250;</span>
            </ProjectLink>
          </a>
        </CTAText>
      </LeftGrid>
      <RightGrid>
        <GridLeft></GridLeft>
        <CenterTop></CenterTop>
        <CenterBot></CenterBot>
        <GridRight></GridRight>
      </RightGrid>
    </InstagramCTA>
  );
}

export default InstagramGrid;
