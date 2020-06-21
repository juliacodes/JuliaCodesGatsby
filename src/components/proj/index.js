import React from 'react';
import {
    ProjCont,
    ProjImageCont,
    ProjImage,
    DescCont,
    TypeCont,
    TriProjDiv,
} from './styles';
import { Heading, Paragraph } from '../../theming/styles';

const Proj = (props) => {
    return (
        <ProjCont>
            <ProjImageCont style={props.img2 ? { marginTop: 40 } : null}>
                {props.img2 ? (
                    <TriProjDiv>
                        <ProjImage className='img3' src={props.img3} />
                        <ProjImage className='img2' src={props.img2} />
                        <ProjImage className='img1' src={props.img} />
                    </TriProjDiv>
                ) : (
                    <ProjImage src={props.img} />
                )}
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
