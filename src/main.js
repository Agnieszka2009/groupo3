import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import { routes } from './routes';
 // import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import axios from 'axios';

// Importa los componentes de vistas correctamente
import CalendlyVue from 'calendly-vue'




const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();
app.use(CalendlyVue); 
// Agrega los plugins al app antes de montarlo
app.use(router);
app.use(pinia);

app.mount('#app');
