import React from 'react';
import { Paragraph, Heading } from '../../theming/styles';
import ButtonA from '../button';
import { SplitCont } from './styles';

const Split = () => {
    return (
        <SplitCont>
            <div className='left'>
                <Paragraph>
                    Through these experiences, I've had the opportunity to
                    create memorable products that are not only enjoyable to
                    use, but are written in code thats maintainable and easy to
                    understand.
                    <br />
                    <br />
                    I've had the opportunity to create memorable{' '}
                </Paragraph>
                {/* <a href='/about'>
                    <ButtonA title='About Me' />
                </a> */}
            </div>
            <div className='right'>
                <div className='leftInner'>
                    <Heading>47k</Heading>
                    <Paragraph>instagram followers</Paragraph>
                </div>
                <div className='rightInner'>
                    <Heading>400</Heading>
                    <Paragraph>github followers</Paragraph>
                </div>
            </div>
        </SplitCont>
    );
};

export default Split;
