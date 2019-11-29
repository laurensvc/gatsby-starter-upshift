import 'normalize.css';
import { createGlobalStyle } from 'styled-components';

const StyleNormalizer = createGlobalStyle`
  html, body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
    height: 100%;
    line-height: 1.5;
    margin: 0;
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    scroll-behavior: smooth;
    width: 100%;
  }
  h2 {
    font-size: 1.6rem;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
    
  *:focus {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: 400;
    margin: 0;
  }
    
  a {
    text-decoration: none;
  }

  @media screen and (min-width: 576px) {
    html, body{
      font-size: 17px;
    }
  }
  @media screen and (min-width: 768px) {
    html, body{
      font-size: 18px;
    }
  }
  @media screen and (min-width: 992px) {
    html, body{
      font-size: 19px;
    }
  }
  @media screen and (min-width: 1200px) {
    html, body{
      font-size: 20px;
    }
  }

  /* TODO: how to style scrollbar on firefox, edge, safari and older browsers ? */
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #F5F7FD;
  }
  ::-webkit-scrollbar-thumb {
    background: #DFE4EB;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #AFB8C4;
  }

`;

export default StyleNormalizer;
