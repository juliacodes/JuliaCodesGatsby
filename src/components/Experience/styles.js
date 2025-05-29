import styled from 'styled-components';
import QUERIES from '../../theming/styles';

export const ExperienceList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin: 24px 0 100px;

     @media (max-width: 870px) {
        margin: 24px 0;
    }
`;

export const ExperienceItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
    flex-direction: row;

    @media (max-width: 870px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const ExperienceYears = styled.div`
    min-width: 180px;
    text-align: left;

    @media (max-width: 870px) {
        min-width: auto;
        width: 100%;
    }
`;

export const ExperienceDetails = styled.div`
    flex: 1;
`; 