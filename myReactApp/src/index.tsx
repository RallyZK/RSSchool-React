import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { setupStore } from './store/store';
import { BrowserRouter } from 'react-router-dom';

const store = setupStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
