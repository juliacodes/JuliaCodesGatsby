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
import decore1 from '../images/decore1.jpg';
import decore2 from '../images/decore2.jpg';
import decore3 from '../images/decore3.jpg';

import ForecastLogic from '../images/ForecastLogic.jpg';
import ForecastComp from '../images/ForecastComp.jpg';
import decoreStack from '../images/decoreStack.jpg';

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
    background-image: url(${decoreStack});
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
        border-bottom: 2px solid orange;
    }

    span {
        font-size: 20px;
    }
`;

function Decore() {
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
                        <Heading>Decore</Heading>
                        <Paragraph>
                            Decore is a project I built alongside{' '}
                            <a
                                style={{
                                    color: '#DD7834',
                                    fontWeight: '900'
                                }}
                                href='https://github.com/imtrent'
                            >
                                Ian Trent
                            </a>{' '}
                            for a class project. We decided to create a react
                            web application that would help other developers get
                            started with their web projects. Decore allows users
                            to customize a layout setup that will generate
                            custom html and css code that can be used as a
                            starter template for any website.
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <th>Stack</th>
                                    <th>Code</th>
                                    <th>Live</th>
                                </tr>
                                <tr>
                                    <td>Team Project</td>
                                    <td>React</td>

                                    <Bold>
                                        <a href='https://github.com/juliajohnson18/Interactive-Site-Builder'>
                                            Repository
                                        </a>
                                    </Bold>
                                    <Bold>
                                        <a href='https://site-builder.netlify.com/'>
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Styled-Components</td>
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
                        src={decore1}
                        alt='Forecast Application Work in Progress'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            We built this project because we know how tedious
                            and repetitive starting a new project from scratch
                            can be, and we wanted to build something that we
                            would also use ourselves. <br />
                            <br />
                            We had a timeframe of a little over a month to build
                            out this project, and our goal was to have the
                            application fully functioning by the end of that
                            timeframe.
                        </Paragraph>
                    </TextContent>
                    <WebStack>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Web Stack and Explanation</Heading>
                            <Paragraph>
                                React was the clear choice for this project,
                                because of its ease of state management and the
                                amount of packages available. We also utilized
                                Netlify as a server to host Decore, because it
                                allows live updates alongside github.
                            </Paragraph>
                            <Paragraph>
                                In the future, we hope to add Redux to this
                                project to clean up the states a bit, and we
                                also are looking into a backend that can allow
                                writing to files so users can download the code
                                right to their computer.
                            </Paragraph>
                        </RightContent>
                    </WebStack>
                    <Image
                        src={decore2}
                        alt='Forecast image with differing weather information'
                    />
                    <CenterText>
                        <Heading>Problems and Thought Process</Heading>
                        <Paragraph>
                            Processing the necessary code into the editor was
                            the most complex part of this process, we needed to
                            update the object listing of the elements everytime
                            a user added, removed, or reordered any element.
                            This required complex state management in order to
                            display the proper html and css when exporting.
                        </Paragraph>
                    </CenterText>
                    <Image
                        src={decore3}
                        alt='Forecast image with differing weather information'
                    />
                    <TextContent>
                        <Heading>Lessons Learned</Heading>
                        <Paragraph>
                            This project helped to solidify a lot my React
                            knowledge, such as using hooks or updating the
                            states. I also got a lot of great practice using
                            ES6+ syntax across the entirety of the project. This
                            was a large code base to manage across a team, and
                            we all got some more great experience with version
                            control and reviewing each others code.
                        </Paragraph>
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Decore;
