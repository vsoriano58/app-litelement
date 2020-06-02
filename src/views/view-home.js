import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'
import { store } from '../redux/store';
import { navigateDelay, updateMetadata } from '../redux/actions/app-actions'

class ViewHome  extends PageViewElement {

  render() {
    return html`
      <div>
         <h2>Home</h2>
      </div>
      <p>Esto es la home!!! y puedes <a href="contact">contactar con nosotros</a></p>
      <input type="text">
      
      <p>
       <a href="/blog/Bienvenidos">Ir a la nota de bienvenida</a>
      </p>

      <button @click="${this.delayPageChange}">Ir al mapa dentro de 3 segundos</button>
      <hr>
      <a href="/headquarters/madrid">Sede de Madrid</a> 
      <a href="/headquarters/barcelona">Sede de Barcelona</a> 
    `;
  }

  delayPageChange(){
    store.dispatch(navigateDelay('map'))
  }

}

customElements.define('view-home', ViewHome);

