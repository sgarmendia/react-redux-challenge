import createStore from "/redux/methods/createStore";
import applyMiddleware from "/redux/methods/applyMiddleware";
// import compose from "/redux/methods/compose";

import { rootReducer } from "./rootReducer";

const initialState = localStorage.getItem('store')
    ?   JSON.parse(localStorage.getItem('store'))
    :   {};

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     :   undefined;


const logger = ({ getState }) => {
    return next => action => {
        console.log('will dispatch', action)

        const returnValue = next(action)
    
        console.log('state after dispatch', getState())
        return returnValue
    }
}



const store = applyMiddleware( logger )( createStore )( rootReducer, initialState )

export default store;