import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import AppContext from '/react-redux/context'

const Provider = ({ children, store={} }) => {
    const [AppState, setAppState] = useState(() => store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            const stringifiedStore = JSON.stringify({ filter: 'ALL', todos: state.todos })
            localStorage.setItem('store', stringifiedStore);
            setAppState(state)
        });
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <AppContext.Provider value={AppState}>
            {children}
        </AppContext.Provider>
    )
}

Provider.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Provider
