import React from "react";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { breakpoints } from "../Media";
import coffee from "../../images/coffee.png";
import ipad from "../../images/ipad.png";
import sticker from "../../images/sticker.png";
import comp from "../../images/comp.png";

const InstagramCTA = styled.div`
  margin-top: 100px;
  display: ${props => props.instagramDisplay || "none"};
  justify-content: space-between;
  height: auto;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const LeftGrid = styled.div`
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
    height: 200px;
  }
`;

const GridLeft = styled.div`
  grid-area: Left;
  height: 320px;
  background-image: url(${comp});
  background-size: cover;
  border-radius: 4px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 320px;
  }
`;
const CenterTop = styled.div`
  grid-area: centertop;
  background-image: url(${sticker});
  background-size: cover;
  border-radius: 4px;

  height: 150px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: unset;
  }
`;
const CenterBot = styled.div`
  grid-area: centerbot;
  background-image: url(${coffee});
  border-radius: 4px;
  background-size: cover;
  height: 150px;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: unset;
  }
`;
const GridRight = styled.div`
  grid-area: Right;
  height: 320px;
  background-image: url(${ipad});
  border-radius: 4px;
  background-size: cover;

  @media (min-width: ${breakpoints.mobileMax}) {
    height: 320px;
  }
`;

const RightGrid = styled.div`
  flex: 100%;
  padding: 0px;
  margin-top: 40px;
  align-items: center;
  display: flex;
  max-width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 30%;
    margin-top: 0px;

    max-width: 200px;
    margin-left: 200px;
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
    /* or 32px */
    text-align: left;
    max-width: 100%;
    letter-spacing: 0.03em;

    @media (min-width: ${breakpoints.mobileMax}) {
      max-width: 200px;
      text-align: right;
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
        <GridLeft></GridLeft>
        <CenterTop></CenterTop>
        <CenterBot></CenterBot>
        <GridRight></GridRight>
      </LeftGrid>
      <RightGrid>
        <CTAText>
          <Heading>I'm a lot cooler on instagram</Heading>
          <Link as="">
            <ProjectLink>
              See More <span>&#8250;</span>
            </ProjectLink>
          </Link>
        </CTAText>
      </RightGrid>
    </InstagramCTA>
  );
}

export default InstagramGrid;
