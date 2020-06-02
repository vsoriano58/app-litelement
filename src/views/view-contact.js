import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'
import { updateMetadata } from '../redux/actions/app-actions'
import { store } from '../redux/store'

import { viewCSS } from '../styles/stylesView';

class ViewContact  extends PageViewElement {

  static get styles() {
    return [viewCSS]
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
         <h2>Contact</h2>
         <p>Página para contactar</p>
      </div>
    `;
  }

  changeMetadata(){
    store.dispatch(updateMetadata({
      title: 'Contacta con nosotros',
      descripcion: 'Esto es info de contacto de nuestra empresa',
      url: window.location.href,
      image: '/images/escuelait.png'
    }))
  }
}

customElements.define('view-contact', ViewContact);