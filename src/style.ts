import {createGlobalStyle} from 'styled-components';
import NanumSquareRound from './static/fonts/NanumSquareRound.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NanumSquareRound';
    src: url(${NanumSquareRound}) format('woff2');
    font-weight: normal;
    font-style: normal;
  } 

  html {
    font-size: 16px;
    overflow-x: hidden;
  }

  body, html {
    font-family: 'NanumSquareRound';
    font-weight: 400;
    margin: 0;
    font-size: 16px;
  }

  body {
    background-color: #fefee7;
  }

  #content {
    position: relative;
    height: 100%;
    overflow: auto;
    z-index: 1;
  }
`;
