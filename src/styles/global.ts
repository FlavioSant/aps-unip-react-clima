import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-50: #F8F9FE;
    --gray-100: #E7E7E7;
    --gray-300: #C1C1C1;
    --gray-700: #5A5A5A;
    --gray-800: #333333;
    --blue: #065EDC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html, body, div#root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--gray-50);
  }

  body, input, button {
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
