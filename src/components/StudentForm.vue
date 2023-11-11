<template>
  <div class="student-form">
    <h2>Agregar Estudiante</h2>
    <form @submit.prevent="addStudent">
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="student.name" required>
      <label for="level">Nivel:</label>
      <input type="text" id="level" v-model="student.level" required>
      <button type="submit">Agregar</button>
    </form>
  </div>
  <div v-if="students">
    
    <h2 v-for="student in students" :key="student">
{{ student }}
    </h2>
  </div>
  <div>
{{ students }}
  </div>
  <!-- <button @click="getStudent" >
    getStudents
  </button> -->
</template>

<script>
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../db';
import {updateStudents, getStudents} from "../firebase";


export default {
  data() {
    return {
      student: {
        name: '',
        level: '',

      },
      newStudents: [],
      students: []
    };
  },
  methods: {
    addStudent() {
      // const studentsCollection = collection(db, 'students');
      // addDoc(studentsCollection, this.student);
      this.students.push(this.student)
      updateStudents(this.students)
      this.student.name = '';
      this.student.level = '';
    },
    mounted (){
      getStudents().then((data)=>{
        this.students=data
        
      })
    }
  },
};
</script>


<style scoped>
.student-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-weight: bold;
}

.form-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
