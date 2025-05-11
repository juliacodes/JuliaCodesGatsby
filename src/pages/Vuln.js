import React, { useState } from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Lock } from '../components';
import { Spread } from '../components/switch/styles';
import {
    Change1,
    Hifi,
    Lofi,
    Person1,
    Person2,
    JourneyMap,
    Sketch1,
    Sketch2,
    Sketch3,
    Sketch4,
    UserFlow,
    Research1,
    Research2,
    Synth,
    Change3,
    Change2,
    Vuln,
    Vulnpersona1,
    Vulnpersona2,
    VulnJourney,
    VulnWire1,
    VulnWire2,
    Onboarding,
    VulnHifi,
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
                <Paragraph
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
                </Paragraph>
                <Paragraph>
                    IBM was no stranger to this and began regularly tracking
                    vulnerabilities and risks of each department monthly from a
                    number of their various vulnerability tracking applications.
                </Paragraph>
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
                            Pain Points with Current Process
                        </Heading2>
                        <Paragraph>
                            - Multiple sources of data all separately organized
                        </Paragraph>
                        <Paragraph>
                            - Team leads are creating analytics and charts by
                            hand every few weeks
                        </Paragraph>{' '}
                        <Paragraph>
                            - Tools aren’t available to management, leaving them
                            to get secondary accounts of vulnerability status
                        </Paragraph>{' '}
                        <Paragraph>
                            - Developers are tracking and updating
                            vulnerabilities in multiple different places,
                            obscuring the true level of risk within applications
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginTop: -40 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    My Role
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    Led the design of the vulnerability management application
                    between January and May 2022. Collaborated with two other
                    front end developers on features and direction
                </Paragraph>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    In addition, worked alongside a Senior Architect, Product
                    Manage, and multiple backend engineers.
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
                <Heading2 style={{ marginBottom: -20, fontSize: 35 }}>
                    High Level Goals
                </Heading2>

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
                            For Developers
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Congregate all vulnerability data from multiple
                            sources and create a dashboard that allows users to
                            view their vulnerability trends
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
                            For Teams
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Enable team leads to get their team onboarded the
                            tool easily and seamlessly
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
                            For Managers
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Target admins directly to enable them to view the
                            current vulnerability reports for each organization
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Establishing Personas
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Our persona hypothesis consistent of 4 different user groups
                    which we used to best identify user needs and empathize with
                    different pain points. These characteristics could be best
                    summarized through motivations such as the level of impact
                    vulnerabilities have on their work, as well as the frequency
                    at which they’ll use the application
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
                    {' '}
                    <img
                        src={Vulnpersona2}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
                        src={Vulnpersona1}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Journey Map
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
                <img
                    src={VulnJourney}
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
                    I created a series of low fidelity sketches and wireframes
                    to best plan out the features and layouts that we would be
                    creating. We spent a few design iterations here to ensure
                    all user needs were being addressed
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
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
                        src={VulnWire2}
                        style={{
                            width: '700px',
                            height: 'auto',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
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
