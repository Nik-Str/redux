import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Redux
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

//Store => Global state
//Action => Global functions in store
//Reducer => Transforms new Global State based on Actions
//Dispatch => Execute Actions

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
