import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading2,
    Full,
    Image,
    Paragraph2,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Project } from '../components';
import { Spread } from '../components/switch/styles';
import { Inner } from '../theming/styles';
import { Awk1, Vuln, Devops } from '../images';

const Split = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 200px auto;
    flex-wrap: wrap;

    > * {
        width: 100%;

        @media (${QUERIES.large}) {
            width: calc(50% - 20px);
        }
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
            <Midi>
                <Heading2 style={{ marginBottom: 50 }}>
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
                </div>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>

            <Foot />
        </Main>
    );
};

export { Movie };
