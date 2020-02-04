import React from 'react';
import {
    HeadingWrapCont,
    HeadingElements,
    Line,
    SocialCont,
    Social,
    MaxHeading
} from './styles';
import { Container } from '../container';
function HeadingWrap() {
    return (
        <Container>
            <HeadingWrapCont>
                <HeadingElements>
                    <Line />
                    <SocialCont>
                        <a
                            title='Instagram - Juliacodes'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.instagram.com/juliacodes/'
                        >
                            <Social className='insta'></Social>
                        </a>

                        <a
                            title='Github Repository'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/juliajcodes'
                        >
                            <Social className='git'></Social>
                        </a>
                        <a
                            title='Twitter'
                            target='_blank'
                            rel='noreferrer'
                            href='https://twitter.com/julia_codes'
                        >
                            <Social className='twitter'></Social>
                        </a>
                    </SocialCont>
                </HeadingElements>
                <MaxHeading>
                    Hi there, I’m Julia. <br />
                    Front End <span>Developer</span>, <br />
                    Student and Minimalist
                </MaxHeading>
            </HeadingWrapCont>
        </Container>
    );
}

export default HeadingWrap;
