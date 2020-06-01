import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

import 'dile-pages/dile-pages'

import '../headquarters/headquarters-barcelona-view';
import '../headquarters/headquarters-madrid-view';

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
        <dile-pages selected="${this.section}" attrForSelected="name" id="info">
          <headquarters-madrid-view name="madrid" ?active="${this.section == 'madrid'}"></headquarters-madrid-view>
          <headquarters-barcelona-view name="barcelona" ?active="${this.section == 'barcelona'}"></headquarters-barcelona-view>
        </dile-pages>
      </div>  
      
    `;
  }

  stateChanged(state) {
    this.section = state.app.pageSection;
  }

}

customElements.define('view-headquarters', ViewHeadquarters);