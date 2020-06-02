import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'

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
}

customElements.define('view-contact', ViewContact);