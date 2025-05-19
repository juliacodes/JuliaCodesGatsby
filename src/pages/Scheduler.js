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
} from '../theming/styles';
import styled, { createGlobalStyle } from 'styled-components';
import { Nav, Foot } from '../components';
import { Spread } from '../components/switch/styles';
import {
    EA1Image,
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
    border-radius: 10px;
`;

const DarkerParagraph = styled(Paragraph)`
    color: ${({ theme }) => theme.textMain};
    opacity: .6;
    ul {
        margin-top: 10px;
        margin-bottom: 10px;
        list-style-type: disc;
        margin-left: 15px;
        li {
            margin-bottom: 6px;
        }
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

const Scheduler = ({ toggleMode, mode, spread }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{ position: 'relative' }}>
            <GlobalStyle />
            <Outline />
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ marginBottom: 60, mixBlendMode: 'difference' }}>
                <Heading
                    id="scheduler-improving-content-variety-for-atmosphere-tv"
                    style={{
                        marginBottom: 35,
                        mixBlendMode: 'difference',
                        color: 'white',
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
                            }}
                        >
                            January 2023, <span style={{opacity: 0.5}}>Research</span>
                            <br/>
                            February 2023, <span style={{opacity: 0.5}}>Design</span>
                            <br/>
                            March 2023, <span style={{opacity: 0.5}}>Beta Testing</span>
                            <br/>
                            April 2023, <span style={{opacity: 0.5}}>Shipped</span>
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
                                color: 'white',
                            }}
                        >
                            Used by 30k+ users
                        </Paragraph>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            +34% content varience
                        </Paragraph>

                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
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
                        opacity: .6,
                    }}
                >
                    Atmosphere TV delivers streaming content to thousands of venues across the country—but despite a robust content library, many business owners were seeing the same few clips on repeat. This case study details how I led a UX initiative to uncover the root of this content fatigue, and designed a scalable scheduling solution that increased content discovery, improved engagement, and balanced the needs of both small businesses and enterprise users. 
                    <br/> <br/> Through user interviews, prototyping, and real-world testing, we reimagined how content is selected, scheduled, and controlled—transforming the way businesses use Atmosphere to entertain their customers.
                </Paragraph>

            </Midi>
            <Midi style={{ marginBottom: 60 }}>
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
                                '/static/media/main.846969c01b93406683f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Final Prototype of EA1, a service that allows users to
                        request help when experiencing vehicle problems
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-challenge" style={{ marginBottom: 10 }}>
                    The Challenge
                </Heading2>
                <Quote>
                    "We're getting the content on repeat, and it's not keeping customers engaged."
                </Quote>
                <DarkerParagraph style={{ marginBottom: 10 }}>
                    This simple comment from a restaurant owner during a customer interview captured the core challenge facing Atmosphere TV. Business owners were growing frustrated with the limited content variety on their screens, and engagement was suffering.
                </DarkerParagraph>
                <DarkerParagraph>
                As the UX lead on this project, I needed to understand: <strong>Why were users experiencing content fatigue despite having access to a robust content library? </strong>What was preventing them from discovering new channels? And most importantly, how could we design a solution that worked for both small businesses and enterprise customers?
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 0, marginTop: 20 }}>
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
                                '/static/media/main.846969c01b93406683f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Final Prototype of EA1, a service that allows users to
                        request help when experiencing vehicle problems
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="discovery-phase" style={{ marginBottom: 10 }}>
                    Discovery Phase
                </Heading2>
                <Heading3 id="uncovering-the-real-problems">
                    Uncovering the Real Problems
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 20,
                    }}
                >
                    I designed a research study to dig deeper into these content diversity issues, focusing on <strong>four key questions:</strong>

                    <ul>
                        <li>What pain points existed in content discovery?</li>
                        <li>How did users mentally model content alignment for their business?</li>
                        <li>Would a scheduling feature add value?</li>
                        <li>How could we improve the onboarding experience?</li>
                    </ul>

                    Over the course of two weeks, I conducted eight <strong>60-minute interviews</strong> with a diverse set of Atmosphere TV users, split evenly between enterprise accounts and small-to-medium businesses (SMBs). The venues ranged from casual dining restaurants to university lounges, car service shops, and upscale bars.
                </DarkerParagraph>
                <Heading3 id="key-insights">
                    Key Insights
                </Heading3>
                <DarkerParagraph
                    style={{
                        marginBottom: 10,
                    }}
                >
                    The interviews revealed a striking insight: most users rated their content awareness as just 3 out of 5. Despite having access to a wide range of channels, many users simply didn't know what was available or how to find content that matched their needs.
                    </DarkerParagraph>
                    
                    <Quote>
                        "There's probably great content out there, but finding it feels like a burden. I don't have time to dig through everything, so I stick with what I know."
                    </Quote>

                    <Quote>
                        "It's a constant battle between corporate and local managers over content control. We need standardization, but local flexibility too."
                    </Quote>

                    <DarkerParagraph>
                    I organized the <strong>264 insights</strong> from these interviews into <strong>14 themes</strong>, creating a diagram to identify patterns:
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginTop: 20, marginBottom: 0 }}>
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
                                '/static/media/main.846969c01b93406683f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Final Prototype of EA1, a service that allows users to
                        request help when experiencing vehicle problems
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0}}>
                <Heading2 id="understanding-the-feedback" style={{ marginBottom: 10 }}>
                    Understanding the feedback
                </Heading2>
                <Heading3 id="the-hypothesis">
                    The Hypothesis
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                   Based on my research, I hypothesized that a content scheduling system could solve multiple problems simultaneously:

                    <ul>
                        <li>Improve content discovery through visual browsing</li>
                        <li>Enable time-based programming to match different audience segments</li>
                        <li>Balance corporate control with local flexibility</li>
                        <li>Reduce content fatigue through automated variety</li>
                    </ul>
                </DarkerParagraph>
                <Heading3 id="prototyping-process" style={{ marginTop: 30 }}>
                    Prototyping Process
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                   I created a prototype focused on answering two critical questions:

                    <ul>
                        <li>How opinionated were owners about content selection?</li>
                        <li>What level of customization would scheduling require?</li>
                    </ul>

                    The prototype introduced users to a visual content browser and a time-based scheduling interface that allowed them to create "daypart" programming for their venues.
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 0, marginTop: 20 }}>
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
                                '/static/media/main.846969c01b93406683f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Final Prototype of EA1, a service that allows users to
                        request help when experiencing vehicle problems
                    </Caption>
                </div>

                <Heading2 id="a-critical-turning-point" style={{ marginTop: 40, marginBottom: 10 }}>
                    A Critical Turning Point
                </Heading2>   
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                   The research presented an interesting challenge: while 75% of users valued the ability to schedule content by time of day, they had varying needs:

                    <ul>
                        <li>Enterprise users wanted robust controls and standardization across locations</li>
                        <li>SMBs wanted simplicity and quick setup</li>
                        <li>Venues with dynamic audiences (like restaurants with different breakfast/lunch/dinner crowds) needed more scheduling options</li>
                        <li>Venues with consistent audiences felt they didn't value schedules at all</li>
                    </ul>

                    <strong>I decided to pursue a dual-track approach:</strong>
                    <ul>
                        <li>Atmosphere owned "curated schedules" for key venue classifications.</li>
                        <li>Full custom scheduling capabilities for users who needed precise control</li>
                    </ul>
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 0, marginTop: 20 }}>
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
                                '/static/media/main.846969c01b93406683f2.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={EA1Image}
                        style={{ width: '100%' }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        Final Prototype of EA1, a service that allows users to
                        request help when experiencing vehicle problems
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="beta-testing-with-real-users" style={{ marginBottom: 10 }}>
                    Beta Testing with Real Users
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 20 }}>
                   With initial designs validated, I established a structured beta program to refine the solution in real-world conditions. We recruited 15 active Atmosphere TV users representing different business types and sizes. <strong>I designed the beta program in three distinct phases:</strong>
                </DarkerParagraph>

                <Heading3 id="phase-1-consultation" style={{ marginTop: 10 }}>Phase 1: Consultation (30-minute sessions)</Heading3>
                <DarkerParagraph style={{ marginBottom: 20 }}>
                    I met with each participant to understand their specific content and scheduling needs and business goals. These conversations helped identify use cases I hadn't anticipated.
                </DarkerParagraph>

                <Heading3 id="phase-2-async-testing" style={{ marginTop: 10 }}>Phase 2: Async Testing</Heading3>
                <DarkerParagraph style={{ marginBottom: 20 }}>
                    Participants were sent a set of curated schedules and provided feedback through UserZoom, helping identify content misalignments (i.e. no News in the morning)
                </DarkerParagraph>

                <Heading3 id="phase-3-follow-up-session" style={{ marginTop: 10 }}>Phase 3: Follow-up Session (30-45 minutes)</Heading3>
                <DarkerParagraph>
                    After participants used a feature-flagged beta version, I conducted follow-up sessions focusing on real-world implementation, fleet management needs, and future feature priorities.
                </DarkerParagraph>

                <Heading2 id="unexpected-insights" style={{ marginTop: 30, marginBottom: 10 }}>
                    Unexpected Insights
                </Heading2>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                > The beta program revealed several critical needs that hadn't emerged in initial research: 

                    <ul>
                        <li>Schedule Recovery: Nearly every user wanted devices to automatically return to scheduled content after manual changes.</li>
                        <li>Permission Controls: Many enterprise users wanted to completely lock out local managers from changing channels</li>
                        <li>Notification Systems: Users requested email alerts when devices deviated from schedules</li>
                        <li>Multi-Day Programming: Several users needed different schedules for different days of the week</li>
                    </ul>   
                    One enterprise user explained the need for control: "We spend millions on our brand experience. We can't have a local manager putting on cartoons just because they feel like it."
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="design-iterations" style={{ marginBottom: 10}}>
                    Design Iterations
                </Heading2>
                <DarkerParagraph>
                   With these insights, I went back to the drawing board to refine the design. Several key improvements emerged:
                </DarkerParagraph>
                <Heading3 id="enterprise-management" style={{ marginTop: 30 }}>
                    Enterprise Management
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >   
                    For large organizations, I added:
                    <ul>
                        <li>Improved venue targeting with optimized selection interfaces</li>
                        <li>Device removal capabilities for schedule management</li>
                        <li>Permission levels balancing corporate and local control</li>
                    </ul>  
                </DarkerParagraph>

                <Heading3 id="scheduling-enhancements" style={{ marginTop: 30 }}>
                    Scheduling Enhancements
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >   
                  Based on beta feedback, I implemented:
                    <ul>
                        <li>Default channel settings for simplified scheduling</li>
                        <li>Duplication capability from curated schedules</li>
                        <li>Day-part scheduling aligned with business patterns</li>
                        <li>Multi-day scheduling capabilities</li>
                    </ul>  
                </DarkerParagraph>


                <Heading3 id="automation-and-control" style={{ marginTop: 30 }}>
                    Automation and Control
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >   
                  To address the balance between automation and control:
                    <ul>
                        <li>Added schedule recovery functionality</li>
                        <li>Implemented deviation notifications</li>
                        <li>Enhanced visual content representation with thumbnails</li>
                        <li>Improved content recommendation explanations</li>
                    </ul>  
                </DarkerParagraph>
            </Midi>


            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="impact-and-results" style={{ marginBottom: 10}}>
                    Impact and Results
                </Heading2>
                <DarkerParagraph>
                    The final solution transformed how Atmosphere TV users interacted with content:
                </DarkerParagraph>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >  
                    <ul>
                        <li>Content awareness increased from 3.0 to 4.3 (out of 5)</li>
                        <li>Over 10% of all 60,000 customers switched to schedules from default content. </li>
                        <li>75% highlighted the value of content timing</li>
                    </ul>  

                    Most importantly, the scheduling feature became a powerful tool for reducing content fatigue. Users who adopted scheduling reported significantly higher satisfaction with content variety.

                    An enterprise customer shared: 
                    <Quote style={{ marginTop: 20 }}>
                        "This finally gives us the control we need while making sure our customers see fresh content throughout the day. It's the best of both worlds."
                    </Quote>
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="reflections" style={{ marginBottom: 10}}>
                    Reflections
                </Heading2>
                <DarkerParagraph>
                    This project taught me several valuable lessons about designing for diverse business users:
                </DarkerParagraph>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                >  
                    <ul>
                        <li>Visual representation is critical — Seeing thumbnails dramatically improved content understanding and selection</li>
                        <li>One size doesn't fit all — Different business types require varying levels of scheduling complexity</li>
                        <li>Trust + control balance — Users appreciate automated recommendations but need modification capabilities</li>
                        <li>Enterprise needs differ significantly — Large organizations require robust fleet management and permission controls</li>
                        <li>Beta testing provides invaluable refinement — Real-world testing revealed needs that weren't apparent in initial research</li>
                    </ul>  
                </DarkerParagraph>
            </Midi>
            <Midi style={{backgroundColor: 'black', borderRadius: 10, padding: 30 }}>
               <Heading2 id="thanks-for-reading-till-the-end" style={{ color: 'white' }}>
                Thanks for reading till the end! 
               </Heading2>
               <DarkerParagraph style={{ color: 'white' }}>
                If you have any questions, please reach out to me on <a href="https://www.linkedin.com/in/joshua-k-2000/" style={{display: 'inline-flex', alignItems: 'center'}}>LinkedIn <svg viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" style={{width: '16px', height: '16px', verticalAlign: 'middle', marginLeft: '4px', opacity: 0.5}}>
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