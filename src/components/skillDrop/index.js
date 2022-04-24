import React, { useState } from 'react';
import { Paragraph } from '../../theming/styles';
import { SkillCont, Flip } from './styles';

const SkillDrop = (props) => {
    const [expand, setExpand] = useState(false);

    function toggleExpand() {
        if (expand === true) {
            setExpand(false);
        } else {
            setExpand(true);
        }
    }

    return (
        <SkillCont style={expand ? { maxHeight: '300px' } : {}}>
            <Flip onClick={toggleExpand}>
                <h1>{props.skill}</h1>
                <svg
                    style={
                        expand ? { transform: 'rotate(180deg) scale(0.8)' } : {}
                    }
                    width='50'
                    height='49'
                    viewBox='0 0 50 49'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M25.3599 32.6666L37.6099 20.4166L34.7311 17.5379L25.3599 26.8887L15.9886 17.5379L13.1099 20.4166L25.3599 32.6666Z'
                        fill='#818181'
                    />
                </svg>
            </Flip>
            <Paragraph
                style={
                    expand
                        ? { lineHeight: '184.69%', opacity: 1 }
                        : { lineHeight: '104.69%', opacity: 0 }
                }
            >
                {props.description}
            </Paragraph>
        </SkillCont>
    );
};

export { SkillDrop };
