import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot } from '../components';
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

const Movie = ({ toggleMode, mode, spread }) => {
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
                    Movie Theater Case Study
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Throughout my life I've been to the movie theater countless
                    times. Originally, the only option to buy tickets was in
                    person at the ticket stand, but with the popularity of the
                    internet and mobile phones, purchasing tickets online has
                    enabled all of us to have even more control over our movie
                    theater experience, including selecting our seats. <br />
                    <br /> I've found a lot of these seat selection applications
                    extremely unintuitive and frustrating to use, so I wanted to
                    do a full case study to identify common pain points, and
                    address potential solutions.
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
                            Design Process
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            My Role
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            As the sole designer, I was able to work on all
                            stages of the design including: User Research,
                            Sketching, Journey Maps, Low and High Fidelity
                            Designs
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Full>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/lofi.6dae2f3a4e881159278e.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Lofi}
                    style={{ width: '100%' }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
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
                    To ensure inclusivity and edge case users, I created a
                    handful of user personas to represent many of the different
                    user groups that this app will be targeting{' '}
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
                                '/static/media/person1.93f376a9c081a38ef49d.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Person1}
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
                                '/static/media/persona2.c62139dce34223c5e9c9.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Person2}
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
                    Each of the user personas were then taken through the
                    existing user experience journey within many of the popular
                    movie theater applications found today. This helped to begin
                    establishing pain points and better empathize with users at
                    each step of the application.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/journeyMap.e16467f492d79fb2f474.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={JourneyMap}
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
                    Pain Points
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Following the creation of user journey maps and
                    storyboarding a handful of pain points were established a
                    select few were chosen to be the primary focus due to their
                    high feasibility and importance
                </Paragraph>

                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Just Browsing
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Many users are in the mood to see a movie on a
                            particular day, but aren't sure which movie they
                            want to see. This makes many of the flows
                            frustrating, as users can't see the availability of
                            a theater until after they select a movie.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Good Seats
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            Many theaters will advertise having seats available
                            for a showing, but they include the front row seats,
                            which a large majority of viewers avoid. This leaves
                            users feeling mislead.
                        </Paragraph>
                    </div>
                </FlexGroup>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Large Groups
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I found that every application handled groups
                            differently. Some apps made assumptions about the
                            needs of the user by forcing all of the seats to be
                            in a row together. Other apps ignored the grouping
                            of users, and as a result, users were given showings
                            that wouldn't work for their large group
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Accessibility
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            A large amount of information necessary for those
                            with disabilities is often not included on these
                            apps and requires a phone call. Information such as,
                            elevator locations, accessible seating, availability
                            of assistive listening devices, sign language
                            interpreters, etc.
                        </Paragraph>
                    </div>
                </FlexGroup>
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
                    To begin addressing these pain points, I created 6 digital
                    sketches for each of the main screens that would be
                    necessary: Landing page, movie details, and seat selection.
                    These sketches helped me come up with ideas for flows as
                    well as create a logical informational hierarchy.
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
                                '/static/media/sketch1.8e26f14c4a1736ffd22b.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch1}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/sketch2.d0d224aa0c906c578930.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch2}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/sketch3.4b872d0284a8bdb38dd3.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch3}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <ImageGrow
                        onClick={() => {
                            window.open(
                                '/static/media/sketch4.6963b63499e64afbdb15.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Sketch4}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                </div>
            </Full>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Establishing User Flow
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Once my low fidelity wireframes were complete, I created
                    additional screens to handle scroll events, filters, and
                    searching so that I had a fully clickable prototype.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/userFlow.dc4456a997389461b7df.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={UserFlow}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Testing
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    We’re looking to determine whether the main user flows that
                    enable selecting a movie, date, time slot and seat are easy
                    for users to complete. We’re also looking to identify
                    pain-points and challenges that could be impacting user
                    retention and drop-off.{' '}
                </Paragraph>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Research Questions
                        </Heading2>
                        <Paragraph>
                            - Are there areas in the flow where users get stuck?
                        </Paragraph>
                        <Paragraph>
                            - Do users find the application easy or difficult to
                            use?
                        </Paragraph>
                        <Paragraph>
                            - Are there features that the user seems to think
                            are missing?
                        </Paragraph>
                        <Paragraph>
                            - What are the stopping points in the application?
                        </Paragraph>
                    </div>
                </FlexGroup>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Participants Must
                        </Heading2>
                        <Paragraph>
                            - Have an awareness of movie theater ticket
                            applications
                        </Paragraph>
                        <Paragraph>
                            - Be somewhat tech literate (has used a smartphone
                            before)
                        </Paragraph>
                        <Paragraph>
                            - Two males, two females, and one nonbinary between
                            the ages of 18 and 70
                        </Paragraph>
                        <Paragraph>
                            - One user who requires as assitive device (screen
                            reader, etc)
                        </Paragraph>
                    </div>
                </FlexGroup>
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Methodology
                        </Heading2>
                        <Paragraph>Unmoderated usability study</Paragraph>
                        <Paragraph>
                            <span style={{ fontWeight: 400 }}>Location: </span>
                            United States, Remote
                        </Paragraph>
                        <Paragraph>
                            <span style={{ fontWeight: 400 }}>Date: </span>{' '}
                            Interviews will take place in the next few weeks
                        </Paragraph>
                        <Paragraph>
                            <span style={{ fontWeight: 400 }}>Length: </span>{' '}
                            Sessions are not expected to last more than ~10
                            minutes
                        </Paragraph>
                    </div>
                </FlexGroup>
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
                                '/static/media/research1.7bc8895981b09166eb32.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Research1}
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
                                '/static/media/research2.8c8db431c3a322bcea73.png',
                                '_blank',
                                'noopener,noreferrer'
                            );
                        }}
                        src={Research2}
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
                    Synthesizing Research Into Insights
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Comments, Questions and Answers were added as sticky notes
                    and then categorized to establish common themes and
                    recognize patterns.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/synth.fb000b904aa4a876421e.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Synth}
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
                    Changes Implemented from Research
                </Heading2>
                <Paragraph
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    From our research, we gathered that there were 3 primary
                    pain points that were complicating the flow for users. The
                    first related to filters, In general, the implementation of
                    filters isn’t super clear as to what it does and when it
                    needs to be used. Second, was the issue of
                    traffic/busy-ness, Users care about how busy theaters are,
                    and its taking too many clicks for them to get this
                    information. And lastly, users were left in the dark with
                    theater selection, and in many cases were unable to identify
                    that they even had the option to change theaters. <br />
                    <br />
                    We made a series of changes to address these pain points:
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/change1.6f66a9526e525314114b.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Change1}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/change2.0c44b1255e571ee93270.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Change2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/change3.bc0b6f96c48039c16efd.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Change3}
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
                    Finally, after spending some time finding and establishing a
                    visual style for the application, I created the final high
                    fidelity designs.
                </Paragraph>
                <ImageGrow
                    onClick={() => {
                        window.open(
                            '/static/media/hifi.e5e4ffdce10851ba21d9.png',
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }}
                    src={Hifi}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
                <FlexGroup>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Lessons Learned
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                marginTop: 15,
                            }}
                        >
                            This case study really helped me solidify the
                            importance of user testing at the low fidelity
                            stage. I got so caught up solving the original pain
                            points that were found that I ended up creating new
                            ones! User testing helped me take a step back and
                            readdress the overall goal of the application and
                            helped to identify many new paints points as well.
                        </Paragraph>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '30px',
                                fontWeight: 300,
                            }}
                        >
                            Next Steps
                        </Heading2>
                        <Paragraph
                            style={{
                                maxWidth: 700,
                                marginTop: 15,
                            }}
                        >
                            If I were to continue building out and improving
                            this project, I would do another round of usability
                            testing to ensure that the original paint points
                            were accurately addressed. Once solidified, I would
                            create a site map and design guide to help
                            developers transition my designs into code.
                        </Paragraph>
                    </div>
                </FlexGroup>
            </Midi>
            <Foot />
        </Main>
    );
};

export { Movie };
