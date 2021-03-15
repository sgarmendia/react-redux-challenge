import compose from '/redux/methods/compose'

export default function applyMiddleware(...middlewares) {
    return (createStore) => (reducer, preloadedState, enhancer) => {
        const store = createStore(reducer, preloadedState, enhancer)
        const middlewareArg = {
            getState: store.getState,
            dispatch: action => store.dispatch(action),
        };

        const invoquedMiddlewares = middlewares.map(middleware => {
            return middleware(middlewareArg)
        });

        const dispatch = compose(...invoquedMiddlewares)(store.dispatch);

        return { ...store, dispatch };
    }
};