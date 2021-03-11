import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";

import _ from "lodash";


const initialState = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || undefined;

const store = createStore(rootReducer, initialState, devTools());


store.subscribe(() => {
    // console.log(store.getState())
});

export default store;