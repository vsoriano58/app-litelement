import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

class ViewHeadquarters  extends connect(store)(PageViewElement) {

  static get properties() {
    return {
      section: {type: Array}
    };
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Sede</h2>
        <p>
          <a href="/headquarters/madrid">Sede de Madrid</a> | <a href="/headquarters/barcelona" >Sede de Barcelona</a> | 
        </p>
        ${this.section}
      </div>  
      
    `;
  }

  stateChanged(state) {
    this.section = state.app.pageSection;
  }

}

customElements.define('view-headquarters', ViewHeadquarters);