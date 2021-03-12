import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

const initialState = localStorage.getItem('store')
    ?   JSON.parse(localStorage.getItem('store'))
    :   {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    :   undefined;

const store = createStore(rootReducer, initialState, devTools);

store.subscribe(() => {
    const { todos=[] } = store.getState();
    const stringifiedStore = JSON.stringify({ filter: 'ALL', todos })
    localStorage.setItem('store', stringifiedStore);
});

export default store;