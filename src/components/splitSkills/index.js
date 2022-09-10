import React from 'react';
import { SplitCont } from './styles';
import { SkillDrop } from '../skillDrop';

const SplitSkills = () => {
    return (
        <SplitCont>
            <SkillDrop
                skill='React'
                description='this is a description, I will need to write more later'
            />
            <SkillDrop
                skill='Javascript & Typescript'
                description='Through these experiences, Ive had the opportunity to create memorable products that are not only enjoyable to use, but are written in code thats maintainable and easy to understand.  Ive had the opportunity to create memorable'
            />
            <SkillDrop
                skill='SCSS & Styled Components'
                description='this is a description, I will need to write more later'
            />
            <SkillDrop
                skill='Testing'
                description='this is a description, I will need to write more later'
            />
        </SplitCont>
    );
};

export { SplitSkills };
