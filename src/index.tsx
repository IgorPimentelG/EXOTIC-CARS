import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theme from 'src/providers/theme/index';
import '@assets/fonts/segoe-ui.woff';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);

