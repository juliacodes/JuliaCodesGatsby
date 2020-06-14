import styled from 'styled-components';

export const SkillCont = styled.div`
    height: 50px;
    overflow: hidden;
    margin: 0 0 60px 0;

    h1 {
        font-size: 40px;
        margin-bottom: 20px;
        font-weight: 400;
        transition: all 0.3s ease-in-out;

        :hover {
            color: ${({ theme }) => theme.accent};
        }
    }
`;
