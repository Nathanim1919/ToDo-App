import {
  configureStore
} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
import localStorageMiddleware from './localStorageMiddleware';

const preloadedState = JSON.parse(localStorage.getItem('reduxState')) || {};

const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  preloadedState,
  middleware: [localStorageMiddleware],
});

export default store;