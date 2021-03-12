import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

const initialState = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    :   undefined;

const store = createStore(rootReducer, initialState, devTools);

store.subscribe(() => {
    // console.log(store.getState())
});

export default store;