
import {
   INCREMENTAR_CONTADOR,
   DECREMENTAR_CONTADOR,
   UPDATE_PAGE
} from '../actions/app-actions'

// El reducer necesita un estado inicial y la acción que debe ejecutar

const initialState = {
   counter: 0,
   page: 'home'
}

export const app = (state = initialState, action) => {
   switch (action.type) {
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