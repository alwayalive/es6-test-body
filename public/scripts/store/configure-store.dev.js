import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from 'reducers';
import DevTools from 'store/dev-tools';
import thunk from 'redux-thunk'

// import { routerMiddleware } from 'react-router-redux'

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware( thunk ),
    // applyMiddleware( thunk, routerMiddleware(history)),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
    // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
    persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(history, initialState) {
    // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, initialState, enhancer);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('reducers', () =>
            store.replaceReducer(require('reducers') /*.default if you use Babel 6+ */ )
        );
    }

    return store;
}
