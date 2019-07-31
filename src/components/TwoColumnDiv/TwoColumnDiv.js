import React from "react";
import { Container } from "../../components/container";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import styled from "styled-components/macro";
import { breakpoints } from "../../../Media";
import Button from "../../components/Button";

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

const Image = styled(Container)`
  width: 100%;
  height: 300px;
  background-color: #d3d3d3;
  /* background-image: url("https://s3-alpha-sig.figma.com/img/a8b5/7dc0/f8f80687d70eca6d0daa526aca42f610?Expires=1563753600&Signature=XULw7Hmg2FFacy4LOrFog1-P9Pdkz4bD6M72dCEYmE5u6btZOd7geuB1biU5qaJB4DySYEhGWUsK4Iv4ucK003eBT33Y7mawc6D8h7ZbHUgwqkAi9JqdYDvA-HNnrs1rjcBjxLjPD5J7Ykser0SSbDSdmJQGFgoGpvZMioKw839TIFLlovJlJQRXYPomePjif17ZoBHvR4LAkPatjYP169Njjws-KypTsg9NhzfVav2D2tYw-29tcpbM~nuJ6U5xzpeZU8FfCBqGy88WzTId6-3nxx1ptv9wkerInDHeRCyW4hkuKqTWyQEP02Wsr4qfgAO8NhuAbf1SQDBeu8ffNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"); */
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 40%;
    height: 700px;
    background-color: #d3d3d3;
    /* background-image: url("https://s3-alpha-sig.figma.com/img/a8b5/7dc0/f8f80687d70eca6d0daa526aca42f610?Expires=1563753600&Signature=XULw7Hmg2FFacy4LOrFog1-P9Pdkz4bD6M72dCEYmE5u6btZOd7geuB1biU5qaJB4DySYEhGWUsK4Iv4ucK003eBT33Y7mawc6D8h7ZbHUgwqkAi9JqdYDvA-HNnrs1rjcBjxLjPD5J7Ykser0SSbDSdmJQGFgoGpvZMioKw839TIFLlovJlJQRXYPomePjif17ZoBHvR4LAkPatjYP169Njjws-KypTsg9NhzfVav2D2tYw-29tcpbM~nuJ6U5xzpeZU8FfCBqGy88WzTId6-3nxx1ptv9wkerInDHeRCyW4hkuKqTWyQEP02Wsr4qfgAO8NhuAbf1SQDBeu8ffNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"); */
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const RightColumn = styled(Container)`
  width: 100%;
  margin: 50px 20px;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 40%;
    height: auto;
    vertical-align: middle;
  }
`;

function TwoColumnDiv() {
  return (
    <FlexContainer>
      <Image></Image>
      <RightColumn>
        <Heading>About Me</Heading>
        <Paragraph>
          Born and Raised in the Chicago suburbs, and currently{" "}
          <strong>
            {" "}
            working in The Netherlands as a Front End Web Development Intern
          </strong>
          , learn all about my skills and interests here
        </Paragraph>
        <Button>Read About Me</Button>
      </RightColumn>
    </FlexContainer>
  );
}

export default TwoColumnDiv;
