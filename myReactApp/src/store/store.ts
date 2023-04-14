import { combineReducers, configureStore } from '@reduxjs/toolkit';
import сharactersReducer from './reducers/CharactersSlice';
import formsReducer from './reducers/forms/FormsSlice';

const rootReducer = combineReducers({
  сharactersReducer,
  formsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
