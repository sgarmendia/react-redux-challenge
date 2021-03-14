export default (rootReducer, initialState={}) => {
    let state = rootReducer(initialState, {type: "@@INIT"});
    let subscriptions = [];

    const dispatch = action => {
      state = rootReducer(state, action);
      subscriptions.forEach(subscription => subscription(state));
    };

    const getState = () => state;

    const subscribe = newSubscription => {
      subscriptions = [ ...subscriptions, newSubscription ]
    };

    return {
      dispatch,
      getState,
      subscribe,
    };
};