import React from 'react'

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	handleReload() {
		location.reload()
		return false
	}

	render() {
	if (this.state.hasError) {

		return (
			<div style={containerStyle}>
				<h1>Something went wrong.</h1>
				<button style={{ cursor: 'pointer' }} onClick={() => this.handleReload()}>
                	Refresh
            	</button>
			</div>
		);
	}

	return this.props.children; 
	}
}