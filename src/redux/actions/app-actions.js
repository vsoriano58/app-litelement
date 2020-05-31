
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'


export const startLoading = () => {
   return {
      type: START_LOADING
   }
}

export const stopLoading = () => {
   return {
      type: STOP_LOADING
   }
}

export const loadPage = (page) => (dispatch) => {

   switch(page) {
     case 'home':
       import('../../views/view-home.js');
       break;
     case 'about':
       import('../../views/view-about.js');
       break;
     case 'contact':
       import('../../views/view-contact.js');
       break;
     case 'map':
       import('../../views/view-map.js');
       break;
     case 'blog':
       import('../../views/view-blog.js');
       break;
     default: 
       import('../../views/view-404.js');
       page = '404';
       break;
   }
   dispatch(updatePage(page));
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
   console.log('Soy app-actions')
   dispatch(startLoading())
   setTimeout(() => {
      dispatch(stopLoading())
      dispatch(updatePage(page))
   }, 3000)
}
   

