<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Add Student</h2>
      <form @submit.prevent="addStudent">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Name:</label>
          <input type="text" id="name" v-model="student.name" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="level" class="block text-gray-700">Level:</label>
          <input type="text" id="level" v-model="student.level" class="w-full p-2 border rounded" required />
        </div>
        <!-- Rest of the code remains the same -->
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        student: {
          name: '',
          level: '',
          email: '',
          mobile: '',
          price: '',
          dayOfWeek: 'Monday', // Initialized to "Monday"
        },
      };
    },
    methods: {
      addStudent() {
        // Here, you can implement the logic to add the student to the system.
        // You can access the student's data through this.student.
        // Then, you can reset the form fields.
        console.log('Adding student:', this.student);
        this.student = {
          name: '',
          level: '',
          email: '',
          mobile: '',
          price: '',
          dayOfWeek: 'Monday', // Reset to "Monday"
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* CSS styles specific to the StudentForm component */
  </style>
  