import { LitElement } from 'lit-element';
import { store } from '../redux/store';
import { updateMetadata } from '../redux/actions/app-actions'

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: { type: Boolean }
    }
  }

  updated(changedProperties){
    if(changedProperties.has('active') && this.active) {
      this.changeMetadata()
    }
  }

  // Este método lo definimos con los datos de la home
  // Si a un componente no le definimos metadatos no fallará y mostrará los de la home
  changeMetadata(){
    store.dispatch(updateMetadata({
      title: 'Mi PWA con LitElement',
      descripcion: 'Esta es una descripción genérica de mi app',
      url: window.location.href,
      image: '/images/escuelait.png'
    }))
  }
}

/*
Solo los componentes que tengan active: true se actualizarán.
*/