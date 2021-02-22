import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialStore) {
    const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support to redux dev tools
    return createStore(rootReducer, 
        initialStore, 
        composeEnhances(applyMiddleware(reduxImmutableStateInvariant()))
        );
}