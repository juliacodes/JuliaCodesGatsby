import React from 'react';
import { FootCont, FootFinal, LogoSvg, FinalLeft, FinalRight } from './styles';
import { Midi, Paragraph } from '../../theming/styles';
import { Link } from 'react-router-dom';

const Foot = () => {
    return (
        <FootCont>
            <Midi>
                <FootFinal>
                    <FinalLeft>
                        <Paragraph>
                            Built with Gatsby
                        </Paragraph>
                    </FinalLeft>
                    <FinalRight>
                        <a href='https://github.com/juliacodes'>
                            <Paragraph>
                                GitHub
                            </Paragraph>
                        </a>
                        <a href='https://www.linkedin.com/in/juliacodes'>
                            <Paragraph>
                                LinkedIn
                            </Paragraph>
                        </a>
                        <a href='mailto: julia@juliacodes.com'>
                            <Paragraph>
                                Email
                            </Paragraph>
                        </a>
                    </FinalRight>
                </FootFinal>
            </Midi>
        </FootCont>
    );
};

export { Foot };