import React from 'react';
import { Heading3, Paragraph } from '../../theming/styles';
import { ExperienceList, ExperienceItem, ExperienceYears, ExperienceDetails } from './styles';

export const Experience = ({ experiences }) => {
    return (
        <ExperienceList>
            {experiences.map((exp, index) => (
                <ExperienceItem key={index}>
                    <ExperienceYears>
                        <Heading3 style={{ color: '#B0B0B0', fontWeight: 300 }}>{exp.years}</Heading3>
                    </ExperienceYears>
                    <ExperienceDetails>
                        <Heading3>{exp.title}</Heading3>
                        <Paragraph>{exp.description}</Paragraph>
                    </ExperienceDetails>
                </ExperienceItem>
            ))}
        </ExperienceList>
    );
}; 