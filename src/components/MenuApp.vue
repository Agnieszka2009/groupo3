<template>
    <aside class="bg-gray-400 text-white w-64 p-4 flex flex-col items-center h-screen">
      <nav class="flex flex-col items-center space-y-4"> <!-- Incrementamos el espacio vertical -->
        <router-link to="/" class="text-xl hover:text-yellow-400">Dashboard</router-link> <!-- Incrementamos el tamaño de fuente -->
        <router-link to="/Students" class="text-xl hover:text-yellow-400">Students</router-link> <!-- Incrementamos el tamaño de fuente -->
        <router-link to="/Classes" class="text-xl hover:text-yellow-400">Classes</router-link> <!-- Incrementamos el tamaño de fuente -->
        <router-link to="/Tasks" class="text-xl hover:text-yellow-400">Tasks</router-link> <!-- Incrementamos el tamaño de fuente -->
        <!-- <router-link to '/notifications' class="hover:text-yellow-400">Notifications</router-link> -->
        <router-link to="/Calendar" class="text-xl hover:text-yellow-400">Calendar</router-link> <!-- Incrementamos el tamaño de fuente -->
      </nav>
      <button @click="logout" class="bg-red-500 text-white hover:bg-red-500 w-full py-2 rounded-md mt-4">
        Logout
      </button>
    </aside>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Implementa la lógica de cierre de sesión aquí
      },
    }
  };
  </script>
  