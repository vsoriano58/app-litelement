import { createStore, applyMiddleware } from 'redux'
import { app } from './reducers/app-reducer.js'

import thunk from 'redux-thunk';

export const store = createStore(
   app,
   applyMiddleware(thunk)
) 