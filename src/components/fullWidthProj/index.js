import React from 'react';
import { ProjContainer } from './styles';
import { Midi } from '../../theming/styles';
import { Proj } from '../proj';
import {
    gitscapeCover,
    ccCover,
    decoreCover1,
    setup,
} from '../../images/projs';

const FullWidthProj = () => {
    return (
        <ProjContainer>
            <Midi>
                <Proj
                    img={setup}
                    title='My Time at IBM'
                    description="An overview of the work I've been doing with my team at IBM CIO"
                    react='react'
                    reactHooks='react-hooks'
                    netlify='netlify'
                />
                <Proj
                    img={gitscapeCover}
                    title='Gitscape'
                    description='React project that allows users to better find a github repo to contribute to'
                    react='react'
                    sc='styled-components'
                />
                <Proj
                    img={ccCover}
                    title='Coffee Chemistry'
                    react='react'
                    sc='styled-components'
                    description='Built with React, Coffee Chemistry is an app that helps new coffee lovers brew the perfect cup'
                />
                <Proj
                    img={decoreCover1}
                    title='Decore'
                    react='react'
                    sc='styled-components'
                    description='Decore allows users to drag and drop build their perfect starter HTML & CSS template'
                />
            </Midi>
        </ProjContainer>
    );
};

export { FullWidthProj };
