//Actions
export const SHOW_ALL ='SHOW_ALL';
export const SHOW_COMPLETE ='SHOW_COMPLETE';
export const SHOW_INCOMPLETE ='SHOW_INCOMPLETE';

//initial state
const initialState = 'ALL';

//FILTER reducer
export const filterReducer = (state = initialState, action) => {
	switch (action.type) {
	  case SHOW_ALL:
		return 'ALL';
	  case SHOW_COMPLETE:
		return 'COMPLETE';
	  case SHOW_INCOMPLETE:
		return 'INCOMPLETE';
	  default:
		return state;
	}
};