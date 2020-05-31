import { 
   createStore, 
   applyMiddleware, 
   compose,
   combineReducers } from 'redux'

import { app } from './reducers/app-reducer.js'
import { counter } from './reducers/counter-reducer.js'

const combinedReducers = combineReducers({
  app: app,
  counter: counter,
});

import thunk from 'redux-thunk';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   combinedReducers,
   devCompose(
      applyMiddleware(thunk)
   )
) 