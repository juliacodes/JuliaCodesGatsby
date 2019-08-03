import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import ContactEmail from "../components/ContactEmail";
import Footer from "../components/footer";
import ProjectRow from "../components/ProjectRow";
import Loading from "../components/Loading";
import LandingImage from "../images/LandingImage.png";

import "../index.css";

const Container = styled.div`
  margin: 100px 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
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

const TextContent = styled.div`
  max-width: 700px;
`;

const HeadingImage = styled.div`
  margin-left: 0px;
  margin-top: 50px;
  width: 100%;
  border-radius: 4px;
  height: 300px;
  background-size: cover;
  background-image: url(${LandingImage});
  background-color: #f5f5f5;
  background-position-y: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 50%;
    height: 600px;
    margin-left: 100px;
    margin-top: 50px;
    background-position-y: unset;
  }
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = { loaded: false };
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 3200);
  }

  render() {
    return (
      <>
        {!this.state.loaded && <Loading />}
        <>
          <Layout>
            <Link to="/">
              <Logo />
            </Link>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Julia Johnson | Front End Developer</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Container>
              <TextContent>
                <Heading>
                  Hi there, I’m Julia. <br />
                  Front End <span>Developer</span>, <br />
                  Student and Minimalist
                </Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ac pretium magna. Mauris lorem tortor, consectetur vitae
                  tellus vel, tempor iaculis turpis. Nunc venenatis nisi nec
                  orci gravida consequat vitae et risus.
                </Paragraph>
                <ContactEmail />
              </TextContent>
              <HeadingImage />
            </Container>
            <SubContainer>
              <TextContent>
                <Heading>What I've been working on </Heading>
                <SubParagraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ac pretium magna.
                </SubParagraph>
              </TextContent>
            </SubContainer>
            <SubContainer>
              <ProjectRow />
            </SubContainer>
            <SubContainer>
              <ProjectRow />
            </SubContainer>
          </Layout>
          <Footer instagramDisplay="flex" />
        </>
      </>
    );
  }
}

export default IndexPage;
