import { createStore } from 'redux'
import { app } from './reducers/app-reducer.js'

export const store = createStore(app) 