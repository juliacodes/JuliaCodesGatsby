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
import ProjectRow2 from "../components/ProjectRow2";
import Loading from "../components/Loading";
import LandingImage from "../images/LandingImage.jpg";

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
    height: 650px;
    margin-left: 100px;
    margin-top: 50px;
    background-position-x: right;
    background-position-y: unset;
  }
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ssrDone: false
    };
  }

  componentDidMount() {
    this.setState({
      ssrDone: true,
      showLoadingScreen: sessionStorage.getItem("showLoadingScreen") !== "false"
    });
  }

  componentDidUpdate() {
    if (this.state.showLoadingScreen) {
      window.scrollTo(0, 0); // scroll to top on reload
      document.body.style.overflow = "hidden"; // disable scroll during loading
      setTimeout(() => {
        this.setState({ showLoadingScreen: false });
        document.body.style.overflow = "scroll"; // enable scroll
      }, 2000);
      sessionStorage.setItem("showLoadingScreen", false);
    }
  }

  render() {
    return (
      <>
        {!this.state.ssrDone || (this.state.showLoadingScreen && <Loading />)}
        <Layout>
          <Link title="Home - Julia Johnson" to="/">
            <Logo />
          </Link>
          <Helmet>
            <title>Julia Johnson - Front End Developer - JuliaCodes</title>
            <meta
              name="title"
              content="Julia Johnson - Front End Developer - JuliaCodes"
            />
            <meta
              name="description"
              content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://juliacodes.com/" />
            <meta
              property="og:title"
              content="Julia Johnson - Front End Developer - JuliaCodes"
            />
            <meta
              property="og:description"
              content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
            />
            <meta
              property="og:image"
              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://juliacodes.com/" />
            <meta
              property="twitter:title"
              content="Julia Johnson - Front End Developer - JuliaCodes"
            />
            <meta
              property="twitter:description"
              content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
            />
            <meta
              property="twitter:image"
              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
            <html lang="en" />
          </Helmet>
          <Container>
            <TextContent>
              <Heading>
                Hi there, I’m Julia. <br />
                Front End <span>Developer</span>, <br />
                Student and Minimalist
              </Heading>
              <Paragraph>
                Technology has always been at the very core of my interests.
                From a young age, I've loved the idea of being able to build
                something new that people around the world can experience and
                interact with.
                <br />
                <br /> As I've grown as a developer, I've worked alongside
                senior designers and developers who have raised my standards for
                whats expected of any web application. Through these
                experiences, I've had the opportunity to create memorable
                products that are not only enjoyable to use, but are written in
                code thats maintainable and easy to understand.
                <br />
              </Paragraph>
              <ContactEmail />
            </TextContent>
            <HeadingImage />
          </Container>
          <SubContainer>
            <TextContent>
              <Heading>What I've been working on </Heading>
              <SubParagraph>
                I like to stay busy and always have a project in the works. Take
                a look at some of the applications, articles and companies I've
                dedicated my time to.
              </SubParagraph>
            </TextContent>
          </SubContainer>
          <SubContainer>
            <ProjectRow />
          </SubContainer>
          <SubContainer>
            <ProjectRow2 />
          </SubContainer>
        </Layout>
        <Footer instagramDisplay="flex" />
      </>
    );
  }
}

export default IndexPage;
