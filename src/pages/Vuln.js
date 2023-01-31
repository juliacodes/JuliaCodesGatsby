import React, { useState } from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph2,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Lock } from '../components';
import { Spread } from '../components/switch/styles';
import {
    Vuln,
    Vulnpersona1,
    VulnJourney,
    VulnWire1,
    VulnWire2,
    Onboarding,
    VulnHifi,
    Kenzie,
    Tristan,
    Personas,
} from '../images';

const FlexGroup = styled.div`
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        gap: 100px;
    }
`;

const ImageGrow = styled.img`
    :hover {
        cursor: zoom-in;
    }
`;

const VulnPage = ({ toggleMode, mode, spread }) => {
    const [isLocked, setIsLocked] = useState(true);
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main
            style={{
                position: 'relative',
                overflow: isLocked ? 'hidden' : 'null',
                height: isLocked ? '100vh' : 'unset',
            }}
        >
            <Lock isLocked={isLocked} setIsLocked={setIsLocked} />
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ marginBottom: 100, mixBlendMode: 'difference' }}>
                <Heading2
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    Vulnerability Management
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Near the end of 2021 there was a massive vulnerability
                    discovered and announced to be one of the most serious
                    vulnerabilities seen in modern web. This infrastructure
                    vulnerability had already been exploited millions of times
                    and had the potential to expose billions of users. Engineers
                    had to move quickly to patch the issue and this brought the
                    attention of executives to better track vulnerabilities and
                    risks within their organizations.
                </Paragraph2>
                <Paragraph2>
                    IBM was no stranger to this and began regularly tracking
                    vulnerabilities and risks of each department monthly from a
                    number of their various vulnerability tracking applications.
                </Paragraph2>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            The Problem
                        </Heading2>
                        <Paragraph2>
                            Organizations at IBM need a standardized platform to
                            track the vulnerabilities that exist within their
                            applications.
                        </Paragraph2>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginTop: -40 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Project Scope
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    Led the design of the vulnerability management application
                    between over 12 Weeks. Collaborated with two other front end
                    developers and designsers with Figma on features and
                    direction.
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    In addition, worked alongside a Senior Architect, Product
                    Manager, and multiple backend engineers.
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 0,
                    }}
                >
                    Led the hand off of design to developer in May 2022.
                </Paragraph>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/vuln.750cd808f20742f67f6f.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Vuln}
                    style={{ width: '100%' }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ fontSize: 35, marginBottom: 30 }}>
                    Existing Tools used
                </Heading2>
                <Paragraph>
                    We started by doing some background research on the current
                    processes that were being used to mange and track
                    vulnerabilities
                </Paragraph>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            AppScan
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            - Collects one type of vulnerability data, has a
                            poor UI
                        </Paragraph>
                    </div>

                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            WhiteSource
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            - Developer only, displays risks in github / in
                            terminal
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                                marginBottom: 10,
                            }}
                        >
                            Excel
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Team Leads and managers are exporting the data from
                            other sources into excel to build metrics
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Primary Research
                </Heading2>{' '}
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    15 Users - 150+ data points - 9 Insights - 3 Main Themes
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    We interviewed 15 developers, devOps engineers, managers,
                    iteration leads, etc to get a comprehensive perspective on
                    the paint points for each group
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                        fontWeight: 400,
                    }}
                >
                    Interview Questions:
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    How do Vulnerabilities fit into your daily work? <br />
                    What is the most difficult part about managing
                    Vulnerabilities? <br />
                    Walk me through how your team tracks and reports
                    Vulnerabilities.
                    <br /> How motivated do you feel to prioritize open
                    Vulnerabilities?
                </Paragraph>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Main Themes Found
                </Heading2>{' '}
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                        fontWeight: 400,
                    }}
                >
                    Miscommunication
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    - Developers feel prepared to manage and fix
                    vulnerabilities, and already have the tools to address them.
                    <br /> - Managers are concerned that the vulnerability data
                    they are receiving is inaccurate. <br />- Randomly exporting
                    the data from multiple sources increases the likelihood of
                    data that is old or missing.
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                        fontWeight: 400,
                    }}
                >
                    Data Dump
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    - Team leads are overwhelmed by the number of risks but
                    aren’t sure which ones are important
                    <br />
                    - Executives have a few key metrics that they want each
                    organization to share with them. <br />- Many
                    vulnerabilities are being flagged unnecessarily, which
                    inflates the real level of risk in each org.
                </Paragraph>{' '}
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                        fontWeight: 400,
                    }}
                >
                    Motivation
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    - Engineers lack motivation to resolve vulnerabilities
                    because they don’t believe this data is being reviewed
                    <br />
                    - The security risk of vulnerabilities is not enough to
                    motivate action. <br />- Executives want to see trends on a
                    quarterly basis, creating a sudden sense of urgency near
                    those end dates.
                </Paragraph>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Journey Maps
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Each persona was then walked through the existing user
                    journey map to establish themes and create a cleaner and
                    more enjoyable user flow
                </Paragraph>
            </Midi>
            <Full>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <img
                        src={Kenzie}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
                        src={Tristan}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Core Personas
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Walking through the Journey map helped us establish who are
                    core users were and what was frustrating them
                </Paragraph>
                <img
                    src={Personas}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Sketching and Ideation
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Now that we have background and established the problems
                    we're addressing as well as the user groups we're
                    targetting, we were able to move on to be ideating
                    solutions.
                    <br />
                    We asked ourselves: How might we simplify this reporting
                    process while improving communication across the corporate
                    chain of command?
                </Paragraph>
            </Midi>
            <Full>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 20,
                    }}
                >
                    {' '}
                    <img
                        src={VulnWire1}
                        style={{
                            width: '700px',
                            height: 'auto',
                            filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
                        src={VulnWire2}
                        style={{
                            width: '700px',
                            height: 'auto',
                            filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Handling Onboarding
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    One particularly challenging portion of the design thinking
                    and planning for this application was working through the
                    onboarding flow. We were tasked with finding a flow that
                    enabled users to quickly initialize their organization into
                    our app in situations where they’ll have multiple sources of
                    data form completely different APIs.
                </Paragraph>
                <img
                    src={Onboarding}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Final High Fidelity Wireframes
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following user testing of our low fidelity flow, we finally
                    moved on to create high fidelity designs of our
                    vulnerability application
                </Paragraph>
                <img
                    src={VulnHifi}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>
            <Foot />
        </Main>
    );
};

export { VulnPage };
