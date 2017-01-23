import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

// Middleware you want to use in production:
const enhancer = applyMiddleware( thunk, routerMiddleware( history ) );

export default function configureStore( history, initialState ) {
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    return createStore(rootReducer, initialState, enhancer);
};
