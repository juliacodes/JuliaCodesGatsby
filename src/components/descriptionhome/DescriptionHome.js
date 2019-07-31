import React, { Component } from "react";
import { breakpoints } from "../../../Media";
import styled from "styled-components/macro";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import insta from "../../images/insta.png";
import medium from "../../images/medium.png";
import github from "../../images/github.png";

const Description = styled.div`
  padding: 100px 20px;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-position: center center;
  @media (min-width: ${breakpoints.mobileMax}) {
    padding: 0;
    width: 100%;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    background-position: center center;
  }

  h1 {
    text-align: center;
    @media (min-width: ${breakpoints.mobileMax}) {
      text-align: left;
    }
  }

  p {
    margin: 20px auto;
    text-align: center;
    @media (min-width: ${breakpoints.mobileMax}) {
      margin: 20px 0;
      text-align: left;
    }
  }
`;

const SocialLinks = styled.div`
  width: auto;
  padding: 0;
  display: flex;
  align-content: space-around;
  margin: 20px auto;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: unset;
    width: 100%;
  }
`;

const LinkDiv = styled.div`
  display: inline-block;
  width: 130px;

  p {
    margin: 0;
    display: inline;
    font-weight: 900;
    color: black;
  }
`;

const IconImageInsta = styled.div`
  background-image: url(${insta});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;

const IconImageMedium = styled.div`
  background-image: url(${medium});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;

const IconImageGithub = styled.div`
  background-image: url(${github});
  background-size: cover;
  display: inline-block;
  width: 30px;
  margin-right: 10px;
  transform: translateY(9px);
  height: 30px;
`;
class DescriptionHome extends Component {
  render() {
    return (
      <Description>
        <Heading>Front End Web Developer</Heading>
        <Paragraph>
          I’m a student at <strong>Purdue University</strong>, a digital
          minimalist, an avid book worm, a quick learner & passionate about
          technology.{" "}
          <strong>
            Feuled by black coffee and a drive to be better than I was
            yesterday.
          </strong>
        </Paragraph>
        <SocialLinks>
          <LinkDiv>
            <IconImageInsta />
            <Paragraph>37.5k</Paragraph>
          </LinkDiv>
          <LinkDiv>
            <IconImageMedium />
            <Paragraph>1.8k</Paragraph>
          </LinkDiv>
          <LinkDiv>
            <IconImageGithub />
            <Paragraph>500+</Paragraph>
          </LinkDiv>
        </SocialLinks>
      </Description>
    );
  }
}

export default DescriptionHome;
