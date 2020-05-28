import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'

class ViewAbout  extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
         <h2>About</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
         <img src="https://picsum.photos/300/200">
         <p>Pempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
         <p>Huis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
         <p>Nonsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
         <p>Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
         <p>Mroident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>      
      </div>
    `;
  }
}

customElements.define('view-about', ViewAbout);

/*
La imagen debería cambiar cada vez que salimos y entramos en about pero
sin embargo no cambia. El componente se renderiza aunque no sea visible.

Lo solucionamos haciendo que los componentes (vstas) deriven de PageViewElement
por lo que solo se renderizarán si están visibles.
*/