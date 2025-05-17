import styled from 'styled-components';
import QUERIES from '../../theming/styles';
import { fadeIn } from '../../theming/animate';
import CollageImage from '../../images/collage.png';
export const CollageCont = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const CollageItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    height: 140px;
    width: 140px;
    background-image: url(${CollageImage});
    background-size: cover;
    background-position: center;
`;