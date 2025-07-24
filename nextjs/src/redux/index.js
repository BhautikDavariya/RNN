"use client"
import React from 'react'
import { Provider } from 'react-redux'
import rootReducer from './reducer/rootreduxer'

const StoreProvider = ({ children }) => {
    return (
        <Provider store={rootReducer}>
            {children}
        </Provider>
    )
}

export default StoreProvider



