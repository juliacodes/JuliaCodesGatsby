import styled from 'styled-components';
import { Full, Heading, Paragraph } from '../../theming/styles';

export const FootCont = styled.footer`
    width: 100%;
    height: 800px;
    background-color: ${({ theme }) => theme.alt};

    * {
        margin-bottom: 40px;
    }

    ${Full} {
        padding-top: 200px;
    }

    ${Heading} {
        font-size: 50px;
    }

    ${Paragraph} {
        color: ${({ theme }) => theme.textLight};
        font-size: 20px;
        max-width: 700px;
    }

    a {
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 3px solid black;
        transition: all 0.3s ease-in-out;
        :hover {
            background-position: 0px 0px;
            border-bottom: 0px solid #c2e99c;
        }
    }
`;
