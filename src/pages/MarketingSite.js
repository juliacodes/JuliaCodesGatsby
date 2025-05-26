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
import Outline2 from '../components/Outline2';

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

const MarketingSite = ({ toggleMode, mode, spread }) => {
    const spreadClass =
        spread === 'first'
            ? 'growBlack'
            : spread === 'second'
            ? 'growWhite'
            : '';

    return (
        <Main style={{ position: 'relative' }}>
            <GlobalStyle />
            <Outline2 />
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ marginBottom: 60, mixBlendMode: 'difference' }}>
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
                    }}
                >
                    Reimagining B2B Signup: The Atmosphere TV Product Journey
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
                            December 2024, <span style={{opacity: 0.5}}>Research</span>
                            <br/>
                            January 2025, <span style={{opacity: 0.5}}>Design</span>
                            <br/>
                            February 2025, <span style={{opacity: 0.5}}>Implementation</span>
                            <br/>
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
                            Developer
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
                            +24% conversion
                        </Paragraph>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                mixBlendMode: 'difference',
                                lineHeight: '32px',
                                color: 'white',
                            }}
                        >
                            60k+ page views
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
                    Atmosphere TV’s signup flow was underperforming—not because of friction, but because users didn’t understand what they were signing up for. As a hybrid product (a physical device + streaming service), it didn’t fit cleanly into existing mental models. Instead of simplifying the funnel, I added a step: a product-focused page that clarified the offering before asking for commitment. 
                    <br/> <br/>
                    The result? A 24% lift in conversions, fewer drop-offs, and a clearer, more confident path to signup. This case study explores how rethinking our funnel around user understanding, not just efficiency, transformed our acquisition strategy.
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
                        Final marketing site pages
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="the-challenge" style={{ marginBottom: 24 }}>
                    The Challenge
                </Heading2>
                
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    Atmosphere TV’s signup flow was underperforming—only <strong>2% of visitors were converting</strong>. The issue wasn’t hidden in the data; it was clear in user behavior. People were abandoning the funnel or circling back through multiple pages, trying to piece together what exactly they were signing up for.
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    The problem? Our product didn’t fit into a familiar mold. Atmosphere is a hybrid offering: a physical device paired with a streaming subscription. But the existing funnel treated it like a typical SaaS signup, pushing an imediate sign up and failing to explain the value or clarify what users would receive.
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    As the UX lead, I needed to rethink how we presented this unique product—one that didn’t align with common mental models—and build a flow that matched how users actually evaluate purchases.    
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 34, marginTop: 20 }}>
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
                        Atmosphere's previous sign up flow
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="discovery-phase" style={{ marginBottom: 24 }}>
                    Discovery Phase
                </Heading2>
                <Heading3 id="uncovering-the-real-problems" style={{ marginBottom: 16 }}>
                    Studying the best to find our path
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                    I began by studying conversion flows across different industries, focusing on three categories:

                    <ul style={{ marginBottom: 24 }}>
                        <li>Subscription services (Netflix, Spotify)</li>
                        <li>B2B products (Slack, HubSpot)</li>
                        <li>Hardware + software products (Apple, Square, Toast)</li>
                    </ul>
                    </DarkerParagraph>
                    <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 24,
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
                        style={{ width: '100%', }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />

                    <Caption>
                        competitor product pages
                    </Caption>
                </div>

                    <DarkerParagraph style={{ marginBottom: 24 }}>
                        What became clear was that successful hybrid products didn't rush users to signup. Instead, they created dedicated product pages that helped users understand exactly what they were getting before asking for commitment.
                        <br/>
                        <br/>
                    Looking at our own analytics, I discovered a pattern: users who eventually converted often took a circuitous path through our website, visiting multiple pages to piece together information about the product before signing up. They were creating their own "product discovery" journey because our funnel wasn't providing one.
                </DarkerParagraph>
                
                </Midi>

                <Midi style={{ marginBottom: 24 }}>
                    <Heading3 id="key-insights" style={{ marginBottom: 16 }}>
                        The Hypothesis
                    </Heading3>
                    <DarkerParagraph
                    style={{
                        marginBottom: 24,
                    }}
                >
                   Based on this research, I formed a counterintuitive hypothesis: <strong>Adding a step to our funnel could actually increase conversion rates.</strong>

                    </DarkerParagraph>
                    <DarkerParagraph
                    style={{
                        marginBottom: 24,
                    }}
                >
                    
                        Specifically, I proposed inserting a product details page between the landing page and signup form—giving users the information they needed before asking for commitment. This was risky because conventional wisdom suggests minimizing steps in a conversion funnel. But I believed our problem wasn't funnel length; it was insufficient information at critical decision points.
                    </DarkerParagraph>

                    <DarkerParagraph
                    style={{
                        marginBottom: 24,
                    }}
                >
                    "We're not just signing users up for a service," I explained to stakeholders. "We're selling a physical product with an ongoing subscription. Users need to understand both components before they're ready to commit."
                    </DarkerParagraph>
            </Midi>
            <Midi style={{ marginTop: 20, marginBottom: 24 }}>
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
                        alt='Sketches of the product details page'
                    />

                    <Caption>
                        sketches of the product details page
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0}}>
                <Heading2 id="understanding-the-feedback" style={{ marginBottom: 24 }}>
                    Designing the solution
                </Heading2>
                <Heading3 id="the-hypothesis" style={{ marginBottom: 16 }}>
                    Bridging Digital and Physical
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                   Drawing inspiration from companies that successfully blend hardware and software (like Apple and Square), I designed a product-focused page that would:

                    <ul style={{ marginBottom: 24 }}>
                        <li>Make the process feel more like purchasing a physical product than just signing up for a subscription</li>
                        <li>Highlight what comes in the box, creating a tangible sense of what users would receive</li>
                        <li>Present the subscription model as a choice, similar to selecting storage capacity or color for a device</li>
                        <li>Emphasize fast, free delivery to reduce friction for the physical component</li>
                        <li>Showcase the benefits of Atmosphere through compelling imagery</li>
                    </ul>
                </DarkerParagraph>

                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 24,
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
                        Figma file of the prototype
                    </Caption>
                </div>

                <Heading3 id="the-hypothesis" style={{ marginBottom: 16 }}>
                    Secondary Improvements
                </Heading3>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                   While redesigning the funnel, I also identified several opportunities for improvement:

                    <ul style={{ marginBottom: 24 }}>
                        <li><strong>Segmenting the Journey:</strong> I created a separate path for enterprise customers and those who wanted a demo, recognizing their needs differed from direct purchasers</li>
                        <li><strong>Streamlining the Form:</strong> I reduced the visual complexity of the checkout flow by consolidating sections and using progressive disclosure</li>
                        <li><strong>Progressive Disclosure:</strong> I introduced a "Learn More" toggle to reveal more information about the product, reducing cognitive load</li>
                        <li><strong>Building Trust:</strong> I incorporated customer reviews and testimonials to create social proof</li>
                        <li><strong>Softening Language:</strong> I replaced "Sign Up" with "Get Started" to reduce perceived commitment and friction</li>
                    </ul>
                </DarkerParagraph>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 24,
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
                        Screens of secondary improvements
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 24, marginTop: 20 }}>
            

                <Heading2 id="a-critical-turning-point" style={{ marginTop: 40, marginBottom: 16 }}>
                    A/B Testing
                </Heading2>   
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                        marginBottom: 24,
                    }}
                >
                   With the new design complete, we set up an A/B test to validate our hypothesis. The control group received our existing direct-to-form experience, while the test group encountered our new product-focused journey.
                   <br/>
                   <br/>

                    Despite adding an additional step to the funnel, I was confident that giving users the right information at the right time would increase overall conversion—even if it meant more clicks.
                    <br/>
                    <br/>
                    "If we're right," I told the team, "we'll see fewer drop-offs, less back-and-forth navigation, and ultimately more signups because users will feel confident in their decision."
                </DarkerParagraph>
            </Midi>
            <Midi style={{ marginBottom: 24, marginTop: 20 }}>
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
                        Control vs test group experience
                    </Caption>
                </div>
            </Midi>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="beta-testing-with-real-users" style={{ marginBottom: 16 }}>
                    The Results
                </Heading2>
                <DarkerParagraph style={{ marginBottom: 24 }}>
                When the results came in, they validated our hypothesis: the new product-focused journey showed a nearly 24% improvement in signup rates compared to the control.
                </DarkerParagraph>
                
                <DarkerParagraph style={{ marginBottom: 24 }}>
                    What was particularly interesting was how user behavior changed:
                    <ul style={{ marginBottom: 24 }}>
                        <li>Users spent more time on the product page than we anticipated</li>
                        <li>Back-and-forth navigation decreased significantly</li>
                        <li>The percentage of users who completed the signup form after reaching it increased</li>
                        <li>Demo page was a huge hit, with 80% of users who reached it converting</li>

                    </ul>

                    The improvements weren't just limited to conversion rates. Qualitative feedback from new customers indicated they had a clearer understanding of Atmosphere's offering from the beginning, setting more accurate expectations for the service and minimizing down-the-road frustrations around subscription fees.
                </DarkerParagraph>

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
                        Results of the A/B test
                    </Caption>
                </div>

                <Heading2 id="unexpected-insights" style={{ marginTop: 30, marginBottom: 16 }}>
                    The Broader Impact
                </Heading2>
                <DarkerParagraph
                    style={{
                        maxWidth: 1200,
                    }}
                > Beyond the immediate conversion improvements, this project sparked a broader shift in how we thought about Atmosphere's customer acquisition:
                </DarkerParagraph>
                <DarkerParagraph style={{ marginBottom: 24 }}>   
                    <ul style={{ marginBottom: 24 }}>
                        <li><strong>  Product Identity Clarity:</strong> We gained clarity about our hybrid nature and how to communicate it effectively</li>
                        <li><strong>Segmented Journeys:</strong> We implemented dedicated paths for different customer types (direct purchase, enterprise, demo)</li>
                        <li><strong>Information Architecture:</strong> We reorganized our site to better support how users actually make decisions</li>
                    </ul>   

                    "This wasn't just about adding a product page," I explained in our project retrospective. "It was about recognizing that our users have a unique mental model for our product, and we need to align our funnel with how they think, not how we categorize ourselves internally."
                </DarkerParagraph>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 id="design-iterations" style={{ marginBottom: 16 }}>
                Key Learnings
                </Heading2>
                <DarkerParagraph>
                This project reinforced several important design principles:
                <ul style={{ marginBottom: 24 }}>
                    <li><strong>Fewer steps doesn't always mean better conversion:</strong> Sometimes users need more information, not less friction</li>
                    <li><strong>Hybrid products require hybrid thinking:</strong> We needed to blend e-commerce and SaaS patterns to match our offering</li>
                    <li><strong>Follow the users' information needs:</strong> Our analytics showed users creating their own roundabout paths to gather information</li>
                    <li><strong>Mental models matter more than industry standards:</strong> Understanding how users conceptualize your product is more important than following category conventions</li>
                </ul>
                </DarkerParagraph>
                

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
                        highlight default channel tooling
                    </Caption>
                </div>
            </Midi>

            <Midi style={{backgroundColor: 'black', borderRadius: 10, padding: 30, marginBottom: 20}}>
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

export { MarketingSite };