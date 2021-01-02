import React from 'react';
import { ProjContainer } from './styles';
import { Midi } from '../../theming/styles';
import Proj from '../proj';
import cbbCover from '../../images/projs/cbb-cover.png';
import gitscapeCover from '../../images/projs/gitscape-cover.png';
import ccCover from '../../images/projs/cc-cover.png';
import decoreCover1 from '../../images/projs/decore-cover1.png';
import decoreCover2 from '../../images/projs/decore-cover2.png';
import decoreCover3 from '../../images/projs/decore-cover3.png';
import setup from '../../images/setup.png';

const FullWidthProj = () => {
    return (
        <ProjContainer>
            <Midi>
                <Proj
                    img={setup}
                    title='Setup & Products'
                    description='Explore links to every product I use daily'
                    react='react'
                    reactHooks='react-hooks'
                    netlify='netlify'
                />
                <Proj
                    img={gitscapeCover}
                    title='Uses'
                    description='All my themes, VSCode settings, apps used, and notion templates'
                    react='react'
                    sc='styled-components'
                />
                <Proj
                    img={ccCover}
                    title='Coffee Chemistry'
                    react='react'
                    sc='styled-components'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pretium magna.'
                />
                <Proj
                    img={decoreCover1}
                    img2={decoreCover2}
                    img3={decoreCover3}
                    title='Decore'
                    react='react'
                    sc='styled-components'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pretium magna.'
                />
            </Midi>
        </ProjContainer>
    );
};

export default FullWidthProj;
