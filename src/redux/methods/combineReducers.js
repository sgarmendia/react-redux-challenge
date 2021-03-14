export default (reducersObject={}) => {
    return (state={}, action={}) => {
        return Object.entries(reducersObject).reduce((obj, [key, reducer]) => {
            obj[key] = reducer(state[key], action);
            return obj;
        }, {});
    };
};
