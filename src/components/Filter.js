import React from 'react'
import { useDispatch } from '/react-redux/hooks'
import {
	SHOW_ALL,
	SHOW_COMPLETE,
	SHOW_INCOMPLETE,
} from '/redux/filter';
import PropTypes from 'prop-types'

const Filter = () => {
	const dispatch = useDispatch()

	const handleFilter = show => {
		switch (show) {
			case 'all':
				dispatch({ type: SHOW_ALL });
				break;
			case 'complete':
				dispatch({ type: SHOW_COMPLETE });
				break;
			case 'incomplete':
				dispatch({ type: SHOW_INCOMPLETE });
				break;
			default:
				break;
		}
	};

	return (
		<div className="filter_container">
			<h1>Redux TODOS</h1>
			<button 
				className="btn " 
				type="button" 
				onClick={() => handleFilter('all')}
			>
				Show All
			</button>
			<button 
				className="btn " 
				type="button" 
				onClick={() => handleFilter('complete')}
			>
				Show Complete
			</button>
			<button 
				className="btn " 
				type="button" 
				onClick={() => handleFilter('incomplete')}
			>
				Show Incomplete
			</button>
		</div>
	);
};

Filter.propTypes = {

}

export default Filter
