import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyles from './globalStyles';

interface ThemeWrapperProps {
  children: ReactNode;
  theme: DefaultTheme;
}

const WithThemeProvider = ({ children, theme }: ThemeWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default WithThemeProvider;
