
import {
   INCREMENTAR_CONTADOR,
   DECREMENTAR_CONTADOR
} from '../actions/app-actions'

// El reducer necesita un estado inicial y la acción que debe ejecutar

const initialState = {
   counter: 0,
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
  
      default:
        return state;
   }
}


// VAMOS A IMPLEMENTAR EL CONTADOR EN LA VISTA <view-about>