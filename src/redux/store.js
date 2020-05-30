import { createStore } from 'redux'
import { app } from './reducers/app_reducer.js'

export const store = createStore(app) 