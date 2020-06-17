import React from 'react';
import { ProjContainer } from './styles';
import { Midi } from '../../theming/styles';
import Proj from '../proj';
import cbbCover from '../../images/projs/cbb-cover.png';

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
                    title='Project Title'
                    description='this is a project description'
                    react='react'
                    sc='styled-components'
                />
                <Proj
                    title='Project Title'
                    description='this is a project description'
                />
                <Proj
                    title='Project Title'
                    description='this is a project description'
                />
            </Midi>
        </ProjContainer>
    );
};

export default FullWidthProj;
