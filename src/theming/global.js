import { createGlobalStyle } from 'styled-components';
import { Heading } from '../theming/styles';

const GlobalStyles = createGlobalStyle`
    * {
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 99;
    position:relative;
  }


  *:focus {outline: ${({ theme }) => theme.outline}; outline-offset: 3px;}

  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-weight: 600;
  }

  body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.heading};
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    letter-spacing: -1.1%;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;  scrollbar-width: none;
    ::-webkit-scrollbar { width: 0 !important }
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
  
  a:hover {
    cursor: pointer;
    
    ${Heading}{
      border-bottom: 2px solid;
      border-bottom-color: ${({ theme }) => theme.textMain};
    }
  }
`;

export default GlobalStyles;
