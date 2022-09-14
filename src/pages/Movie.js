import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Paragraph2,
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
                        marginBottom: 50,
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    Movie Theater Case Study
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Decore is a project I built alongside Ian Trent, for a class
                    project. We decided to create a react web application that
                    would help other developers get started with their web
                    projects. Decore allows users to customize a layout setup
                    that will generate custom html and css code that can be used
                    as a starter template for any website.{' '}
                </Paragraph2>
                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
                                mixBlendMode: 'difference',
                                color: 'white',
                            }}
                        >
                            Design Process
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
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
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                </div>
            </Midi>
            <Full>
                <img
                    src={Lofi}
                    style={{ width: '100%' }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
            </Full>
            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    User Research
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
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
                        src={Person1}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
                <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>

                <div
                    style={{
                        margin: '60px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
                            }}
                        >
                            Design Process
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
                            }}
                        >
                            My Role
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
                            }}
                        >
                            My Role
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                </div>
            </Midi>

            <Midi style={{ marginBottom: 0 }}>
                <Heading2 style={{ marginBottom: 30, fontSize: 35 }}>
                    Sketching and Ideation
                </Heading2>
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
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
                        src={Sketch1}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
                        src={Sketch2}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <img
                        src={Sketch3}
                        style={{
                            width: 'calc(25% - 5px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />
                    <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
                <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
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
                        src={Research1}
                        style={{
                            width: 'calc(50% - 50px)',
                            filter:
                                'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                        }}
                        alt='Low fidelity wireframes that display movie theater seat selection flow'
                    />{' '}
                    <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
                <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
                <img
                    src={Change1}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
                <img
                    src={Change2}
                    style={{
                        marginTop: 50,
                        width: '100%',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />{' '}
                <img
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
                <Paragraph2
                    style={{
                        maxWidth: 1200,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque tempus, arcu volutpat ut amet. Ac quam sed
                    lacus non in donec. Porttitor iaculis suspendisse malesuada
                    commodo, massa non luctus. Id pharetra augue sed egestas ut
                    nunc.
                </Paragraph2>
                <img
                    src={Hifi}
                    style={{
                        marginTop: 50,
                        width: '100%',
                        filter: 'drop-shadow(0px 8px 21px rgba(0, 0, 0, 0.06))',
                    }}
                    alt='Low fidelity wireframes that display movie theater seat selection flow'
                />
                <div
                    style={{
                        margin: '100px 0 0 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 100,
                    }}
                >
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
                            }}
                        >
                            Lessons Learned
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                    <div>
                        <Heading2
                            style={{
                                fontSize: 25,
                                lineHeight: '10px',
                                fontWeight: 600,
                            }}
                        >
                            Next Steps
                        </Heading2>
                        <Paragraph2
                            style={{
                                maxWidth: 700,
                            }}
                        >
                            I used a 5-stage Design Thinking model proposed by
                            the Hasso Plattner Institute of Design at Stanford
                            (the "d. school").
                        </Paragraph2>
                    </div>
                </div>
            </Midi>
            <Foot />
        </Main>
    );
};

export { Movie };
