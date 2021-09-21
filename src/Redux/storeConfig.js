import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import các reducer con vào
const reducer = combineReducers({});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);