import { applyMiddleware, compose, createStore } from 'redux';

import { rootReducer } from './reducers/root-reducer';

const middleware = applyMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(middleware));

if ((module as any).hot) {
  // Enable Webpack hot module replacement for reducers
  (module as any).hot.accept('./reducers/root-reducer', () => {
    const updatedRootReducer = require('./reducers/root-reducer');
    store.replaceReducer(updatedRootReducer);
  });
}

export default store;
