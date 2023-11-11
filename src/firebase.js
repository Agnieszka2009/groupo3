// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, set, get, child} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtD9n3FpMNbsW44XgiDDYe9fKjHVKnnwc",
  authDomain: "estudiantes-de-aga.firebaseapp.com",
  projectId: "estudiantes-de-aga",
  storageBucket: "estudiantes-de-aga.appspot.com",
  messagingSenderId: "774760786920",
  appId: "1:774760786920:web:8dd1c70fb66e02aba0125d",
  measurementId: "G-F1FCKFG3KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app);



export function updateStudents(allstudents) { 
    set(ref(db, "Students/"), allstudents); 
} 
 
//getter method 
export async function getStudents() { 
    const dbRef = ref(db); 

            try { 
              const snapshot = await get(child(dbRef, "Students/")); 
              if(snapshot.exists()) { 
                  return snapshot.val(); 
              } else { 
                  console.log("No data available"); 
                  return []; 
              } 
          } catch(error) { 
              console.error(error); 
          } 
      }


