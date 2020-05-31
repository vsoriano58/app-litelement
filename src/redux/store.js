import { 
   createStore, 
   applyMiddleware, 
   compose,
   combineReducers
} from 'redux'

import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';

import { app } from './reducers/app-reducer.js'

// const combinedReducers = combineReducers({
//   app: app,
//   counter: counter,
// });

import thunk from 'redux-thunk';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Función que recibe el state y devuelve el state (Línea 26)
export const store = createStore(
   state => state,
   devCompose(
     applyMiddleware(thunk),
     lazyReducerEnhancer(combineReducers)
   )
 );
 
 // Al arrancar la aplicación se carga solo el reducer app
 store.addReducers({
   app: app
 });