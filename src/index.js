import React from 'react'
import ReactDOM from 'react-dom'
//custom Provider
import Provider from '/react-redux/Provider';
//Redux Store
import store from '/redux/store';
//components
import App from './App'
import ErrorBoundary from '/components/ErrorBoundary'

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>,
document.getElementById('root'))