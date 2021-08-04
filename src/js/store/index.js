import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import chatReducer from '../reducers/chats';

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const store = createStore(
    combineReducers({
      chats: chatReducer,
    }),
    //destructure middleware applyed to applyMiddleware
    applyMiddleware(...middlewares)
  );

  return store;
}
