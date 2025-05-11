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
import { Awk1, Vuln, Devops, EA1Image } from '../images';

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

const Landing = ({ toggleMode, mode, spread, setDisableScroll }) => {
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
                overflow: setDisableScroll ? 'hidden' : 'null',
                height: setDisableScroll ? '100vh' : 'unset',
            }}
        >
            <Spread className={spreadClass} />
            <Nav mode={mode} toggleMode={toggleMode} />
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    I'm Julia — a Technical Product Designer crafting elegant & scalable design.
                </Heading>
            </Midi>

            <Full
                style={{ display: 'flex', flexDirection: 'column', gap: 100 }}
            >
                <Project
                    name='EA1 Vehicle Service'
                    image={EA1Image}
                    url='ea1'
                    description='Freelance design work done for a client who wanted to create the Uber for car repair & servicing'
                />
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
            </Full>

            <Foot />
        </Main>
    );
};

export { Landing };