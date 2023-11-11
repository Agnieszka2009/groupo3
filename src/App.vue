<template>
    <div class="flex h-screen">
      <!-- Barra lateral (menú) -->
      <MenuApp />
  
      <!-- Contenido principal -->
      <div class="flex-grow flex flex-col">
        <header>
          <HeaderApp />
        </header>
        <main class="content flex-grow">
          <router-view />
        </main>
        <footer>
          <FooterApp />
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderApp from 'C:/Users/aborkowska/groupo3/src/components/HeaderApp.vue';
  import MenuApp from 'C:/Users/aborkowska/groupo3/src/components/MenuApp.vue';
  import FooterApp from 'C:/Users/aborkowska/groupo3/src/components/FooterApp.vue';
  
  export default {
    components: {
      HeaderApp,
      FooterApp,
      MenuApp,
    },
  };
  </script>
  
  <style>
  /* Estilos para alinear el pie de página en la parte inferior */
  footer {
    margin-top: auto;
  }
  </style>
  