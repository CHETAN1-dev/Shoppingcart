import { combineReducers } from 'redux';
import { reducer } from './Reducer'; 

export default combineReducers({
  cart: reducer,  
});
