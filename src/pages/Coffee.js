import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import '../index.css';
import Coffee1 from '../images/Coffee1.jpg';
import Coffee2 from '../images/Coffee2.jpg';
import Coffee3 from '../images/Coffee3.jpg';

import ForecastLogic from '../images/ForecastLogic.jpg';
import ForecastComp from '../images/ForecastComp.jpg';
import ForecastStack from '../images/ForecastStack.svg';

const Container = styled.div`
    margin: 50px 0;
    width: 100%;
    height: auto;
    align-items: center;

    h1 {
        font-size: 30px;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        margin: 100px 0;
    }
`;

const TextContent = styled.div`
    max-width: 800px;
    margin-top: 40px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-top: 100px;
    }

    :nth-child(1) > ${Heading} {
        font-size: 40px;

        @media (min-width: ${breakpoints.mobileMax}) {
            font-size: 60px;
        }
    }
`;

const ProjectTable = styled.table`
    width: 100%;
    text-align: left;

    th {
        font-style: normal;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 129.69%;
        letter-spacing: 0.03em;
        padding-bottom: 20px;
    }

    td {
        width: 100px;
        font-size: 14px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
    }
`;

const Bold = styled.td`
    a {
        font-size: 16px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
        font-weight: 900;
        color: #dd7834;
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        padding-bottom: 3px;

        :hover {
            border-bottom: 2px solid #dd7834;
        }
    }
`;

const Image = styled.img`
    margin: 50px 0 20px 0;
    width: 105%;
    transform: translatex(-2.5%);
    height: auto;
    border-radius: 4px;

    @media (min-width: ${breakpoints.mobileMax}) {
        height: auto;
        margin: 50px 0 50px 0;
    }
`;

const WebStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 100px 0;
    }
`;
const LeftContent = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${ForecastStack});
    background-repeat: no-repeat;
    background-position: center;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 55%;
    }
`;
const RightContent = styled.div`
    width: 100%;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const DuoImages = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 100px 0;
    }
`;

const LeftImage = styled.div`
    width: 100%;
    height: 350px;
    margin-right: 0;
    margin-bottom: 50px;
    background-image: url(${ForecastLogic});
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
        margin-right: 10%;
        background-position-x: left;

        height: 350px;
    }
`;
const RightImage = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 0px;
    background-image: url(${ForecastComp});
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        background-position-x: right;
    }
`;

const CenterText = styled.div`
    width: 100%;
    padding: 50px 0;
    text-align: center;

    ${Paragraph} {
        max-width: 700px;
        margin: 30px auto;
    }
`;

const DuoLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        width: 60%;
    }
`;

const LinkLeft = styled.div`
    width: 100%;
    margin: 10px auto;
    text-align: center;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: unset;
        text-align: left;
        margin: unset;
    }
`;
const LinkRight = styled(LinkLeft)``;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid white;
    transition: border-bottom 0.2s;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

function Forecast(props) {
    return (
        <>
            <Helmet
                title='Julia Johnson - Coffee By Benjamin'
                meta={[
                    {
                        name: 'Julia Johnson',
                        content: 'Portfolio - Julia Codes'
                    },
                    {
                        name: 'Julia Johnson',
                        content:
                            'Julia Johnson - JuliaCodes - Front End Developer'
                    }
                ]}
            >
                {' '}
                <html lang='en' />
            </Helmet>
            <Layout>
                <Link to='/'>
                    <Logo />
                </Link>
                <Container>
                    <TextContent>
                        <Heading>Coffee By Benjamin</Heading>
                        <Paragraph>
                            Coffee by Benjamin is a React Application built for
                            a self roasting coffee kit. I built this project
                            from scratch alongside a designer with React,
                            GraphQL, and Shopify. This e-commerce application
                            required a lot of heavy lifting to create a
                            universal cart and overall shopping experience as
                            well as introduce the product and include support
                            pages.
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <th>Stack</th>
                                    <th>Live</th>
                                </tr>
                                <tr>
                                    <td>Internship</td>
                                    <td>React</td>

                                    <Bold>
                                        <a href='https://coffeebybenjamin.com/'>
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>GraphQL</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Styled-Components</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Shopify</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Netlify</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={Coffee1}
                        alt='Forecast Application Work in Progress'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            This project included 3 phases and iterations of the
                            site. Phase 1 simply allowed users to enter their
                            email to be alerted to when the product was
                            released. Phase 2 was quite larger and is designed
                            to introduce users to the Coffee By Benjamin product
                            and answer any questions they may have. Phase three
                            is by far the largest and most complex, as it
                            includes the full shop and cart pages as well as the
                            logic and backend that goes along with it. <br />
                            <br />I found that the best way to implement these 3
                            phases without having separate versions saved was to
                            incorporate a feature flag that will pass the
                            current state that should be displayed and then
                            render content conditionally.
                        </Paragraph>
                    </TextContent>
                    <WebStack>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Web Stack and Explanation</Heading>
                            <Paragraph>
                                React made the most sense for the web
                                application because it required to connect to
                                graphQL and the Shopify-SDK for javascript ties
                                into React very smoothly. The Shopify-Buy-SDK
                                was chosen because of the ability for the client
                                to modify the products without any complex
                                coding knowledge.
                            </Paragraph>
                            <Paragraph>
                                React hooks and session storage are also used
                                throughout the project to maintain the user cart
                                items and allows the cart count and other
                                shopping data to be displayed universally
                                without the need for Redux. Netlify is also an
                                obvious choice for deployment because of its
                                speed and reliability.
                            </Paragraph>
                        </RightContent>
                    </WebStack>
                    <Image
                        src={Coffee2}
                        alt='Forecast image with differing weather information'
                    />
                    <CenterText>
                        <Heading>Problems and Thought Process</Heading>
                        <Paragraph>
                            Like most projects, I ran into a few bumps along the
                            way, one particularly difficult area was
                            organization and structure of the code. Because of
                            this project's size, I realized how important
                            maintaining an organized structure would be.
                            <br /> <br /> I worked hard to keep components as
                            reusable as possible and utilized props for many
                            slight variations. I also used styled-components,
                            because the structure of CSS-in-js is much clearer
                            and prevents overrides.
                        </Paragraph>
                    </CenterText>
                    <Image
                        src={Coffee3}
                        alt='Forecast image with differing weather information'
                    />
                    <TextContent>
                        <Heading>Lessons Learned</Heading>
                        <Paragraph>
                            I could spend all day describing the lessons that I
                            learned while working on this project, but the most
                            important ones involved my newfound understanding of
                            React Hooks, Git management, Feature Keys, and API
                            integration. As my first large project using React,
                            I learned a lot of lessons regarding code structure
                            and organization. When I first began, I would write
                            sloppy code and move on, but now I know how doing so
                            can come back to bite you; I now spend a lot more
                            time refactoring and improving every line I code I
                            write, for the best readability and far fewer
                            headaches.
                        </Paragraph>
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Forecast;
