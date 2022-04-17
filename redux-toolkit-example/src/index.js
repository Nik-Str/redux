import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//Redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import searchReducer from './features/search';
import cartReducer from './features/cart';

const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
