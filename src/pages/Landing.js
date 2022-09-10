import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading,
    Full,
    Image,
    Paragraph,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Project } from '../components';
import { Spread } from '../components/switch/styles';
import { Inner } from '../theming/styles';
import { Awk1 } from '../images';

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

const Landing = ({ toggleMode, mode, spread }) => {
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
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    <span style={{ fontWeight: 600 }}>UX Engineer</span>{' '}
                    crafting beautiful
                    <span style={{ fontStyle: 'italic' }}> digital</span> user
                    experiences
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi style={{ marginTop: 200, marginBottom: 200 }}>
                <Split>
                    <Heading style={{ textAlign: 'left', marginLeft: 0 }}>
                        Engineer <br /> Turned <br />{' '}
                        <span style={{ fontWeight: 600 }}>Designer.</span>
                    </Heading>
                    <Paragraph>
                        I'm a software engineer with 3+ years experience,
                        specializing in UI design and development. I have a
                        strong comprehension of design process and I'm
                        well-versed in the best practices of web design and
                        implementation. I have Experience as a <br />
                        <br /> UI/UX lead, where I implemented industry standard
                        design principles and processes to improve customer
                        experience. Looking to leverage my design and
                        development expertise to transition into a lead UI
                        Engineer role, where I can bridge the gap between
                        engineers and designers more text here.
                    </Paragraph>
                </Split>
            </Midi>

            <Full
                style={{ display: 'flex', flexDirection: 'column', gap: 160 }}
            >
                <Project name='Movie Theater Case Study' />
                <Project name='IBM, Vulnerability Manager Case Study' />
                <Project name='IBM, DevOps Dashboard' />
            </Full>
            <Foot />
        </Main>
    );
};

export { Landing };
