import { LitElement, html, css } from 'lit-element';
// import '../pelis/pelis-list-view';

import 'dile-rounded-button';
import 'dile-pages'

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';
import { pelis } from '../redux/reducers/pelis-reducer';

store.addReducers({
  pelis 
});

/*class ViewPelis extends connect(store)(LitElement) {*/
class ViewPelis extends connect(store) (LitElement) {


  static get styles() {
    return css`
      :host {
        display: block;
      }

      h3 {
        color: #888;
      }
    `;
  }

  static get properties() {
    return {
      section: { type: String },
    };
  }

  render() {
    return html`
      <nav>
        <h3>Accediendo a LISTADO podrás también MODIFICAR y BORRAR películas<h3>
        <a href="/pelis/list"><dile-rounded-button>Listado</dile-rounded-button></a>
        <a href="/pelis/insert"><dile-rounded-button>Insertar</dile-rounded-button></a>
      </nav>
      <dile-pages selected="${this.section}" attrForSelected="name">
        <pelis-list-view name="list" ?active="${this.section == 'list' }"></pelis-list-view>
        <pelis-edit-view name="edit" ?active="${this.section == 'edit' }"></pelis-edit-view>
        <pelis-insert-view name="insert" ?active="${this.section == 'insert' }"></pelis-insert-view>
      </dile-pages>   
    `;
  }

  stateChanged(state) {
    this.section = state.app.pageSection;
  }
}


customElements.define('view-pelis', ViewPelis);