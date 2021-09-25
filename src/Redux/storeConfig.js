import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import user from "./Reducers/UserReducer";

// import các reducer con vào
const reducer = combineReducers({
    user,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);