import React from 'react';
import {
    ProjCont,
    ProjImageCont,
    ProjImage,
    DescCont,
    TypeCont,
} from './styles';
import { Heading, Paragraph } from '../../theming/styles';

const Proj = (props) => {
    return (
        <ProjCont>
            <ProjImageCont>
                <ProjImage src={props.img} />
            </ProjImageCont>
            <DescCont>
                <TypeCont>
                    {props.react !== undefined ? (
                        <p className={props.react}>{props.react}</p>
                    ) : null}
                    {props.reactHooks !== undefined ? (
                        <p className={props.reactHooks}>{props.reactHooks}</p>
                    ) : null}
                    {props.sc !== undefined ? (
                        <p className={props.sc}>{props.sc}</p>
                    ) : null}
                    {props.netlify !== undefined ? (
                        <p className={props.netlify}>{props.netlify}</p>
                    ) : null}
                </TypeCont>
                <Heading>{props.title}</Heading>
                <Paragraph>{props.description}</Paragraph>
            </DescCont>
        </ProjCont>
    );
};

export default Proj;
