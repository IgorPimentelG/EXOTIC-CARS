import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theme from 'src/theme/index';
import '@assets/fonts/segoe-ui.woff';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </React.Fragment>
);

