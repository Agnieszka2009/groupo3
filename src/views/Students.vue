<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Students List</h2>
      <ul>
        <li v-for="student in students" :key="student.id">
          <router-link :to="'/students/' + student.id">{{ student.name }}</router-link>
        </li>
      </ul>
      <StudentView></StudentView>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  // Importa el componente StudentView
  import StudentForm from '../components/StudentForm.vue';
  
  export default {
    data() {
      return {
        students: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
          // Otras entradas de estudiantes aquí...
        ]
      }
    },
    components: {
      // Registra el componente para usarlo en esta vista
      // StudentForm
    }
  }
  </script>
  