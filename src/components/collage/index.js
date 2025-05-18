import React from 'react';
import { CollageCont, CollageItem } from './styles';
import CollageImage1 from '../../images/collage/collage1.png';
import CollageGif2 from '../../images/collage/collage2.gif';
import CollageImage3 from '../../images/collage/collage3.png';
import CollageGif4 from '../../images/collage/collage4.gif';
import CollageGif5 from '../../images/collage/collage5.gif';

const Collage = () => {
    return (
        <CollageCont>
            <CollageItem data-label="Content Scheduling"><img src={CollageImage1} alt="Scheduler" /></CollageItem>
            <CollageItem data-label="Trivia Game Design"><img src={CollageGif2} alt="Web Development" /></CollageItem>
            <CollageItem data-label="Email Onboarding"><img src={CollageImage3} alt="UI/UX Design" /></CollageItem>
            <CollageItem data-label="Paywall Popup"><img src={CollageGif4} alt="Digital Art" /></CollageItem>
            <CollageItem data-label="Navigation Collapse"><img src={CollageGif5} alt="Brand Identity" /></CollageItem>
        </CollageCont>
    );
};

export { Collage };
