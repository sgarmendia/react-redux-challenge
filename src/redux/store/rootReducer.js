import combineReducers from "/redux/methods/combineReducers";
import { filterReducer } from "/redux/filter";
import { todosReducer } from "/redux/todos";

export const rootReducer = combineReducers({
    filter: filterReducer,
    todos: todosReducer,
});
