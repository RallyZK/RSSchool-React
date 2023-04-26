import { combineReducers, configureStore } from '@reduxjs/toolkit';
import сharactersReducer from './reducers/characters/CharactersSlice';
import formsReducer from './reducers/forms/FormsSlice';

const rootReducer = combineReducers({
  сharactersReducer,
  formsReducer,
});

export const setupStore = (preloadedState?: object) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
