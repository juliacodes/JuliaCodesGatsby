import React from 'react';
import { Midi, Heading, Full, Image } from '../../theming/styles';
import Split from '../../components/split';
import Cards from '../cards';
import SplitSkills from '../../components/splitSkills';
import Awk1 from '../../images/Awkward1.jpg';
import FullWidthProj from '../../components/fullWidthProj';
import SplitArticles from '../../components/splitArticles';
const Content = ({ theme }) => {
    return (
        <>
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference'
                    }}
                >
                    Hi, I'm Julia. Front End Developer, and Intern at IBM.
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split />
            </Midi>
            <Full>
                <Cards theme={theme} />
            </Full>
            <Midi>
                <SplitSkills />
            </Midi>
            <Full>
                <FullWidthProj />
            </Full>
            <Midi>
                <SplitArticles />
            </Midi>
        </>
    );
};

export default Content;
