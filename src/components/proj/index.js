import React from 'react';
import { ProjCont, ProjImageCont, ProjImage, DescCont } from './styles';
import { Heading, Paragraph } from '../../theming/styles';

const Proj = (props) => {
    return (
        <ProjCont>
            <ProjImageCont>
                <ProjImage src={props.img} />
            </ProjImageCont>
            <DescCont>
                <Heading>{props.title}</Heading>
                <Paragraph>{props.description}</Paragraph>
            </DescCont>
        </ProjCont>
    );
};

export { Proj };
