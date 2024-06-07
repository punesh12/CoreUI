import { useState } from 'react';
import './App.css';

import styled from 'styled-components';
import Button from './components/button/Button';
import { Elevation, elevations } from './components/elevation/Elevation';

import WithThemeProvider from './src/utils/withThemeProvider';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { Label } from '.';

const Icon = () => {
  return (
    <img
      width='30'
      height='30'
      src='https://img.icons8.com/ios-glyphs/30/arrow.png'
      alt='arrow'
    />
  );
};

const ElevatedDiv = styled.div<{ elevation: keyof typeof elevations }>`
  background: #fff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 4px;
  ${(props) => Elevation(props.elevation)}
`;

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

        <div style={{ display: 'flex', gap: '10px' }}>
          <ElevatedDiv elevation='inset'>Inset Elevation</ElevatedDiv>
          <ElevatedDiv elevation='base'>Base Elevation</ElevatedDiv>
          <ElevatedDiv elevation='level1'>Level 1 Elevation</ElevatedDiv>
          <ElevatedDiv elevation='level2'>Level 2 Elevation</ElevatedDiv>
          <ElevatedDiv elevation='level3'>Level 3 Elevation</ElevatedDiv>
          <ElevatedDiv elevation='level4'>Level 4 Elevation</ElevatedDiv>
          <ElevatedDiv elevation='level5'>Level 5 Elevation</ElevatedDiv>
          <ElevatedDiv elevation='level6'>Level 6 Elevation</ElevatedDiv>
        </div>
        <div style={{ padding: '20px' }}>
          <h2>Text Only</h2>
          <Label size='small'>Small</Label>
          <Label size='medium'>Medium</Label>
          <Label size='large'>Large Size</Label>

          <h2>Text + Icon</h2>
          <Label size='small'>
            <Icon /> Small
          </Label>
          <Label size='medium'>
            <Icon /> Medium
          </Label>
          <Label size='large'>
            <Icon /> Large Size
          </Label>

          <h2>Double Icon</h2>
          <Label size='small'>
            <Icon /> Small <Icon />
          </Label>
          <Label size='medium'>
            <Icon /> Medium <Icon />
          </Label>
          <Label size='large'>
            <Icon /> Large Size <Icon />
          </Label>
        </div>
      </div>
    </WithThemeProvider>
  );
}

export default App;
