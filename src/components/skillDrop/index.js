import React from 'react';
import { SkillCont } from './styles';

const SkillDrop = (props) => {
    return (
        <SkillCont>
            <h1>{props.skill}</h1>
            <p>{props.description}</p>
        </SkillCont>
    );
};

export default SkillDrop;
