<template>
    <header class="bg-gray-600 text-white p-4 flex justify-between items-center">
    
      <div class="flex-grow flex justify-center"> <!-- Centra el campo de búsqueda -->
        <div class="search-bar">
          <input
            type="text"
            class="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>
      <div class="user-info">
        <p>{{ loggedInUser }}</p>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      loggedInUser: String,
    },
  };
  </script>