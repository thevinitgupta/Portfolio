import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SocialBar from './Components/SocialBar';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocialBar location="index" />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

