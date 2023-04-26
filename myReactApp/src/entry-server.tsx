import App from './App';
import React, { FC } from 'react';
import { Response } from 'express';
import { Provider } from 'react-redux';
import { IResponse } from './utils/types';
import { PreloadedState } from '@reduxjs/toolkit';
import { setupStore, RootState } from './store/store';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';
import { searchCharacter } from './store/reducers/characters/ActionCreator';

const preloadCharactersCards = async (callback: (preloadResult: IResponse) => void) => {
  const characters = await searchCharacter('');
  callback(characters);
};

export const render = async (url: string, res: Response) => {
  preloadCharactersCards((result) => {
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

const RenderFullPage: FC<RenderFullPageType> = ({ app, preloadedState }) => {
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
