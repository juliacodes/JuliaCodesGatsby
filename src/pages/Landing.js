import React from 'react';
import QUERIES, {
    Main,
    Midi,
    Heading,
    Full,
    Image,
    Paragraph,
    Heading2,
    Heading3,
} from '../theming/styles';
import styled from 'styled-components';
import { Nav, Foot, Project, Collage, Experience } from '../components';
import { Spread } from '../components/switch/styles';
import { Vuln, EA1Image } from '../images';
import { ScheduleMain } from '../images';

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

const experiences = [
    {
        years: '2024 - now',
        title: 'Senior Product Designer at Atmosphere TV',
        description: 'Lead designer for tv for bars & restaurants'
    },
    {
        years: '2023 - 2024',
        title: 'Product Designer at Atmosphere TV',
        description: 'Led design & research for customer tooling'
    },
    {
        years: '2020 - 2023',
        title: 'UX Engineer at IBM',
        description: 'Designed & developed tools for engineers'
    },
    {
        years: '2019 - 2020',
        title: 'UI Developer at Awkward Co.',
        description: 'Developing component system alongside designers'
    }
];

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
            <Midi style={{ mixBlendMode: 'difference', paddingTop: 17 }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}
                >
                    I'm Julia — a Technical Product Designer crafting elegant & scalable design.
                </Heading>
            </Midi>

            <Midi style={{ paddingTop: 32 }}>
                <Collage />
            </Midi>

            <Midi style={{mixBlendMode: 'difference', margin: '0 auto', paddingBottom: 0 }}>
                <Heading2  
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}>
                    Case studies
                </Heading2>
            </Midi>
            <Midi style={{paddingTop: 0, margin: '0 auto' }}>
                <Project
                    name='Content Variety & Scheduling'
                    image={ScheduleMain}
                    url='ea1'
                    description='Led research & design to solve content staleness problems'
                />
                <Project
                    name='Content Variety & Scheduling'
                    image={ScheduleMain}
                    url='ea1'
                    description='Led research & design to solve content staleness problems'
                />
            </Midi>

            <Midi style={{mixBlendMode: 'difference', paddingTop: '84px', margin: '0 auto' }}>
                <Heading2  
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                    }}>
                    Experience
                </Heading2>
            </Midi>

            <Midi style={{ paddingTop: 0, margin: '0 auto 80px auto' }}>
                <Experience experiences={experiences} />
            </Midi>

            <Midi style={{ marginBottom: '10px' }}>
                <Foot />
            </Midi>
        </Main>
    );
};

export { Landing };