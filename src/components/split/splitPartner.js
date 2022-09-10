import React from 'react';
import { Paragraph, Heading } from '../../theming/styles';
import ButtonA from '../button';
import { SplitCont } from './styles';

const SplitPartner = () => {
    return (
        <SplitCont style={{ alignItems: 'start' }}>
            <div className='left-small'>
                <Paragraph style={{ maxWidth: 450, fontWeight: 600 }}>
                    I've partnered with numerous well-known brands
                </Paragraph>
                <a href='/about'>
                    <ButtonA title='contact' />
                </a>
            </div>
            <div className='right-large'>
                <Paragraph style={{ fontSize: 20 }}>
                    I'm actively looking for partnerships that align with my
                    niche and goals, feel free to reach out if you're interested
                </Paragraph>
            </div>
        </SplitCont>
    );
};

export default SplitPartner;
