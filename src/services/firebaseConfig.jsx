//Importando las funciones que necesito 
import {initializeApp} from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

//La configuración firebase de mi webb
const firebaseConfig = {
    apiKey: "AIzaSyBjeMRHhd7avRYwaBAt4tAkxptnXmALsYs",
  authDomain: "lucianoproyecto-7c0b8.firebaseapp.com",
  projectId: "lucianoproyecto-7c0b8",
  storageBucket: "lucianoproyecto-7c0b8.appspot.com",
  messagingSenderId: "836527806620",
  appId: "1:836527806620:web:09573fabe7432008757559",
  measurementId: "G-M6GXP1EQBM"
    
}


// Inicializando Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);