import { combineReducers } from 'redux';
import getDataReducer from './getData';
import addToCartReducer from './addToCart';

const allReducers = combineReducers({
  getData: getDataReducer,
  addToCart: addToCartReducer,
});

export default allReducers;
