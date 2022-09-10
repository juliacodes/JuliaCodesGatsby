import React from 'react';
import { Paragraph } from '../../theming/styles';
import { SplitCont } from './styles';

const Split = ({ paragraph }) => {
    return (
        <SplitCont>
            <Paragraph>{paragraph}</Paragraph>
        </SplitCont>
    );
};

export { Split };
