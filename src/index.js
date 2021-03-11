import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
//Redux Store
import store from '/redux/store';
//App components
import App from './App'

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'))