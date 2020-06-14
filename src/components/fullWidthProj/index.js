import React from 'react';
import { ProjContainer, LeftCont, RightCont, ProjImage } from './styles';
import { Heading, Paragraph } from '../../theming/styles';
import { ButtonMini } from '../button';

const FullWidthProj = () => {
    return (
        <ProjContainer>
            <LeftCont>
                <a href=''>
                    <Heading>Gitscape</Heading>
                </a>
                <Paragraph>
                    An application built out of my frustration with github
                    explore, Gitscape allows you to discover and explore
                    existing repositories.
                </Paragraph>
                <a href=''>
                    <ButtonMini title='Explore' />
                </a>
            </LeftCont>
            <RightCont>
                <ProjImage />
            </RightCont>
        </ProjContainer>
    );
};

export default FullWidthProj;
