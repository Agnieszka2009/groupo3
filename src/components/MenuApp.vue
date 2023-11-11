<template>
  <div style="height: 100vh;">
    <nav class="bg-gray-400 text-white w-64 p-4 flex flex-col items-center h-screen">
      <nav class="flex flex-col items-center space-y-6"> <!-- Aumentamos el espacio vertical -->
        <router-link to="/" class="text-4xl hover:text-yellow-400" style="padding: 30px;">Dashboard</router-link> <!-- Incrementamos el tamaño de fuente -->
        <router-link to="/Students" class="text-4xl hover:text-yellow-400" style="padding: 30px;">Students</router-link> <!-- Incrementamos el tamaño de fuente -->
        <router-link to="/Classes" class="text-4xl hover:text-yellow-400" style="padding: 30px;">Classes</router-link> <!-- Incrementamos el tamaño de fuente -->
        <router-link to="/Tasks" class="text-4xl hover:text-yellow-400" style="padding: 30px;">Tasks</router-link> <!-- Incrementamos el tamaño de fuente -->
        <!-- <router-link to '/notifications' class="hover:text-yellow-400">Notifications</router-link> -->
        <router-link to="/Calendar" class="text-4xl hover:text-yellow-400" style="padding: 30px;">Calendar</router-link> <!-- Incrementamos el tamaño de fuente -->
      </nav>
      <button @click="logout" class="bg-red-500 text-white hover:bg-red-500 w-full py-4 rounded-md mt-6 text-4xl" style="padding: 30px;"> <!-- Aumentamos el espacio vertical y tamaño de fuente -->
        Logout
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // Implementa la lógica de cierre de sesión aquí
    },
  },
};
</script>
