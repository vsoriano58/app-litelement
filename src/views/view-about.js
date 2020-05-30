import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'

//redux
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../redux/store'
import { incrementarContador, decrementarContador } from '../redux/actions/app-actions'

// cnnect(store) devuelve un mixin que le añadirá más métodos a PageViewElement
// para trabajar con redux (método stateGhanged(state))
class ViewAbout  extends connect(store)(PageViewElement) {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  constructor() {
    super();
  }

  // Par que un componente se suscriba al estore y reciba los cambios utilizamos la librería pwa-helpers

  render() {
    return html`
      <div>
         <h2>About</h2>
         <p>Mi contador vale: ${this.counter}</p>
        <button @click="${this.incrementar}">+1</button>
        <button @click="${this.decrementar}">-1</button>

         <p><img src="https://picsum.photos/300/200"></p>
         <p>Pempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
         <p>Huis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
         <p>Nonsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
         <p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
         <p>Mroident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>      
      </div>
    `;
  }

  stateChanged(state){
    // console.log('Soy about y el estado es:', state)
    this.counter = state.counter
  }

  incrementar(){
    const action = incrementarContador()
    store.dispatch(action)
  }

  // También se puede poner así:
  decrementar(){
    store.dispatch(decrementarContador())
  }

}





customElements.define('view-about', ViewAbout);

/*
La imagen debería cambiar cada vez que salimos y entramos en about pero
sin embargo no cambia. El componente se renderiza aunque no sea visible.

Lo solucionamos haciendo que los componentes (vstas) deriven de PageViewElement
por lo que solo se renderizarán si están visibles.
*/