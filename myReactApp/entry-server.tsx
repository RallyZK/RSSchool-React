import React from 'react';
import App from './src/App';
import { Provider } from 'react-redux';
import { setupStore } from './src/store/store';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';

const store = setupStore();

export const render = (url: string, options?: object) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options,
  );
};
