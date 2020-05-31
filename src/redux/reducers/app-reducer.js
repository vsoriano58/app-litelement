
import {
   INCREMENTAR_CONTADOR,
   DECREMENTAR_CONTADOR,
   UPDATE_PAGE,
   START_LOADING,
   STOP_LOADING
} from '../actions/app-actions'

// El reducer necesita un estado inicial y la acción que debe ejecutar

const initialState = {
   counter: 0,
   page: 'home',
   loading: false
}

export const app = (state = initialState, action) => {
   switch (action.type) {
      case START_LOADING:
        return {
          ...state,
          loading: true
        };

      case STOP_LOADING:
        return {
          ...state,
          loading: false
        };

      case INCREMENTAR_CONTADOR:
        return {
          ...state,
          counter: state.counter + 1
        };
  
      case DECREMENTAR_CONTADOR:
        return {
          ...state,
          counter: state.counter - 1
        };
      
      case UPDATE_PAGE:
        return {
          ...state,
          page: action.page
        };
  
      default:
        return state;
   }
}


// VAMOS A IMPLEMENTAR EL CONTADOR EN LA VISTA <view-about>