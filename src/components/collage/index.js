import React from 'react';
import { CollageCont, CollageItem } from './styles';
import CollageImage1 from '../../images/collage/collage1.png';
import CollageGif2 from '../../images/collage/collage2.gif';
import CollageImage3 from '../../images/collage/collage3.png';
import CollageGif4 from '../../images/collage/collage4.gif';
import CollageGif5 from '../../images/collage/collage5.gif';

const Collage = () => {

    const openNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      };

    return (
        <CollageCont>
            <CollageItem onClick={() => openNewTab('https://x.com/julia_codes/status/1926475308305457434')} data-label="Content Scheduling"><img src={CollageImage1} alt="Scheduler" /></CollageItem>
            <CollageItem data-label="Trivia Game Design"><img src={CollageGif2} alt="Web Development" /></CollageItem>
            <CollageItem data-label="Email Onboarding"><img src={CollageImage3} alt="UI/UX Design" /></CollageItem>
            <CollageItem onClick={() => openNewTab('https://x.com/julia_codes/status/1924125662085804459')} data-label="Paywall Popup"><img src={CollageGif4} alt="Digital Art" /></CollageItem>
            <CollageItem onClick={() => openNewTab('https://x.com/julia_codes/status/1924900935517503999')} data-label="Navigation Collapse"><img src={CollageGif5} alt="Brand Identity" /></CollageItem>
        </CollageCont>
    );
};

export { Collage };
