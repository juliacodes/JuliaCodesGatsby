import React from 'react';
import { Midi, Heading, Full, Image } from '../../theming/styles';
import Split from '../../components/split';
import Cards from '../cards';
import SplitPartner from '../../components/split/splitPartner';
import Awk1 from '../../images/Awkward1.jpg';
import FullWidthProj from '../../components/fullWidthProj';
import SplitArticles from '../../components/splitArticles';

const Content = ({ darkMode }) => {
    return (
        <>
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                        maxWidth: '90%',
                    }}
                >
                    Hi, I'm Julia. Software Developer & Content Creator
                </Heading>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split />
            </Midi>
            <Cards darkMode={darkMode} />
            <Midi style={{ marginTop: 90 }}>
                <SplitPartner />
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
