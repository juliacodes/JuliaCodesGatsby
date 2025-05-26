import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading,
    Heading2,
    Paragraph,
    Caption,
    Label,
    Quote,
    Heading3,
    Full,
} from '../theming/styles';
import styled, { createGlobalStyle } from 'styled-components';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';
import {
    ScheduleMain,
    Interview,
    Affinity,
    Prototype,
    Layout1,
    Layout2,
    Layout3,
    Layout4,
    Layout5,
    Layout6,    
    Layout7,    
    Dragging,
    UserFlow,
    Layout8,
    Layout9,

} from '../images';
import Outline from '../components/Outline';

const FlexGroup = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;
    background-color:rgba(255, 255, 255, 0.02);
    padding: 30px 30px;
    border-radius: 10px;

    div {
        width: 100%;
    
        @media (${QUERIES.medium}) {
            width: unset;
        }
    }

    @media (${QUERIES.large}) {
        flex-wrap: nowrap;
        gap: 50px;
        padding: 30px 50px;
        margin: 60px 0;
    }
`;

const ImageGrow = styled.img`
    :hover {
        cursor: zoom-in;
    }
    border-radius: 20px;
`;

const DarkerParagraph = styled(Paragraph)`
    color: ${({ theme }) => theme.textMain};
    opacity: .8;
    ul {
        margin-top: 10px;
        margin-bottom: 10px;
        list-style-type: disc;
        margin-left: 15px;
        li {
            margin-bottom: 6px;
        }
    }
    mark {
        font-weight: 500;
        color: ${({ theme }) => theme.textMain} !important;
        opacity: 1 !important;
        background-color: rgba(173, 173, 173, 0.1);
        padding: 2px 4px;
        border-radius: 4px;
    }

    strong {
        font-weight: 500;
        color: ${({ theme }) => theme.textMain} !important;
        opacity: 1 !important;
    }
`;

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

const Scheduler = ({ toggleMode, mode, spread, setDisableScroll }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{
            position: 'relative',
            overflow: setDisableScroll ? 'hidden' : 'null',
            height: setDisableScroll ? '100vh' : 'unset',
        }}>
            <GlobalStyle />
            <Outline />
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Label
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    Case Study
                </Label>
                
                <Heading
                    id="scheduler-improving-content-variety-for-atmosphere-tv"
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
                        letterSpacing: '-0.5px',
                        fontSize: '40px',
                        fontWeight: 500,
                    }}
                >
                    Scheduler: Improving Content Variety for Atmosphere TV
                </Heading>
                <FlexGroup>
                    <div>
                        <Label
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            Timeline
                        </Label>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                color: 'white',
                                lineHeight: '32px',
                            }}
                        >
                            January 2024, <span style={{opacity: 0.5}}>Research</span>
                            <br/>
                            February 2024, <span style={{opacity: 0.5}}>Design</span>
                            <br/>
                            March 2024, <span style={{opacity: 0.5}}>Beta Testing</span>
                            <br/>
                            April 2024, <span style={{opacity: 0.5}}>Shipped</span>
                        </Paragraph>
                    </div>
                    <div>
                        <Label
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            My Role
                        </Label>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                color: 'white',
                                lineHeight: '32px',
                            }}
                        >
                            Lead designer
                            <br/>
                            Lead Researcher
                        </Paragraph>
                    </div>
                    <div>
                        <Label
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            Outcome
                        </Label>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                lineHeight: '32px',
                                color: 'white',
                            }}
                        >
                            Used by 30k+ users
                        </Paragraph>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                lineHeight: '32px',
                                color: 'white',
                            }}
                        >
                            +34% content varience
                        </Paragraph>

                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                lineHeight: '32px',
                                color: 'white',
                            }}
                        >
                            56k schedules created
                        </Paragraph>
                    </div>
                </FlexGroup>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                        mixBlendMode: 'difference',
                        color: 'white',
                        opacity: .8,
                    }}
                >
                    Atmosphere TV delivers streaming content to thousands of venues across the country—but despite a robust content library, many business owners were seeing the same few clips on repeat. This case study details how I led a UX initiative to uncover the root of this content fatigue, and designed a scalable scheduling solution that increased content discovery, improved engagement, and balanced the needs of both small businesses and enterprise users. 
                    <br/> <br/> Through user interviews, prototyping, and real-world testing, we reimagined how content is selected, scheduled, and controlled—transforming the way businesses use Atmosphere to entertain their customers.
                </Paragraph>

            </Midi>
            <Full>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/key.cfd6e3ae5d11dd787617.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={ScheduleMain}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Final Shipped Design of Scheduler
                    </Caption>
                </div>
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-challenge" style={{ marginBottom: 24 }}>
                    The Challenge
                </Heading2>
                <Quote>
                    "We're getting the content on repeat, and it's not keeping customers engaged."
                </Quote>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    This comment from a restaurant owner during a customer interview captured the core challenge facing Atmosphere TV. Business owners were growing frustrated with the limited content variety on their screens, and engagement was suffering. Driving owners to turn off Atmosphere TV in favor of other content providers. 
                </DarkerParagraph>
                <DarkerParagraph>
                As the UX lead on this project, I needed to understand: <mark>Why were users experiencing content fatigue despite having access to a robust content library?</mark> What was preventing them from discovering new channels? And most importantly, how could we design a solution that worked for our diverse user base?
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="discovery-phase" style={{ marginBottom: 24 }}>
                    Discovery Phase
                </Heading2>
                <Heading3 id="uncovering-the-real-problems" style={{ marginBottom: 16 }}>
                    Uncovering the Real Problems
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                    I designed a research study to dig deeper into these content diversity issues, focusing on <mark>four key questions:</mark>
                </DarkerParagraph>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                    <ul>
                        <li>What pain points existed in content discovery?</li>
                        <li>What does the current mental model around our content look like?</li>
                        <li>How (and would) a scheduling feature add value?</li>
                        <li>Where in the existing user experience would this fit?</li>
                    </ul>
                </DarkerParagraph>

                <Heading3 id="prototyping-process" style={{ marginTop: 30, marginBottom: 16 }}>
                    Prototyping Process
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                    With these questions in mind, I created a low fidelity prototype to test with users and begin uncovering what would be most helpful.
                    <br/><br/>
                    The prototype introduced a popup onboarding flow with two paths: one allowed users to build their own schedule by entering content goals and selecting preferred content types—Atmosphere would then generate a tailored schedule. The other offered pre-curated schedules based on the user's venue type.
                    <br/><br/>
                    Each of the steps in this flow were designed to help us uncover the answers to our key questions, and seeing which path users took helped us to understand how custom the scheduling solution would need to be.
                </DarkerParagraph>
            </Midi>

                <Full>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 24,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/prototype.88c74f995e128cf0323b.gif',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Prototype}
                        style={{ width: '100%', borderRadius: 24 }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        The resulting low fidelity prototype that users could interact with
                    </Caption>
                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >

                    Over the course of two weeks, I conducted eight <mark>60-minute interviews</mark> with a diverse set of Atmosphere TV users, split evenly between enterprise accounts and small-to-medium businesses (SMBs). The venues ranged from casual dining restaurants to university lounges, car service shops, and upscale bars.
                </DarkerParagraph>
            </Midi>
            <Full>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/interview.75230e9e3206ad5b00b2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Interview}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Dovetail overview of interview notes and images of me in action (clearly I talk with my hands)
                    </Caption>
                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                    <Heading3 id="key-insights" style={{ marginBottom: 16 }}>
                        Key Insights
                    </Heading3>
                    <DarkerParagraph
                    style={{
                        marginBottom: 24,
                    }}
                >
                    The interviews revealed a key insight: most users rated their content awareness as just <mark>2 out of 5</mark>. Despite having access to a wide range of channels, many users simply didn't know what was available or how to find content that matched their needs. Furthermore, <mark>users were discovering one form of content and stopping there, leading to longer term content fatigue.</mark>
                    </DarkerParagraph>
                    
                    <Quote style={{ marginBottom: 24 }}>
                        "There's probably great content out there, but finding it feels like a burden. I don't have time to dig through everything, so I stick with what I know."
                    </Quote>

                    <DarkerParagraph
                    style={{
                        marginBottom: 24,
                    }}
                >
                    Other users were frustrated with the lack of control over content selection, some feeling like they had no control over what local managers were choosing.
                    </DarkerParagraph>

                    <Quote style={{ marginBottom: 24 }}>
                        "It's a constant battle between corporate and local managers over content control. We need standardization, but local flexibility too."
                    </Quote>

                    <DarkerParagraph
                    style={{
                        marginBottom: 24,
                    }}
                >
                    When discussing the scheduling feature, users were excited about the potential to customize content for different times of day, but had concerns about the complexity of setting up and managing schedules.
                    </DarkerParagraph>

                    <Quote style={{ marginBottom: 24 }}>
                        "I'd love to have more control over the content, but I don't have time to constantly monitor the content and make changes."
                    </Quote>

                    <DarkerParagraph style={{ marginBottom: 24 }}>
                    I organized the <mark>264 insights</mark> from these interviews into <mark>14 themes</mark>
                </DarkerParagraph>
            </Midi>
            <Full style={{ marginTop: 64, marginBottom: 64 }}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/affinity.8b4077dafe1f04eca232.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Affinity}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Dovetail diagram of key quotes and themes
                    </Caption>
                </div>
            </Full>
            <Midi style={{ marginBottom: 0}}>
                <Heading2 id="understanding-the-feedback" style={{ marginBottom: 24 }}>
                    Understanding the feedback
                </Heading2>
  
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                   The research presented an interesting challenge: while <mark>75% of users valued the ability to schedule content by time of day,</mark> they had varying responses:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    <ul>
                        <li>Enterprise users wanted robust controls and standardization across locations</li>
                        <li>SMBs wanted simplicity and quick setup</li>
                        <li>Venues with dynamic audiences (like restaurants with different breakfast/lunch/dinner crowds) needed more scheduling options</li>
                        <li>Venues with consistent audiences felt they didn't value schedules at all</li>
                    </ul>
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Above all, it was clear that an automated solution was not clicking with users. So many of them just wanted to build their own.
                    &nbsp;<mark>So, I decided to pursue a dual-track solution:</mark>
                    <ul>
                        <li>Atmosphere owned "curated schedules" for key venue classifications.</li>
                        <ul>
                            <li>This would allow us to provide a dynamic content experience for venues who didn't need or want to invest time in customization</li>
                        </ul>

                        <li>Full custom scheduling capabilities for users who needed precise control</li>
                        <ul>
                            <li>Highly customizable, allowing users with particular content needs to create schedules that perfectly match their business needs</li>
                        </ul>
                    </ul>
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 0}}>
                <Heading2 id="designing-a-solution" style={{ marginBottom: 24 }}>
                    Designing a Solution
                </Heading2>
  
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                   After several rounds of iterations and sketches, I decided to move schedule creation into a full-page experience rather than a popup or multi-step flow. I wanted users to have the flexibility to choose their starting point.
                    <br/><br/>
                    The designs below allow users to create schedules with custom names, venue selection, and channel choices. I also included a thumbnail to visually represent the content within each schedule as users add them.
                </DarkerParagraph>
            </Midi>
            <Full>
            <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',    
                        marginBottom: 44,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/useflow.03641c0af76474001887.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={UserFlow}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <Caption>
                        User flow of the entire scheduling experience and its impact across existing pages and flows
                    </Caption>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',    
                        marginBottom: 44,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout1.53455d4f2c8a69ac63a4.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout1}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <Caption>
                        Empty starting view and finished filled out view
                    </Caption>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 44,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout2.6fb633474464b65175a0.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout2}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Different states of the schedule naming component
                    </Caption>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 44,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout3.4a4b6d646d3a3c22f847.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout3}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <Caption>
                        Adding venues to the schedule
                    </Caption>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 44,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout4.99f86d98a2e60b226500.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout4}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Different states of the adding venues flow
                    </Caption>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 64,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/dragging.2176544bcd67a7d0dffa.gif',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Dragging}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <Caption>
                        Adding channels to the schedule
                    </Caption>
                </div>

            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="beta-testing-with-real-users" style={{ marginBottom: 16 }}>
                    Beta Testing with Real Users
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                   With designs reviewed and finalized, I established a structured beta program to refine the solution in real-world conditions. We recruited 20 active Atmosphere TV users representing different business types and sizes. <mark>I designed the beta program in three distinct phases:</mark>
                </DarkerParagraph>

                <Heading3 id="phase-1-consultation" style={{ marginTop: 10, marginBottom: 16 }}>Phase 1: Consultation (30-minute sessions)</Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    I met with each participant to understand their specific content and scheduling needs and business goals. These conversations helped identify use cases I hadn't anticipated.
                </DarkerParagraph>

                <Heading3 id="phase-2-async-testing" style={{ marginTop: 10, marginBottom: 16 }}>Phase 2: Async Testing</Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Participants were sent a set of curated schedules and provided feedback through UserZoom, helping identify content misalignments.
                </DarkerParagraph>

                <Heading3 id="phase-3-follow-up-session" style={{ marginTop: 10, marginBottom: 16 }}>Phase 3: Follow-up Session (30-45 minutes)</Heading3>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    After participants used a feature-flagged beta version, I conducted follow-up sessions focusing on real-world implementation, fleet management needs, and future feature priorities.
                </DarkerParagraph>
            </Midi>
            <Full>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout5.ed11262b145f7010d5b2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout5}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Affinity diagram of quotes from interviews
                    </Caption>
                </div>
            </Full>
            <Midi  style={{ marginBottom: 0 }}>
                <Heading2 id="unexpected-insights" style={{ marginTop: 30, marginBottom: 16 }}>
                    Unexpected Insights
                </Heading2>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                > The beta program revealed several critical needs that hadn't emerged in initial research: 
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>   
                    <ul>
                        <li><strong>Tedious scheduling:</strong> Some users found filling out the entire 24 hour schedule to be a repetitive and time-consuming task</li>
                        <li><strong>Schedule Recovery:</strong> Nearly every user had concerns about returning to scheduled content after manual changes.</li>
                        <li><strong>Permission Controls:</strong> Many enterprise users wanted to completely lock out local managers from changing channels when a schedule was in place.</li>
                        <li><strong>Multi-Day Programming:</strong> Several users requested having different schedules for different days of the week</li>
                    </ul>   
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="design-iterations" style={{ marginBottom: 16 }}>
                    Design Iterations from Feedback
                </Heading2>
                <DarkerParagraph>
                   With these insights, I made many key improvements to the designs.
                </DarkerParagraph>
                <Heading3 id="enterprise-management" style={{ marginTop: 30, marginBottom: 16 }}>
                    Enterprise Management
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >   
                    To better support large organizations, I made changes that supported multi device changes, and permissioning.
                </DarkerParagraph>
            </Midi>

            <Full>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 20,
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout6.be7b203caf8e87bbfab2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout6}
                        style={{ width: '50%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/layout7.501c6f099b3b901ee897.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Layout7}
                        style={{ width: '50%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>

            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading3 id="scheduling-enhancements" style={{ marginTop: 30, marginBottom: 16 }}>
                    Default Channels
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >   
                  To solve the problem of tedious schedule creation, I thought up the idea of a 'default channel', essentially a channel that filled the gaps and worked as a fallback between the other scheduled events. 
                  <br/> <br/>
                  This helped users fill the entire schedule without needing to drag in the same channel multiple times, and made it much clearer what would be playing at any given time in the schedule.

                </DarkerParagraph>
            </Midi>

            <Full>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/layout8.ddd206cc436f77162f5f.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={Layout8}
                            style={{ width: '100%' }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />

                        <Caption>
                            Default channel drastically reduced the amount of time required to create a schedule.
                        </Caption>
                    </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading3 id="automation-and-control" style={{ marginTop: 30, marginBottom: 16 }}>
                    Content Cues & Explanations
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >   
                  To add clarity to the content channels, we added channel taglines that highlighted a key element of what the channel offered. This was a big hit with our beta users.
                </DarkerParagraph>
            </Midi>

            <Full>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ImageGrow
                            onClick={() => {
                                window.open(
                                    '/static/media/layout9.dff5273850672854a847.png',
                                    '_blank',
                                    'noopener,noreferrer'
                                );
                            }}
                            src={Layout9}
                            style={{ width: '100%' }}
                            alt='Low fidelity wireframes that display movie theater seat selection flow'
                        />

                        <Caption>
                            Channel taglines in our Wine & Dine curated schedule
                        </Caption>
                    </div>
            </Full>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="impact-and-results" style={{ marginBottom: 16 }}>
                    Impact and Results
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    The final solution transformed how Atmosphere TV users interacted with content:
                </DarkerParagraph>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >  
                    <ul>
                        <li>Content awareness increased from <mark>2.0 to 4.3 (out of 5)</mark></li>
                        <li>Over <mark>8% of all ~100,000 customers</mark> switched to schedules from default content. </li>
                        <li><mark>+34%</mark> content variance</li>
                    </ul>  
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Most importantly, the scheduling feature became a powerful tool for reducing content fatigue. Users who adopted scheduling reported significantly higher satisfaction with content variety.

                    An enterprise customer shared: 
                    <Quote style={{ marginTop: 20, marginBottom: 24 }}>
                        "This finally gives us the control we need while making sure our customers see fresh content throughout the day. It's the best of both worlds."
                    </Quote>
                </DarkerParagraph>
            </Midi>

            <Full>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/key.cfd6e3ae5d11dd787617.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={ScheduleMain}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Modified final design with a new color scheme & modern navigation
                    </Caption>
                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="reflections" style={{ marginBottom: 16 }}>
                    Reflections
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    This project taught me several valuable lessons about designing for diverse business users:
                </DarkerParagraph>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >  
                    <ul>
                        <li><strong>One size doesn't fit all:</strong> Different business types require varying levels of scheduling complexity</li>
                        <li><strong>Trust + control balance:</strong> Users appreciate automated recommendations but need modification capabilities</li>
                        <li><strong>Enterprise needs differ significantly:</strong> Large organizations require robust fleet management and permission controls</li>
                        <li><strong>Beta testing provides invaluable refinement:</strong> Real-world testing revealed needs that weren't apparent in initial research</li>
                    </ul>  
                </DarkerParagraph>
            </Midi>
            <Midi style={{backgroundColor: 'black', borderRadius: 10, padding: 30, marginTop: 64, marginBottom: 64}}>
               <Heading2 id="thanks-for-reading-till-the-end" style={{ color: 'white' }}>
                Thanks for reading till the end! 
               </Heading2>
               <DarkerParagraph style={{ color: 'white' }}>
                If you have any questions, please reach out to me on <a href="https://www.linkedin.com/in/juliacodes/" style={{display: 'inline-flex', alignItems: 'center'}}>LinkedIn <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" style={{width: '16px', height: '16px', verticalAlign: 'middle', marginLeft: '4px', opacity: 0.5}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.21967 15.2642C5.51256 15.5571 5.98744 15.5571 6.28033 15.2642L13.5 8.04455V13.7339C13.5 14.1481 13.8358 14.4839 14.25 14.4839C14.6642 14.4839 15 14.1481 15 13.7339V6.23389C15 5.81967 14.6642 5.48389 14.25 5.48389H6.75C6.33579 5.48389 6 5.81967 6 6.23389C6 6.6481 6.33579 6.98389 6.75 6.98389H12.4393L5.21967 14.2036C4.92678 14.4964 4.92678 14.9713 5.21967 15.2642Z" fill="white"/>
                </svg></a>
               </DarkerParagraph>
            </Midi>


            <Midi style={{ marginBottom: 20 }}>
                <Foot />
            </Midi>
        </Main>
    );
};

export { Scheduler };