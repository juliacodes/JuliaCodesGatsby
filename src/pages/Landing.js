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
                    <span style={{ fontWeight: 300 }}>UX Engineer</span>{' '}
                    crafting beautiful
                    <span style={{ fontStyle: 'italic' }}> digital</span> user
                    experiences
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split>
                    <Heading style={{ textAlign: 'left', marginLeft: 0 }}>
                        Engineer <br /> Turned <br />{' '}
                        <span style={{ fontWeight: 300 }}>Designer.</span>
                    </Heading>
                    <Paragraph>
                        UX Engineering sits at the intersection between my two
                        backgrounds:{' '}
                        <span style={{ fontWeight: 600 }}>UX Design</span> and{' '}
                        <span style={{ fontWeight: 600 }}>
                            Front End Engineering
                        </span>
                        . As I gained experience as a frontend developer, I
                        realized that advocating for users through an
                        understanding of human perspectives and user research
                        was crucial for the success of any application. My dual
                        knowledge of design and development allows me to
                        understand{' '}
                        <span style={{ fontWeight: 600 }}>user needs</span> as
                        well as the{' '}
                        <span style={{ fontWeight: 600 }}>
                            technical needs{' '}
                        </span>
                        of any project . <br />
                        <br /> I’m currently working as a UX Engineer at{' '}
                        <span style={{ fontWeight: 600 }}>IBM</span> on the CIO
                        team. I graduated with a degree in Web Development and
                        Design from Purdue University.
                    </Paragraph>
                </Split>
            </Midi>

            <Full
                style={{ display: 'flex', flexDirection: 'column', gap: 160 }}
            >
                <Project
                    name='Movie Theater Case Study'
                    url='movie'
                    description='Reimagining the movie finding and seat selection process for movie theater applications'
                />
                <Project
                    name='IBM, Vulnerability Manager'
                    image={Vuln}
                    url='vuln'
                    description='Enabling IBMers to view the vulnerabilities that exist within their offerings in one easy to understand tool'
                />
                <Project
                    name='IBM, DevOps Dashboard'
                    image={Devops}
                    url='devops'
                    description='Enabling developers to track and manage their deployments'
                />
            </Full>
            <Foot />
        </Main>
    );
};

export { Landing };
