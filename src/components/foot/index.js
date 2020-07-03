import React from 'react';
import { FootCont } from './styles';
import Logo from '../logo';
import { Full, Heading, Paragraph } from '../../theming/styles';
import Button from '../button';
const Foot = () => {
    return (
        <FootCont>
            <Full>
                <Heading>Let’s Build Something Together.</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ac pretium magna. elit. Duis ac pretium magna.{' '}
                </Paragraph>
                <a href=''>julia@juliacodes.com</a>
            </Full>
        </FootCont>
    );
};

export default Foot;
