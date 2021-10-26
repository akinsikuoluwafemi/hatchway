import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { persistStore } from 'redux-persist';


const middlewares = [ thunk]

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;