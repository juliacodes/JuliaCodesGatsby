import React from 'react';
import { Helmet } from 'react-helmet';

const MetaContent = () => (
    <Helmet>
        <title>Julia Johnson - Front End Developer - JuliaCodes</title>
        <meta
            name='title'
            content='Julia Johnson - Front End Developer - JuliaCodes'
        />
        <meta
            name='description'
            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://juliacodes.com/' />
        <meta
            property='og:title'
            content='Julia Johnson - Front End Developer - JuliaCodes'
        />
        <meta
            property='og:description'
            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
        />
        <meta property='og:image' content={LandingImage} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://juliacodes.com/' />
        <meta
            property='twitter:title'
            content='Julia Johnson - Front End Developer - JuliaCodes'
        />
        <meta
            property='twitter:description'
            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
        />
        <meta property='twitter:image' content={LandingImage} />
        <html lang='en' />
    </Helmet>
);

export default MetaContent;
