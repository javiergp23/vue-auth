import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import firebaseApp from "../firebaseConfig.js";

const auth = getAuth(firebaseApp); 

export {auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged}