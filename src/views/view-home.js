import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element'

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
    `;
  }
}

customElements.define('view-home', ViewHome);

/*
Si ponemos algo en el input, al cambiar de vista y volver a home
lo que había en el input ya no está. El componente se vuelve acrear
y parte del campo input en blanco.

Lo solucionamos haciendo que los componentes (vistas) deriven de PageViewElement
por lo que solo se renderizarán si están visibles.
*/