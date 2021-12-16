import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    outline: none;
    font-family: Roboto, sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
