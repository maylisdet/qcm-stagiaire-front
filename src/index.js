import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from 'App';
import { colorTheme } from 'theme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <ThemeProvider theme={colorTheme}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.querySelector('#root'),
);
