import React from 'react';
import {
    Midi,
    Heading,
    Full,
    Image,
    Inner,
    Paragraph
} from '../../theming/styles';
import Split from '../../components/split';
import Cards from '../cards';
import SplitSkills from '../../components/splitSkills';
import Awk1 from '../../images/Awkward1.jpg';
import FullWidthProj from '../../components/fullWidthProj';
import SplitArticles from '../../components/splitArticles';
const Content = ({ theme, heading, description }) => {
    return (
        <>
            <Inner style={{ mixBlendMode: 'difference', paddingLeft: 80 }}>
                <Heading
                    style={{
                        mixBlendMode: 'difference',
                        color: 'white',
                        marginTop: 80
                    }}
                >
                    {heading}
                </Heading>
                <Paragraph
                    style={{
                        color: 'white',
                        fontSize: 16,
                        marginTop: 20,
                        maxWidth: 950
                    }}
                >
                    {description}
                </Paragraph>
            </Inner>
        </>
    );
};

export default Content;
