
export const INCREMENTAR_CONTADOR = 'INCREMENTAR_CONTADOR'
export const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR'
export const UPDATE_PAGE = 'UPDATE_PAGE'


export const incrementarContador = () => {
   return {
      type: INCREMENTAR_CONTADOR
   }
}

export const decrementarContador = () => {
   return {
      type: DECREMENTAR_CONTADOR
   }
}

export const updatePage = (page) => {
   return {
      type: UPDATE_PAGE,
      page
   }
}

// Veamos: navigateDelay es una función cuyo argumento es page y que ejecuta otra función
// cuyo arguemento es dispatch, la cual ejecuta el setTimeout y este ejecuta el despatch de la acción.
// Esto lo podemos hacer por el middleware applyMiddleware instalado en store con createStore.
// dispatch es el parámetro extra que recibimos y que utilizamos en el setTiemout para despachar la acción.

export const navigateDelay = (page) => (dispatch) => {
   setTimeout(() => {
      dispatch(updatePage(page))
   }, 3000)
}
   

