<template>
    <div class="students-container">
      <h1>Students List</h1>
      
      <!-- Button to show the student form -->
      <button @click="showStudentForm">Add Student</button>
  
      <!-- Form to add a new student -->
      <div v-if="isStudentFormVisible" class="student-form">
        <h2>Add Student</h2>
        <form @submit.prevent="addStudent">
          <input v-model="newStudent.name" placeholder="Name" />
          <input v-model="newStudent.level" placeholder="Level" />
          <button type="submit">Save</button>
        </form>
      </div>
  
      <!-- List of students -->
      <StudentList :students="students" />
  
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  // import StudentList from "C:/Users/aborkowska/groupo3/src/components/StudentList.vue";
  // import { db, collection, addDoc, onSnapshot } from "C:/Users/aborkowska/groupo3/src/firebase.js"; // Ensure the path to your Firebase setup is correct
  // import { collection, addDoc, onSnapshot } from 'C:/Users/aborkowska/groupo3/src/firebase.js';
  
  
  
  
  export default {
    components: {
      // StudentList,
    },
    setup() {
      const isStudentFormVisible = ref(false);
      const newStudent = ref({ name: "", level: "" });
      const students = ref([]);
  
      const showStudentForm = () => {
        isStudentFormVisible.value = true;
      };
  
      const addStudent = async () => {
        try {
          const studentData = {
            name: newStudent.value.name,
            level: newStudent.value.level,
          };
          const docRef = await addDoc(collection(db, "students"), studentData);
          students.value.push({ id: docRef.id, ...studentData });
          newStudent.value = { name: "", level: "" };
          isStudentFormVisible.value = false;
        } catch (error) {
          console.error("Error adding student: ", error);
        }
      };
  
      onMounted(() => {
        const studentsCollection = collection(db, "students");
        const unsubscribe = onSnapshot(studentsCollection, (querySnapshot) => {
          students.value = [];
          querySnapshot.forEach((doc) => {
            students.value.push({ id: doc.id, ...doc.data() });
          });
        });
  
        return () => unsubscribe(); // Unsubscribe from Firestore updates when the component is unmounted
      });
  
      return {
        isStudentFormVisible,
        newStudent,
        showStudentForm,
        addStudent,
        students,
      };
    },
  };
  </script>
  
  <style scoped>
  .students-container {
    max-width: 100%;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .student-form {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  </style>
  