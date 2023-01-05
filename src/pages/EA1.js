import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph2,
    Paragraph,
    Caption,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';
import {
    EA1Image,
    user1,
    user2,
    user3,
    user4,
    competitive,
    UserFlowEA,
    landingUI,
    selectionUI,
    InProgress,
    SelectingVehicle,
    FinalEA,
    FinalEA2,
} from '../images';

const FlexGroup = styled.div`
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        gap: 50px;
    }
`;

const ImageGrow = styled.img`
    :hover {
        cursor: zoom-in;
    }
`;

const EA1 = ({ toggleMode, mode, spread }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{ position: 'relative' }}>
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
                    EA1 Vehicle Service
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    The client for this application approached me because they
                    were looking to create a product that allows drivers to
                    quickly connect with mechanics when dealing with car
                    problems. They also were loooking to enable hobbyist and
                    mechanics unassociated with any particular shop the
                    opportunity to gig-work and manage their own time.
                    <br /> <br /> I was able to effectively create user
                    personas, competitive audits, sketches, wireframes and a
                    final prototype and send over final assets to an engineer in
                    around three months.
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
                            My Role
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            As the sole designer, I was able to work on all
                            stages of the design including: User Research,
                            Sketching, Journey Maps, Low and High Fidelity
                            Designs.
                        </Paragraph2>
                    </div>
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
                            Team
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I collaborated with an engineer and a business lead
                            to help facilitate the needs of our client and
                            determine scope.
                        </Paragraph2>
                    </div>
                </FlexGroup>
            </Midi>
            <Full>
                <div
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 20,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/main.846969c01b93406683f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption style={{ fontSize: 20, marginTop: 15 }}>
                        Final Prototype of EA1, a service that allows users to
                        request help when experiencing vehicle problems
                    </Caption>
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Personas
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    I chose to create user personas first, as I wanted a high
                    level understanding of some of the reasons different users
                    would use the app as well as some of the hestitations that
                    could prevent a user from using ours. <br /> <br /> To
                    ensure inclusivity and edge case users, I created many user
                    personas to represent all of the different user groups that
                    this app will be targeting. A few of the key areas included
                    were: diversity in age groups, potential disabilities,
                    exposure to technology, experience with car engines, as well
                    as distance from major cities.
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
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Anika%20Lubin.1403dc0498c495f5b890.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user1}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Ashlynn%20Bothman.373e3ff66063b51cdbd2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user2}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                </div>{' '}
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Cooper%20Saris.91c4e4952e3f57d82307.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user3}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/Maren%20Donin.f7bc22112785093343f9.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={user4}
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
                    Competitive Audit
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following Personas, I decided to do a competitive audit on
                    the similar B2C products in the market. To get the most
                    useful insights, I decided to only focus on applications
                    that were directly available to a broad market, which
                    removes applications like State farm roadside assistance or
                    any other insurance-associated service provider. <br />{' '}
                    <br /> I specifically chose Angi, because they have a unique
                    gig-work structure that would help me to understand common
                    design standards that allow service providers to showcase
                    their services and get connected with customers. Uber felt
                    like an obvious choice as they handle complicated location
                    tracking and connect drivers and riders in a similar way
                    that we will connect service providers and
                    requesters.Lastly, I chose to audit verizon media
                    assistance, because I wanted to have a roadside assistance
                    specific company to research.
                </Paragraph>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/competitive.800e7d6899e94b40dd25.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={competitive}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Pain Points Found
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following the creation of user journey maps a handful of
                    pain points were discovered, many of which were already
                    being address by competitors. A handful of these problems
                    were being addressed which were what I really wanted to
                    spend time ideating and designing solutions for.
                </Paragraph>

                <FlexGroup>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Handling Volume
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Many applications (Uber, etc) only enable users to
                            have one connection at a time, but in the auto
                            industry users are going to want to compare rates
                            and eta's accross different providers.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Price
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Most applications like State Farm and Verizon
                            roadside assitance will often bundle these services
                            into their month to month rate, but since this app
                            will be separate from those providers we'll need to
                            handle cost in a transparent way
                        </Paragraph>
                    </div>
                </FlexGroup>
                <FlexGroup>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Safety
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Many users may be alone or in an unsafe location
                            when they are having car trouble, its important that
                            the person going to assist them is trustworthy and
                            knowlegable
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2 style={{ marginBottom: 10, fontSize: 35 }}>
                            Accessibility
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Accounting for users who are have speciific
                            special-needs will be important in the applications
                            design, as a user who is hard of hearing for example
                            would need very different accomodations than someone
                            who is in a wheelchair.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Flow
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    After a few iterations of design thinking and exploration, I
                    was able to create a user-flow site map that scopes out the
                    necessary screens and expected interactions across the app.{' '}
                    <br /> <br /> This layout really helps me look at the
                    structure logically so we can catch any mismatches or
                    miscommunications early. It also helps me to bring up
                    business or technical challenges early on, so we can address
                    for them now, instead of when the designs are in their final
                    stages.
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
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/userflow.4320fd880a8a15c93e78.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={UserFlowEA}
                        style={{
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            width: '100%',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Low Fidelity - Design Decisions
                </Heading2>{' '}
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    First approach at the structure of the application, lots of
                    iteration and design thinking used here.
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
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/landing-ui.1ae4f585c9c9d9b356e9.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={landingUI}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            Landing page that displays once a user has logged in
                        </Caption>
                    </div>
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/selection-ui.efe0e2f263f002a86396.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={selectionUI}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            Service Provider Choice View
                        </Caption>
                    </div>
                </div>{' '}
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/InProgress.56809265a1662d303912.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={InProgress}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            Service Request In Progress Page
                        </Caption>
                    </div>
                    <div
                        style={{
                            width: 'calc(50% - 50px)',
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 20,
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/SelectingVehicle.d4dc619d249f0340ea2b.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={SelectingVehicle}
                            style={{
                                width: '100%',
                                filter:
                                    'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                            }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />{' '}
                        <Caption style={{ fontSize: 20 }}>
                            View when adding your vehicle to your service
                            request
                        </Caption>
                    </div>
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Visual Design
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    After some feedback and reviews, I went back through each of
                    the views to update the UI to reflect the visual design and
                    look at feel that the client wanted to go with.
                </Paragraph>
            </Midi>

            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/final.8e3913acd47c3d60c34e.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={FinalEA}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/final2.7b9d49dcdb8ae031f623.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={FinalEA2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <FlexGroup>
                    <div>
                        <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                            Challenges
                        </Heading2>
                        <Paragraph
                            style={{
                                marginTop: 20,
                            }}
                        >
                            The biggest challenge with this appication was the
                            ambiguity of the requirements. I'm used to working
                            with clients who are highly opinionated, but this
                            client was truly open to anything. This made it
                            tricky to get an established sense of which
                            direction the application should go in. This ended
                            up being a great personal challenge, as I was able
                            to add more input in the direction of the product
                            and company as a whole which challenged the way I
                            approach design thinking.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>

            <Foot />
        </Main>
    );
};

export { EA1 };
