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
                    understand. I've had the opportunity to create memorable{' '}
                </Paragraph>
                <a href='/about'>
                    <ButtonA title='About Me' />
                </a>
            </div>
            <div className='right'>
                <div className='leftInner'>
                    <Heading>22</Heading>
                    <Paragraph>projects & applications</Paragraph>
                </div>
                <div className='rightInner'>
                    <Heading>5</Heading>
                    <Paragraph>internships completed</Paragraph>
                </div>
            </div>
        </SplitCont>
    );
};

export default Split;
