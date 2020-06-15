import { LitElement, html, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js'; // Importamos el instalador del Router

//redux
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from './redux/store'
import { navigate } from './redux/actions/app-actions'
import './utils/update-metadata';


// import './views/view-home'
// import './views/view-about'
// import './views/view-contact'
// import './views/view-map'
// import './views/view-blog'
import 'dile-tabs/dile-tabs';
import 'dile-pages/dile-pages';
import 'dile-spinner/dile-spinner-modal'
import './utils/responsive-banner';
import './utils/menu-responsive';
import './icons/eit-icons';
import './utils/eit-feedback'


export class PwaLive extends connect(store) (LitElement) {
  
  static get styles(){
    return css`
      :host {
        display: block;
        
        --primary-color: #673ab7;
				--primary-light-color: #9a67ea;
				--secondary-color: #fbc02d;
				--secondary-light-color: #fbd09d;
				--text-color: #303030;
        --reverse-text-color: #fff;
				--reverse-accent-color: #fdd835;
        
        padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
        --dile-tab-selected-line-color: var(--secondary-color);
        --dile-tab-text-color: var(--reverse-color, #fff);
        --dile-tab-selected-text-color: var(--reverse-accent-color, #fff);
        background-color: #f9f9f9;
      }

      h1 {
        font-weight: 300;
        font-family: Roboto;
        flex-grow: 1;
      }

      .menumobile {
        margin-top: 10px;
        padding: 10px 0 20px 5px;
      }

      .menumobile a {
        display: block;
        margin: 10px 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--secondary-light-color);
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
        margin-right: 15px;
			}
			dile-pages {
				padding: 0 10px 10px;
			}

      header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: var(--primary-color, #ddd);
        color: var(--reverse-accent-color, #303030);
				padding: 10px;
        --eit-icon-size: 32px;
				--eit-icon-color: var(--secondary-color);
				
			}

      dile-spinner-modal {
				--dile-spinner-color: var(--secondary-color);
			}

      @media(min-width: 800px){
        .maintabs {
          display: block;
        }
      }
    `
  }
  
  static get properties() {
    return {
      loading: { type: Boolean },
      page: { type: String },  // Página seleccionada
      segments: { type: Array }
     
    };
  }

  constructor() {
    super();
    // this.page = "home"
    // Instalación del Router
    // La función callback que pasamos se ejecutará cada vez que cambie el valor de la barra de navegación
    installRouter((location) => this.handleNavigation(location.pathname));

    this.addEventListener('navigate', (e)=> this.navigate(e.detail))
  }

  render() {
    // console.log(this.selected)
    return html`
    <header>
      <h1>My App</h1>
      <menu-responsive>
				<div slot="menudesk">
          <dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">
            <dile-tab name="home">Home</dile-tab>
            <dile-tab name="about">About</dile-tab>
            <dile-tab name="contact">Contact</dile-tab>
            <dile-tab name="map">Map</dile-tab>
            <dile-tab name="headquarters">Sedes</dile-tab>
            <dile-tab name="pelis">Pelis</dile-tab>
          </dile-tabs>
        </div>
        <div slot="menumobile" class="menumobile">
						<a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/map">Site map</a>
            <a href="/todo">To Do</a>
            <a href="/pelis">Pelis</a>
					</div>
      </menu-responsive>

      

      <div>
        <eit-icon icon="account_box"></eit-icon>	
      </div>
    </header>
    
    <responsive-banner></responsive-banner>
    

    <dile-pages selected="${this.page}" attrForSelected="name">
        <view-home name="home" ?active=${this.page == 'home'}></view-home>
        <view-about name="about" ?active=${this.page == 'about'}></view-about>
        <view-contact name="contact" ?active=${this.page == 'contact'}></view-contact>
        <view-map name="map" ?active=${this.page == 'map'}></view-map>
        <view-headquarters name="headquarters" ?active=${this.page == 'headquarters'}></view-headquarters>
        <view-pelis name="pelis" ?active=${this.page == 'pelis'}></view-pelis>
        <view-404 name="404" ?active=${this.page == '404'}></view-404>
    </dile-pages>

    <dile-spinner-modal ?active="${this.loading}"></dile-spinner-modal> 
    <update-metadata></update-metadata>

    <eit-feedback></eit-feedback>

    `;
  }

  
  // Para navegar cuando cambia la ruta en la barra de navegación
  selectedChanged(e) {
		let page = e.detail;
		this.navigate(page);
  }
  
  handleNavigation(path) {
    path = decodeURIComponent(path)
    store.dispatch(navigate(path))
  }

  // _decodeUrl(path){
  //   path = decodeURIComponent(path)
  //   let page = (path === '/') ? 'home' : path.slice(1)
  //   // Sacamos los segmentos
  //   const segments = page.split('/')
  //   page = segments[0]
  //   return {
  //     page,
  //     segments
  //   }
  // }

  // Para navegar con el select
  navigate(page) {
		window.history.pushState({}, '', '/' + page);
		this.handleNavigation(window.location.pathname);
  }
  
  stateChanged(state){
    console.log('Soy PwaLive y el estado es:', state)
    this.page = state.app.page
    this.loading = state.app.loading
    this.section = state.app.pageSection; //  AÑADIDO DEL PROFE
  }

  // updated(changedProperties){
  //   if (changedProperties.has('feedback')){
  //     if (this.feedback){
  //       this.shadowRoot.getElementById('toast').open(this.feedback.msg, this.feedback.status)
  //     }
  //   }
  // }
  
}
