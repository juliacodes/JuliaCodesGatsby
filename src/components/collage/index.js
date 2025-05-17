import React from 'react';
import { CollageCont, CollageItem } from './styles';
import CollageImage1 from '../../images/collage/collage1.png';
import CollageImage2 from '../../images/collage/collage2.png';
import CollageImage3 from '../../images/collage/collage3.png';
import CollageImage4 from '../../images/collage/collage4.png';
import CollageImage5 from '../../images/collage/collage5.png';

const Collage = () => {
    return (
        <CollageCont>
            <CollageItem data-label="Scheduler, 2024"><img src={CollageImage1} alt="Scheduler" /></CollageItem>
            <CollageItem data-label="Web Development"><img src={CollageImage2} alt="Web Development" /></CollageItem>
            <CollageItem data-label="UI/UX Design"><img src={CollageImage3} alt="UI/UX Design" /></CollageItem>
            <CollageItem data-label="Digital Art"><img src={CollageImage4} alt="Digital Art" /></CollageItem>
            <CollageItem data-label="Brand Identity"><img src={CollageImage5} alt="Brand Identity" /></CollageItem>
        </CollageCont>
    );
};

export { Collage };
