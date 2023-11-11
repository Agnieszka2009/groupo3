

// Importa los componentes de vistas correctamente
import Home from './views/Home.vue';
import Students from './views/Students.vue';
import Tasks from './views/Tasks.vue';
import Login from './views/Login.vue';
import Notification from './views/Notification.vue';
import Calendar from './views/Calendar.vue';
// import { calendar } from 'googleapis/build/src/apis/calendar';
// import { fetchGoogleCalendarEvents } from './APIConnector'; // Use a relative path

// import Vue from "vue";


export const routes = [
  { path: '/', component: Home }, // Cambia "views" a "component"
  { path: '/Students', component: Students }, // Cambia "views" a "component"
  { path: '/Tasks', component: Tasks }, // Cambia "views" a "component"
  { path: '/Login', component: Login }, // Cambia "views" a "component"
  { path: '/Notification', component: Notification },
  { path: '/Calendar', component: Calendar },
   // Cambia "views" a "component"
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
];



