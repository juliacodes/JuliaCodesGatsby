import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components/macro';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Logo from '../Logo';
import { breakpoints } from '../Media';
import ContactEmail from '../ContactEmail';
import InstagramGrid from '../InstagramGrid';
import ProjectRow from '../ProjectRow';

const FooterCont = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fcfcfc;
    padding: 40px 0 0 0;
    margin: 50px 0 0 0;

    a {
        text-align: left;
        color: black;
    }

    @media (min-width: ${breakpoints.tabletMin}) {
        padding: 0;
        margin: 100px 0 0 0;
    }
`;

const Variable = styled.div`
    display: ${(props) => props.projectDisplay || 'none'};
    margin-bottom: 100px;
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
        padding: 100px 0 75px 0;
        margin: 75px auto 0 auto;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
`;

const SubContainer = styled.div`
    margin: 60px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 50px;
    }
`;

const SubParagraph = styled(Paragraph)`
    margin-top: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 60%;
    }
`;

const Container = styled.div`
    margin: 100px 0 0 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const Social = styled.div`
    a {
        margin: 0 0 0 30px;
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        padding-bottom: 3px;

        :hover {
            border-bottom: 2px solid black;
        }
    }
`;

function Footer(props) {
    return (
        <FooterCont>
            <Layout>
                <Variable projectDisplay={props.projectDisplay}>
                    <Heading>Other Projects</Heading>
                    <SubContainer>
                        <ProjectRow />
                    </SubContainer>
                </Variable>
                <SubContainer>
                    <TextContent>
                        <Heading>Let's Build Something Together</Heading>
                        <SubParagraph>
                            Feel free to reach out if you're looking for a
                            developer, have a question, or just want to connect.
                        </SubParagraph>
                        <ContactEmail />
                    </TextContent>
                </SubContainer>
                <InstagramGrid instagramDisplay={props.instagramDisplay} />
                <Container>
                    <Link title='Home - Julia Johnson' to='/'>
                        <Logo />
                    </Link>
                    <Social>
                        <a
                            title='Github Repository'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/juliacodes'
                        >
                            github
                        </a>
                        <a
                            title='Instagram - Juliacodes'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.instagram.com/juliacodes/'
                        >
                            instagram
                        </a>
                        <a
                            title='Twitter - julia_codes'
                            target='_blank'
                            rel='noreferrer'
                            href='https://twitter.com/julia_codes'
                        >
                            twitter
                        </a>
                    </Social>
                </Container>
            </Layout>
        </FooterCont>
    );
}

export default Footer;
