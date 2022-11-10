import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import CryptoContext from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CryptoContext>
        <App />
      </CryptoContext>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);