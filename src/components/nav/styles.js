import styled from 'styled-components';
import QUERIES from '../../theming/styles';
import { fadeIn } from '../../theming/animate';

export const NavCont = styled.nav`
  width: auto;
  margin: 0;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 45px;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  button {
    all: unset; /* resets button styles across browsers */
    font-weight: 300;
    font-size: 14px;
    color: rgb(255, 255, 255);
    border-radius: 20px;
    padding: 4px 10px;
    display: inline-block;

    &.active {
      background-color: rgba(255, 255, 255, 0.04);
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.02);
    }
  }

  a {
    text-decoration: none;
    
    p {
      font-weight: 300;
      font-size: 14px;
      color: rgb(255, 255, 255);
      border-radius: 20px;
      padding: 4px 10px;

      &.active {
        background-color: rgba(255, 255, 255, 0.04);
      }

      &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.02);
      }
    }
  }
`;
