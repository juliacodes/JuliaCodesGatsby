import React from 'react';
import { Paragraph, Heading } from '../../theming/styles';
import ButtonA from '../button';
import { SplitCont } from './styles';

const Split = () => {
    return (
        <>
            <Paragraph>
                My background in both design and development has allowed me to
                bridge the gap between designers and engineers to create and
                implement beautiful designs with well architected front ends.
            </Paragraph>
            <div style={{ display: 'flex' }}>
                <a style={{ marginRight: 30 }} href='/about'>
                    <ButtonA title='About Me' />
                </a>
                <a href='/about'>
                    <ButtonA title='Resume' />
                </a>
            </div>
        </>
    );
};

export default Split;
