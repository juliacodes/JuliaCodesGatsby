import React from 'react';
import { Paragraph, Heading } from '../../theming/styles';
import Button from '../../components/Button';
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
                    <Button title='About Me' />
                </a>
            </div>
            <div className='right'>
                <Heading>21</Heading>
                <Paragraph>projects & applications</Paragraph>
                <br />
                <Heading>5</Heading>
                <Paragraph>internships completed</Paragraph>
            </div>
        </SplitCont>
    );
};

export default Split;
