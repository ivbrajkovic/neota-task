import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';

import { SnackbarProvider } from 'components/Snackbar/useSnackbar';
import { Snackbar } from 'components';
import { ThemeProvider } from 'theme';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <SnackbarProvider>
        <CssBaseline />
        <App />
        <Snackbar />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
