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
import Awkward1 from '../images/Awkward1.jpg';
import CoffeeThumb from '../images/CoffeeThumb.jpg';
import Walter1 from '../images/Walter1.jpg';
import Walter2 from '../images/Walter2.jpg';
import Awkward2 from '../images/Awkward2.png';
import Awkward3 from '../images/Awkward3.png';
import AwkwardStack from '../images/AwkwardStack.svg';

const LayoutAlt = styled(Layout)`
    margin-bottom: 0;
`;

const Container = styled.div`
    margin: 50px 0 0 0;
    width: 100%;
    height: auto;
    align-items: center;
    h1 {
        font-size: 30px;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        margin: 100px 0 0 0;
    }
`;

const TextContent = styled.div`
    max-width: 800px;
    margin-top: 40px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-top: 100px;
    }
    :nth-child(1) {
        ${Heading} {
            font-size: 40px;

            @media (min-width: ${breakpoints.mobileMax}) {
                font-size: 60px;
            }
        }
    }
`;

const Image = styled.img`
    margin: 50px 0 20px 0;
    width: 100%;
    height: auto;
    border-radius: 4px;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
    @media (min-width: ${breakpoints.mobileMax}) {
        height: auto;
        margin: 100px 0 50px 0;
    }
`;

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid white;
    transition: border-bottom 0.3s ease-in-out;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

const LinkSet = styled.div`
    :hover {
        ${Image} {
            transform: scale(1.02);
        }
        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    }
`;

const WebStack = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 100px 0;
    }
`;

const LeftContent = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${AwkwardStack});
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
    height: 450px;
    margin-right: 0;
    margin-bottom: 50px;
    background-image: url(${Awkward2});
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
        margin-right: 10%;
        height: 650px;
        background-position-x: left;
    }
`;
const RightImage = styled.div`
    width: 100%;
    height: 450px;
    margin-bottom: 50px;
    background-image: url(${Awkward3});
    background-size: contain;
    background-position-x: center;

    background-repeat: no-repeat;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0;
        background-position-x: right;

        height: 650px;
    }
`;

const DuoText = styled.div`
    display: flex;
    flex-wrap: nowrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 300px 0 0 0;
    }
`;

const DuoTextAlt = styled.div`
    display: flex;
    flex-wrap: nowrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 100px 0 0 0;
    }
`;

const LeftText = styled.div`
    width: 100%;
    height: 650px;
    margin-right: 0;
    margin-bottom: 50px;
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;

    ${Heading} {
        font-size: 40px;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
        margin-right: 10%;
        height: 650px;
        background-position-x: left;
    }
`;
const RightText = styled.div`
    width: 50%;
    height: 450px;
    margin-bottom: 50px;
    background-image: url(${Walter1});
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;
    transform: translateY(50px);

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0;
        background-position-x: right;
        height: 650px;
        transform: translateY(-100px);
    }
`;

const RightTextAlt = styled(RightText)`
    background-image: url(${Walter2});

    @media (min-width: ${breakpoints.mobileMax}) {
        background-position-x: left;
    }
`;

const CenterText = styled.div`
    width: 100%;
    padding-top: 30px;
    text-align: center;

    @media (min-width: ${breakpoints.mobileMax}) {
        padding-top: 120px;
    }

    ${Heading} {
        font-size: 40px;
    }

    ${Paragraph} {
        max-width: 700px;
        margin: 30px auto;
    }
`;

const CenterTextAlt = styled(CenterText)`
    width: 90%;
    padding: 10px;
    @media (min-width: ${breakpoints.mobileMax}) {
        padding: 30px;
    }
    a {
        font-weight: 700;
        font-size: 14px;
        line-height: 163.19%;
        display: inline;
        color: black;
        text-decoration: none;
        letter-spacing: 0.03em;
        border-bottom: 2px solid transparent;
        transition: border-bottom 0.3s;

        :hover {
            border-bottom: 2px solid black;
        }

        span {
            font-size: 20px;
        }
    }
`;

const DuoLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 150px;

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

function Chemistry() {
    return (
        <>
            <Helmet
                title='Julia Johnson - Awkward'
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
                <html lang='en' />
            </Helmet>
            <LayoutAlt>
                <Link to='/'>
                    <Logo />
                </Link>
                <Container>
                    <TextContent>
                        <Heading>Coffee Chemistry</Heading>
                        <Paragraph>
                            I had the opportunity to work at{' '}
                            <a href='https://awkward.co'>Awkward</a>, a digital
                            product agency in The Netherlands for my 2019 Summer
                            Internship. This was an amazing experience where I
                            was able to work alongside senior Developers and
                            experienced Designers to build multiple powerful
                            client facing products. <br /> <br />
                            Throughout the summer I was pushed and challenged in
                            every aspect of my skills and walked away as a much
                            more refined developer.
                        </Paragraph>
                    </TextContent>
                    <Image src={Awkward1} alt="Awkward's Office" />
                    <TextContent>
                        <Heading>Goal of Internship</Heading>
                        <Paragraph>
                            Prior to arriving at Awkward, I set some personal
                            goals for myself so that I had clear objectives on
                            what I wanted to improve on and accomplish. Of these
                            goals, my main priority involved improving my
                            abilities with React, more specifically, my
                            comprehension of React Hooks.
                            <br /> <br />
                            Another specific goal I had for my summer in The
                            Netherlands was improving my abilities as a member
                            of a team. I wanted to understand how every phase of
                            the development process works, from ideation to
                            launch. This included grasping more advanced
                            concepts of git, such as rebasing, checkouts, and
                            reverting.
                        </Paragraph>
                    </TextContent>
                    <WebStack>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Personal Challenges and Growth</Heading>
                            <Paragraph>
                                This summer was one of the most challenging and
                                rewarding experiences I've ever had. Traveling
                                overseas and experiencing a completely new team
                                taught me so much about myself and about the
                                professional I want to be.
                            </Paragraph>
                            <Paragraph>
                                At Awkward, I learned a ton about React, React
                                Native, Styled-Components, Git, you name it, but
                                I also learned so much about how to be a
                                developer with integrity and a valuable member
                                of a team. Working alongside extremely talented
                                developers inspired me and pushed my bounds of
                                what I believed any developer can do.
                            </Paragraph>
                        </RightContent>
                    </WebStack>
                    <DuoImages>
                        <LeftImage></LeftImage>
                        <RightImage></RightImage>
                    </DuoImages>
                    <CenterText>
                        <Heading>Coffee By Benjamin</Heading>
                        <Paragraph>
                            A project I built from the ground up, with React,
                            Styled-components, Shopify, and Netlify. This
                            website was built for a coffee roasting company that
                            is launching soon. If you'd like to learn more about
                            this project, I have an entire explanation on it
                            linked below.
                        </Paragraph>
                    </CenterText>
                    <LinkSet>
                        <Link title='Coffee Project' to='/Coffee'>
                            <Image
                                src={CoffeeThumb}
                                alt='Coffee By Benjamin Project'
                            />
                            <DuoLinks>
                                <LinkLeft>
                                    <a
                                        target='_blank'
                                        rel='noreferrer'
                                        title='Github Code'
                                        href='/Coffee'
                                    >
                                        <ProjectLink>
                                            Read in depth explanation{' '}
                                            <span>&#8250;</span>
                                        </ProjectLink>
                                    </a>
                                </LinkLeft>
                            </DuoLinks>
                        </Link>
                    </LinkSet>
                    <TextContent>
                        <Heading>My Contributions</Heading>
                        <Paragraph>
                            This was the project I spent the majority of my
                            summer working on. I worked alongside a designer and
                            app developer, to create a full experience for the
                            user to introduce them to the roasting process of
                            coffee.
                            <br /> <br />
                            This was one of my first large projects with React,
                            here I was able to use GraphQL, Shopify API's, and
                            React Hooks to creating an e-commerce site that's
                            easy to use, yet modern and pleasing to look at.
                        </Paragraph>
                    </TextContent>
                    <DuoText>
                        <LeftText>
                            <Heading>Walter Note</Heading>
                            <Paragraph>
                                Another project I worked on was Walter Note, an
                                iPhone & Android Application built with React
                                Native. This project was for a company that
                                worked to help users discover homes in their
                                area.
                                <br /> <br />I was able to gain some valuable
                                experience with React Native during this
                                project, and was able to work in a pair-coding
                                environment, where I wrote code alongside more
                                experienced developers. I also had the
                                opportunity to discuss changes and planning
                                directly with the Clients.
                            </Paragraph>
                        </LeftText>
                        <RightText></RightText>
                    </DuoText>
                    <DuoTextAlt>
                        <RightTextAlt></RightTextAlt>
                        <LeftText>
                            <Heading>Contributions</Heading>
                            <Paragraph>
                                For this project, I built out a handful of
                                components such as the search result interface,
                                and the gallery view. I was amazed by how easily
                                one can transition from React to React Native,
                                and loved the use of FlexBox across all of the
                                interface designs. <br /> <br />
                                The components I developed will be used in The
                                Netherlands by many people who are looking to
                                buy homes.
                            </Paragraph>
                        </LeftText>
                    </DuoTextAlt>
                </Container>
            </LayoutAlt>
            <CenterTextAlt>
                <Heading>Overview</Heading>
                <Paragraph>
                    My experience at Awkward will be something I remember
                    forever, and I want to thank everyone at Awkward for the
                    time they took teaching me so many new lessons and giving me
                    such an amazing experience. An extra big thank you to{' '}
                    <a href='https://www.linkedin.com/in/johnvandewater1/'>
                        John Van De Water
                    </a>
                    , who spent countless hours explaining React concepts to me,
                    and{' '}
                    <a href='https://www.linkedin.com/in/stijnhanegraaf/'>
                        Stijn Hanegraaf
                    </a>
                    , for his incredible help with the design of this very
                    portfolio.
                </Paragraph>
            </CenterTextAlt>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Chemistry;
