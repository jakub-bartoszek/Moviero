import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Normalize } from 'styled-normalize';
import store from './utils/redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <StrictMode>
      <GlobalStyle />
      <Normalize />
      <App />
    </StrictMode>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
