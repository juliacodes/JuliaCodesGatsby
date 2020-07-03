import React from 'react';
import { ArticleCont, Article, Date } from './styles';
import { Heading } from '../../theming/styles';
const SplitArticles = () => {
    return (
        <ArticleCont>
            <Article>
                <Date>Jan 3</Date>
                <Heading>Working at Awkward, Front End Internship</Heading>
            </Article>
            <Article>
                <Date>April 21</Date>
                <Heading>Structuring React File Systems (CSS in JS)</Heading>
            </Article>
            <Article>
                <Date>Oct 7</Date>
                <a href=''>
                    <Heading>Managing Time as a Programming Student</Heading>
                </a>
            </Article>
        </ArticleCont>
    );
};

export default SplitArticles;
