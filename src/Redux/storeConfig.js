import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import user from "./Reducers/UserReducer";
import course from "./Reducers/CourseReducer";

const reducer = combineReducers({
    user,
    course
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);