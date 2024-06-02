import { useState } from 'react';
import './App.css';

import Button from './components/button/Button';
import WithThemeProvider from './src/utils/withThemeProvider';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <WithThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <div>
        <h1>Hello, UI Library!</h1>
        <Button onClick={toggleTheme}>
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Button>
      </div>
    </WithThemeProvider>
  );
}

export default App;
