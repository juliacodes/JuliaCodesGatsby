import React from 'react';
import { FootCont, FootFinal, FinalLeft, FinalRight, HeroIcon } from './styles';
import { Midi, Paragraph } from '../../theming/styles';
import { Link } from 'react-router-dom';
import { useTheme } from '../../theming/themeContext';

const Foot = () => {
    return (
        <FootCont>
                <FootFinal>
                    <FinalLeft>
                        <Paragraph>
                            built with <HeroIcon viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 6.82552C2.01791 4.97692 3.52202 3.48389 5.37484 3.48389C6.43507 3.48389 7.38111 3.97276 7.99985 4.73739C8.61858 3.97276 9.56462 3.48389 10.6248 3.48389C12.4888 3.48389 13.9998 4.99493 13.9998 6.85889C13.9998 6.90544 13.9989 6.95181 13.997 6.99797C13.9333 9.13139 12.3783 10.7571 11.0415 11.7818C10.3522 12.3103 9.67032 12.7179 9.16274 12.993C8.90808 13.131 8.69512 13.2368 8.54414 13.3089C8.4686 13.3449 8.40843 13.3726 8.36614 13.3917C8.34499 13.4012 8.3283 13.4086 8.31638 13.4138L8.30212 13.4201L8.29775 13.422L8.29626 13.4226C8.11 13.5039 7.89 13.5039 7.70405 13.4229L7.70197 13.422L7.69752 13.4201L7.683 13.4137C7.67087 13.4084 7.65386 13.4008 7.63231 13.3911C7.58923 13.3717 7.52792 13.3435 7.45097 13.3067C7.29719 13.2332 7.08035 13.1253 6.82137 12.9846C6.3052 12.7042 5.61264 12.2886 4.91574 11.7498C3.5637 10.7044 1.9991 9.04217 1.99902 6.86391C1.99902 6.85108 1.99935 6.83827 2 6.82552Z" />
                            </HeroIcon> by julia
                        </Paragraph>
                    </FinalLeft>
                    <FinalRight>
                        <a href='mailto: julia@juliacodes.com' target="_blank" rel="noopener noreferrer">
                            <Paragraph style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                Email <HeroIcon viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" marginLeft="4px">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.21967 15.2642C5.51256 15.5571 5.98744 15.5571 6.28033 15.2642L13.5 8.04455V13.7339C13.5 14.1481 13.8358 14.4839 14.25 14.4839C14.6642 14.4839 15 14.1481 15 13.7339V6.23389C15 5.81967 14.6642 5.48389 14.25 5.48389H6.75C6.33579 5.48389 6 5.81967 6 6.23389C6 6.6481 6.33579 6.98389 6.75 6.98389H12.4393L5.21967 14.2036C4.92678 14.4964 4.92678 14.9713 5.21967 15.2642Z" />
                                </HeroIcon>
                            </Paragraph>
                        </a>
                        <a href='https://www.linkedin.com/in/juliacodes' target="_blank" rel="noopener noreferrer">
                            <Paragraph style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                LinkedIn <HeroIcon viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" marginLeft="4px">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.21967 15.2642C5.51256 15.5571 5.98744 15.5571 6.28033 15.2642L13.5 8.04455V13.7339C13.5 14.1481 13.8358 14.4839 14.25 14.4839C14.6642 14.4839 15 14.1481 15 13.7339V6.23389C15 5.81967 14.6642 5.48389 14.25 5.48389H6.75C6.33579 5.48389 6 5.81967 6 6.23389C6 6.6481 6.33579 6.98389 6.75 6.98389H12.4393L5.21967 14.2036C4.92678 14.4964 4.92678 14.9713 5.21967 15.2642Z" />
                                </HeroIcon>
                            </Paragraph>
                        </a>
                        <a href='https://github.com/juliacodes' target="_blank" rel="noopener noreferrer">
                            <Paragraph style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                GitHub <HeroIcon viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" marginLeft="4px">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.21967 15.2642C5.51256 15.5571 5.98744 15.5571 6.28033 15.2642L13.5 8.04455V13.7339C13.5 14.1481 13.8358 14.4839 14.25 14.4839C14.6642 14.4839 15 14.1481 15 13.7339V6.23389C15 5.81967 14.6642 5.48389 14.25 5.48389H6.75C6.33579 5.48389 6 5.81967 6 6.23389C6 6.6481 6.33579 6.98389 6.75 6.98389H12.4393L5.21967 14.2036C4.92678 14.4964 4.92678 14.9713 5.21967 15.2642Z" />
                                </HeroIcon>
                            </Paragraph>
                        </a>
                    </FinalRight>
                </FootFinal>
        </FootCont>
    );
};

export { Foot };