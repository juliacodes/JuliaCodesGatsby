import React from 'react';
import { ProjContainer } from './styles';
import { Midi } from '../../theming/styles';
import Proj from '../proj';
import cbbCover from '../../images/projs/cbb-cover.png';
import gitscapeCover from '../../images/projs/gitscape-cover.png';
import ccCover from '../../images/projs/cc-cover.png';

const FullWidthProj = () => {
    return (
        <ProjContainer>
            <Midi>
                <Proj
                    img={cbbCover}
                    title='Project Title'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pretium magna.'
                    react='react'
                    reactHooks='react-hooks'
                    netlify='netlify'
                />
                <Proj
                    img={gitscapeCover}
                    title='Project Title'
                    description='this is a project description'
                    react='react'
                    sc='styled-components'
                />
                <Proj
                    img={gitscapeCover}
                    title='Project Title'
                    description='this is a project description'
                />
                <Proj
                    img={ccCover}
                    title='Project Title'
                    description='this is a project description'
                />
            </Midi>
        </ProjContainer>
    );
};

export default FullWidthProj;
