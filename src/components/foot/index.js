import React from 'react';
import { FootCont, FootFinal, LogoSvg, FinalLeft, FinalRight } from './styles';
import { Full, Heading, Paragraph } from '../../theming/styles';
import Button from '../button';
const Foot = () => {
    return (
        <FootCont>
            <Full style={{ paddingLeft: '60px', paddingRight: '60px' }}>
                <Heading>Let’s Build Something Together.</Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ac pretium magna. elit. Duis ac pretium magna.{' '}
                </Paragraph>
                <a href=''>julia@juliacodes.com</a>
                <FootFinal>
                    <FinalLeft>
                        <LogoSvg
                            width='34'
                            height='56'
                            viewBox='0 0 34 56'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M17.7771 37.4649V1H33.3557V21.1186C33.3557 31.1778 24.9672 36.2075 17.7771 37.4649Z'
                                strokeWidth='1.25741'
                            />
                            <path
                                d='M1 38.6538H16.5786V55.0001C6.95946 52.4595 3.34397 49.1068 1 38.6538Z'
                                strokeWidth='1.25741'
                            />
                        </LogoSvg>
                        <Paragraph>
                            Designed and Built by Julia Johnson
                        </Paragraph>
                    </FinalLeft>
                    <FinalRight>
                        <Paragraph>github</Paragraph>
                        <Paragraph>twitter</Paragraph>
                        <Paragraph>instagram</Paragraph>
                    </FinalRight>
                </FootFinal>
            </Full>
        </FootCont>
    );
};

export default Foot;
