import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { makeObservable } from 'common';
import { useEffect, useState } from 'react';

const themeMode = makeObservable({ mode: 'light' });
const toggleThemeMode = () => {
  themeMode.mode = themeMode.mode === 'dark' ? 'light' : 'dark';
};

export const useThemeMode = () => {
  const [state, setState] = useState(themeMode.mode);
  useEffect(() => {
    themeMode.observe((_, value) => setState(value));
  }, []);
  return [state, toggleThemeMode];
};

export const ThemeProvider = ({ children }) => {
  const mode = useThemeMode()[0];
  const isLight = mode === 'light';
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#2d5d7c',
      },
      secondary: {
        main: '#d45e5a',
      },
      background: {
        default: isLight ? '#fafafa' : '#121212',
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
