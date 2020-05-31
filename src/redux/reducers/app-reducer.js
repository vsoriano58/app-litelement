
import {
   UPDATE_PAGE,
   START_LOADING,
   STOP_LOADING
} from '../actions/app-actions'

// El reducer necesita un estado inicial y la acción que debe ejecutar

const initialState = {
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