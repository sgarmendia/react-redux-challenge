import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
//Redux Store
import store from '/redux/store';
//App components
import App from './App'
import ErrorBoundary from '/components/ErrorBoundary'

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>,
document.getElementById('root'))