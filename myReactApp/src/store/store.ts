import { combineReducers, configureStore } from '@reduxjs/toolkit';
import сharactersReducer from './reducers/СharactersSlice';
import cardsReduser from './reducers/cards/CardsSlice';

const rootReducer = combineReducers({
  сharactersReducer,
  cardsReduser,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
