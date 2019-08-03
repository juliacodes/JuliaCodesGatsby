import React from "react";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Logo from "../Logo";
import { breakpoints } from "../../../Media";
import ContactEmail from "../ContactEmail";

const FooterCont = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 0;
  margin: 100px 0 0 0;

  a {
    text-align: left;
    color: black;

    @media (min-width: ${breakpoints.tabletMin}) {
      text-align: right;
    }
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    margin: 0;
  }
`;

const Layout = styled.div`
  padding: 20px;
  margin: 25px auto;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 940px;
    padding: 100px 0 0 0;
    margin: 75px auto;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 100px 0 0 0;
    margin: 75px auto;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const SubContainer = styled.div`
  margin: 0px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 20px;
  max-width: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

const Container = styled.div`
  margin: 100px 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

function Footer() {
  return (
    <FooterCont>
      <Layout>
        <SubContainer>
          <TextContent>
            <Heading>Let's Build Something Together</Heading>
            <SubParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
              pretium magna.
            </SubParagraph>
            <ContactEmail />
          </TextContent>
        </SubContainer>
        <Container>
          <Link to="/">
            <Logo />
          </Link>
        </Container>
      </Layout>
    </FooterCont>
  );
}

export default Footer;
