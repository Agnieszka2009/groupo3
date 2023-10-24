<template>
    <div class="container">
      <h1>Datos Almacenados</h1>
      <div v-for="label in storedLabels" :key="label.id">
       
        <!-- Mostrar otros campos aquí -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      storedLabels: Array
    }
  };
  </script>