<template>
    <div>
      <Header :loggedInUser="loggedInUser" />
      <main class="login-container">
        <div class="login-form">
          <h2>Iniciar Sesión</h2>
          <form @submit.prevent="login">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" v-model="username" required />
  
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="password" required />
  
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      </main>
      <Footer />
      <Sidebar />
    </div>
  </template>
  
  <script>
  import Header from 'C:/Users/aborkowska/groupo3/src/components/HeaderApp.vue';
  import Footer from 'C:/Users/aborkowska/groupo3/src/components/FooterApp.vue';
  import Sidebar from 'C:/Users/aborkowska/groupo3/src/components/MenuApp.vue';
  
  export default {
    components: {
      Header,
      Footer,
      Sidebar,
    },
    data() {
      return {
        loggedInUser: 'Nombre del Profesor', // Nombre del profesor logeado (puedes obtenerlo desde tu sistema de autenticación)
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Lógica de inicio de sesión: Aquí puedes autenticar al profesor y redirigir a la página principal.
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .login-form h2 {
    margin-bottom: 1rem;
  }
  </style>
  