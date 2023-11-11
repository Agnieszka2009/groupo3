<template>
    <ul>
      <li v-for="student in students" :key="student.id">
        <StudentCard :student="student" />
      </li>
    </ul>
  </template>
  
  <script>
  import StudentCard from "./StudentCard.vue";
  
  export default {
    props: {
      students: Array,
    },
    components: {
      StudentCard,
    },
  };
  </script>
  
  
  <!-- <script>
  import { collection, onSnapshot } from 'firebase/firestore';
  import { db } from '../db';
  
  export default {
    data() {
      return {
        students: [],
      };
    },
    mounted() {
      const studentsCollection = collection(db, 'students');
      onSnapshot(studentsCollection, (snapshot) => {
        this.students = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
  };
  </script> -->
  
  <style scoped>
  .students-list {
    list-style: none;
    padding: 0;
  }
  
  .student-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    background-color: #f7f7f7;
    margin: 10px;
  }
  </style>
  