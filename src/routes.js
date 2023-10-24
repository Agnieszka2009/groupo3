import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';

// Importa los componentes de vistas correctamente
import Home from './views/Home.vue';
import Students from './views/Students.vue';
import Tasks from './views/Tasks.vue';
import Login from './views/Login.vue';
import Notification from './views/Notification.vue';

const routes = [
  { path: '/', component: Home }, // Cambia "views" a "component"
  { path: '/Students', component: Students }, // Cambia "views" a "component"
  { path: '/Tasks', component: Tasks }, // Cambia "views" a "component"
  { path: '/Login', component: Login }, // Cambia "views" a "component"
  { path: '/Notification', component: Notification }, // Cambia "views" a "component"
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

// Agrega los plugins al app antes de montarlo
app.use(router);
app.use(pinia);

app.mount('#app');
