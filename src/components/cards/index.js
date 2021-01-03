import React from 'react';
import Card from '../card';
import { CardWrapper } from './styles';
import Marquee from 'react-marquee-slider';
import brevite from '../../images/comps/brevite.png';
import bose from '../../images/comps/bose.png';
import hinge from '../../images/comps/hinge.png';
import palette from '../../images/comps/palette.png';
import grove from '../../images/comps/grove.png';
import able from '../../images/comps/able.png';
import breviteWhite from '../../images/comps/brevite-white.png';
import boseWhite from '../../images/comps/bose-white.png';
import hingeWhite from '../../images/comps/hinge-white.png';
import paletteWhite from '../../images/comps/palette-white.png';
import groveWhite from '../../images/comps/grove-white.png';
import ableWhite from '../../images/comps/able-white.png';

const Cards = ({ mode }) => {
    return (
        <>
            <Marquee style={{ height: 120, display: 'flex' }} velocity={30}>
                <Card img={mode === 'light' ? brevite : breviteWhite} />
                <Card img={mode === 'light' ? bose : boseWhite} />
                <Card img={mode === 'light' ? hinge : hingeWhite} />
                <Card img={mode === 'light' ? palette : paletteWhite} />
                <Card img={mode === 'light' ? grove : groveWhite} />
                <Card img={mode === 'light' ? able : ableWhite} />
            </Marquee>
            <CardWrapper></CardWrapper>
        </>
    );
};

export default Cards;
