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
    height: 600px;
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
        <>
          <Layout>
            <Link title="Home - Julia Johnson" to="/">
              <Logo />
            </Link>
            <Helmet
              title="Julia Johnson - Front End Developer"
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
                  I like to stay busy and always have a project in the works.
                  Take a look at some of the applications, articles and
                  companies I've dedicated my time to.
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
      </>
    );
  }
}

export default IndexPage;
