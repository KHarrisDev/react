import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// *This is the entry point of the application.
// *root is the ID in HTML where the application will be rendered.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

