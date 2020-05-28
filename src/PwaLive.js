import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js'; // Importamos el instalador del Router

import './views/view-home'
import './views/view-about'
import './views/view-contact'
import './views/view-map'
import './views/view-blog'
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';


export class PwaLive extends LitElement {
  
  static get styles(){
    return css`
      :host {
        display: block;
        margin: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
        --dile-tab-selected-text-color: #1020c0
        background-color: #f9f9f9;
      }

      h1 {
        font-weight: 300;
        font-family: Roboto;
      }

      .page {
				display: none;
			}
      
      .page[active] {
        display: block;
      }

      dile-tabs {
				border-bottom: 1px solid #ddd;
				margin-bottom: 15px;
			}
			dile-pages {
				padding: 0 10px 10px;
			}
    `
  }
  
  static get properties() {
    return {
      page: { type: String },  // Página seleccionada
      segments: { type: Array }
    };
  }

  constructor() {
    super();
    this.page = "home"
    // Instalación del Router
    // La función callback que pasamos se ejecutará cada vez que cambie el valor de la barra de navegación
    installRouter((location) => this.handleNavigation(location.pathname));

    this.addEventListener('navigate', (e)=> this.navigate(e.detail))
  }

  render() {
    // console.log(this.selected)
    return html`
      <h1>My App</h1>

      <!-- Volvemos a los enlaces y quitamos los tabs -->

      <a href="/home">Home</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a> |
      <a href="/map">Map</a> |
      <a href="/blog">Blog</a>

      <!-- LAS TABS NO FUNCIONAN BIEN. DICE EL PROFE QUE LAS ARREGLARÁ PARA EL PRÓXIMO DIA -->

      <!-- <dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
        <dile-tab name="home">Home</dile-tab>
        <dile-tab name="about">About</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
        <dile-tab name="map">Map</dile-tab>
      </dile-tabs> -->

      <dile-pages selected="${this.page}" attrForSelected="name">
         <view-home name="home" ?active=${this.page == 'home'}></view-home>
         <view-about name="about" ?active=${this.page == 'about'}></view-about>
         <view-contact name="contact" ?active=${this.page == 'contact'}></view-contact>
         <view-map name="map" ?active=${this.page == 'map'}></view-map>
         <view-blog name="blog" ?active=${this.page == 'blog'} .segments=${this.segments}></view-blog>
      </dile-pages>

      <!-- <button @click="${this.navigate}">Navegar a contact</button> -->

      <!-- Cuatro botones con tres funcionaientos diferentes -->
      <!-- <button @click="${this.navegarMap}">Ir al mapa</button>
      <button @click="${this.navegar}" data-navigation-path="map">Ir al Mapa</button>
      <button @click="${this.navegar}" data-navigation-path="about">Ir al Sobre nosotros</button>
       -->
      
    `;
  }

  // selectedChanged(e) {
	// 	this.page = e.detail; // Al pulsar en un tab, en e.detail valdrá home, about, o contact
  // }

  
  // navegar(e){
  //   let page = e.target.getAttribute('data-navigation-path')
  //   this.navigate(page)
  // }

  
  // navegarMap(){
  //   this.navigate('map')
  // }

  // Para navegar cuando cambia la ruta en la barra de navegación
  selectedChanged(e) {
		let page = e.detail;
		this.navigate(page);
	}

  handleNavigation(path) {
    path = decodeURIComponent(path)
    let urlDecoded = this._decodeUrl(path)
    console.log('handleNavigation', path, urlDecoded);
    this.page = urlDecoded.page
    this.segments = urlDecoded.segments
  }
  
  // Para navegar desde el botón "Navegar a contact"
  // navigate() {
  //   window.history.pushState({}, '', '/contact')
  //   this.handleNavigation(window.location.pathname)
  // }


  _decodeUrl(path){
    let page = (path === '/') ? 'home' : path.slice(1)
    // Sacamos los segmentos
    const segments = page.split('/')
    page = segments[0]
    return {
      page,
      segments
    }
  }

  // Para navegar con el select
  navigate(page) {
		window.history.pushState({}, '', '/' + page);
		this.handleNavigation(window.location.pathname);
	}
  
}
