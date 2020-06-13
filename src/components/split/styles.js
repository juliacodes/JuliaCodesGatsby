import styled from 'styled-components';
import { Heading, Paragraph } from '../../theming/styles';

export const SplitCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left {
        width: 50%;
    }

    .right {
        width: 30%;

        ${Paragraph} {
            max-width: 200px;
            line-height: 25px;
        }
    }

    ${Heading} {
        font-weight: 900;
    }
`;
