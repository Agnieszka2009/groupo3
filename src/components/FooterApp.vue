<template>
    <footer class="bg-gray-600 text-white text-center py-2">
      <div class="text-xs">&copy;   {{ getCurrentDate() }}</div>
    </footer>
  </template>
  
  <script>
  export default {
    methods: {
      getCurrentYear() {
        const currentYear = new Date().getFullYear();
        return currentYear;
      },
      getCurrentDate() {
        const currentDate = new Date().toLocaleDateString();
        return currentDate;
      },
    },
  };
  </script>
  