import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
    overflow: hidden;
  }
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }

  main{
    width: 100vw;
    height: 100vh;
  }

  .inner{
    max-width: 1437px;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    > *{
        width: 100%;
    }
  }

  h1{
    font-size: 55px;
    line-height: 129.69%;
    font-weight: 600;
  }


`;
