import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducers/rootReducer"
import { createStore, applyMiddleware, compose } from "redux";
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function configureStore() {
    return {
        ...createStore(rootReducer, initialState, composedEnhancers),
        runSaga: sagaMiddleware.run(rootSaga)
    }
}