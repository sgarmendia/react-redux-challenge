import { v4 as uuidv4 } from 'uuid';

//Actions
export const DO_TODO = 'DO_TODO';
export const UNDO_TODO = 'UNDO_TODO';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//Initial state
const initialState = [
    {
        id: uuidv4(),
        task: 'Learn React',
        complete: true,
        edit: false,
    },
    {
        id: uuidv4(),
        task: 'Learn Firebase',
        complete: true,
        edit: false,
    },
    {
        id: uuidv4(),
        task: 'Learn GraphQL',
        complete: false,
        edit: false,
    },
];

//TODOS Reducer
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_TODO:
			return state.map(todo => todo.id === action.id
				? { ...todo, complete: true }
				: todo
			);
        case UNDO_TODO:
			return state.map(todo => todo.id === action.id
				? { ...todo, complete: false }
				: todo
			);
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id
                ? { ...todo, edit: !todo.edit }
                : todo
            );
        case EDIT_TODO:
			return state.map(todo => todo.id === action.id
				? { ...todo, task: action.task, edit: false }
				: todo
			);
        case DELETE_TODO:
          	return state.filter(todo => todo.id !== action.id);
        case ADD_TODO:
          	return [ ...state, { task: action.task, id: action.id, complete: false } ];
        default:
          	return state;
      }
};