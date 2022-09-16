import React from 'react';
import { FootCont, FootFinal, LogoSvg, FinalLeft, FinalRight } from './styles';
import { Full, Paragraph } from '../../theming/styles';
import { Link } from 'react-router-dom';

const Foot = () => {
    return (
        <FootCont>
            <Full>
                <FootFinal>
                    <FinalLeft>
                        <Link to='/'>
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
                        </Link>
                        <Paragraph style={{ fontWeight: 300 }}>
                            Designed and Built by Julia Johnson
                        </Paragraph>
                    </FinalLeft>
                    <FinalRight>
                        <a href='https://github.com/juliacodes'>
                            <Paragraph style={{ fontWeight: 300 }}>
                                GitHub
                            </Paragraph>
                        </a>
                        <a
                            href='www.linkedin.com/in/juliacodes
'
                        >
                            <Paragraph style={{ fontWeight: 300 }}>
                                LinkedIn
                            </Paragraph>
                        </a>
                        <a href='mailto: julia@juliacodes.com'>
                            <Paragraph style={{ fontWeight: 300 }}>
                                Email
                            </Paragraph>
                        </a>
                    </FinalRight>
                </FootFinal>
            </Full>
        </FootCont>
    );
};

export { Foot };
