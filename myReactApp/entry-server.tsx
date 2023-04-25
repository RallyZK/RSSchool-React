import App from './src/App';
import React, { FC } from 'react';
import { Response } from 'express';
import { Provider } from 'react-redux';
import { IResponse } from './src/utils/types';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import { setupStore, RootState } from './src/store/store';
import { searchCharacter } from './src/store/reducers/characters/ActionCreator';
import { PreloadedState } from '@reduxjs/toolkit';

// rename
const preloadCardsApi = async (callback: (preloadResult: IResponse) => void) => {
  const characters = await searchCharacter('');
  callback(characters);
};

export const render = async (url: string, res: Response) => {
  // rename
  preloadCardsApi((result) => {
    const preloadedState: PreloadedState<RootState> = {
      сharactersReducer: {
        searchPhrase: '',
        characters: result.results || [],
        isLoading: false,
        message: '',
      },
    };

    const store = setupStore(preloadedState);
    const app = (
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    );

    const state = store.getState();

    const appStream = renderToPipeableStream(<RenderFullPage app={app} preloadedState={state} />, {
      onShellReady: () => {
        appStream.pipe(res);
      },
      onAllReady: () => {
        res.end();
      },
    });
  });
};

type RenderFullPageType = {
  app: React.ReactElement;
  preloadedState: RootState;
};

const RenderFullPage: FC<RenderFullPageType> = (props) => {
  const { app, preloadedState } = props;

  return (
    <html lang='en'>
      <head>
        <title>React SSR Task</title>
      </head>
      <body>
        <div id='root'>{app}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\u003c')}`,
          }}
        ></script>
        <script type='module' src='./src/index.tsx'></script>
      </body>
    </html>
  );
};
