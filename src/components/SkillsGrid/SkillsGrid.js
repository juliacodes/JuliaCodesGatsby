import React from "react";
import { breakpoints } from "../../../Media";
import styled from "styled-components/macro";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const DarkGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #1c202e;
  padding: 30px 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const LeftSkills = styled.div`
  flex: 100%;
  padding: 0;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 40%;
    padding: 0px;
  }
`;
const RightSkills = styled.div`
  flex: 100%;
  padding: 0;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex: 30%;
    padding: 0px;
  }
`;

const SkillDescription = styled.div`
  width: 100%;
  color: white;
  padding: 30px 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    padding: 30px 20%;
    width: unset;
  }

  h1 {
    max-width: 250px;
    font-size: 28px;
    margin: 30px 0;
    line-height: 128.95%;
    font-weight: 800;
    margin-bottom: 30px;
  }

  p {
    color: #dcdcdc;
    line-height: 156.19%;
    margin-bottom: 10px;
    letter-spacing: 0.03em;
  }
`;
function SkillsGrid() {
  return (
    <DarkGrid>
      <LeftSkills>
        <SkillDescription>
          <Heading>My Skills.</Heading>
          <Paragraph>
            I also make a mean grilled cheese sandwich, but I doubt that’s what
            you’re here to figure out.
          </Paragraph>
        </SkillDescription>
      </LeftSkills>
      <RightSkills>
        <SkillDescription>
          <Heading>Web Development</Heading>
          <Paragraph> HTML5 & CSS3 </Paragraph>
          <Paragraph> Javascript ES6 </Paragraph>
          <Paragraph>React </Paragraph>
          <Paragraph>React Native</Paragraph>
          <Paragraph> PHP & SQL</Paragraph>
        </SkillDescription>
      </RightSkills>
      <RightSkills>
        <SkillDescription>
          <Heading>Design</Heading>
          <Paragraph>Ilustrator</Paragraph>
          <Paragraph> Photoshop </Paragraph>
          <Paragraph>Figma</Paragraph>
          <Paragraph> Adobe XD </Paragraph>
          <Paragraph> Maya 3D</Paragraph>
        </SkillDescription>
      </RightSkills>
    </DarkGrid>
  );
}

export default SkillsGrid;
