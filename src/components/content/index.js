import React from 'react';
import { Midi, Heading, Full, Image, Paragraph } from '../../theming/styles';
import Split from '../../components/split';
import Cards from '../cards';
import SplitPartner from '../../components/split/splitPartner';
import Awk1 from '../../images/Awkward1.jpg';
import FullWidthProj from '../../components/fullWidthProj';
import SplitArticles from '../../components/splitArticles';

const Content = ({ mode }) => {
    return (
        <>
            <Midi style={{ mixBlendMode: 'difference' }}>
                <Paragraph
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                        maxWidth: '75%',
                        fontWeight: '500',
                    }}
                >
                    Hi, I’m Julia and I’m a Software Developer at{' '}
                    <a href=''>IBM</a> in Austin, TX. I recently graduated from
                    Purdue University with a BS in Web Development & Design.{' '}
                    <br />
                    <br />
                    Feel free to email me at <a href=''>
                        julia@juliacodes.com
                    </a>{' '}
                    or explore my active projects on <a href=''>Github</a>
                </Paragraph>
            </Midi>
            <Full>
                <Image style={{ backgroundImage: `url(${Awk1})` }} />
            </Full>
            <Midi>
                <Split />
            </Midi>
            <Full>
                <FullWidthProj />
            </Full>
        </>
    );
};

export default Content;
