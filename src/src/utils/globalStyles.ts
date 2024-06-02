import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
  }
`;

export default GlobalStyles;
