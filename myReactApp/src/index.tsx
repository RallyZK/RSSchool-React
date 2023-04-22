import './index.css';
import App from './App';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

const node = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const root = hydrateRoot(document.getElementById('root') as HTMLElement, node);
root.render(node);
