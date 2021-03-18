import { openCartReducer } from './openCartReducer';
import { addCartReducer } from './addCartReducer';
import { loversReducer } from './loversReducer';
import { addLoversReducer } from './addLovers';
import { productsReducer } from './productsReducer';
import { notificationReducer } from './notificationReducer';
import { userLogadoReducer } from './userLogadoReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  clickState: openCartReducer,
  addCart: addCartReducer,
  lovers:loversReducer,
  addLovers: addLoversReducer,
  products:productsReducer,
  notification:notificationReducer,
  userLogado:userLogadoReducer
});