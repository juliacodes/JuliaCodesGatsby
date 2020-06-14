import React from 'react';
import { Paragraph } from '../../theming/styles';
import { SplitCont } from './styles';
import SkillDrop from '../skillDrop';
import '../../theming/odometer.css';

const SplitSkills = () => {
    return (
        <SplitCont>
            <div className='left'>
                <Paragraph>
                    Skills & languages solidified through real world projects,
                    university courses, and online studies
                </Paragraph>
            </div>
            <div className='right'>
                <SkillDrop
                    skill='Javascript'
                    description='Through these experiences, Ive had the opportunity to create memorable products that are not only enjoyable to use, but are written in code thats maintainable and easy to understand.  Ive had the opportunity to create memorable'
                />
                <SkillDrop
                    skill='React'
                    description='this is a description, I will need to write more later'
                />
            </div>
        </SplitCont>
    );
};

export default SplitSkills;
