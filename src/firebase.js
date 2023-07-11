import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCtA3_Hs1bwc9G8XiI-LfeQALUyurvFxjM",
//   authDomain: "chat-nexus-6e261.firebaseapp.com",
//   projectId: "chat-nexus-6e261",
//   storageBucket: "chat-nexus-6e261.appspot.com",
//   messagingSenderId: "905577830395",
//   appId: "1:905577830395:web:fc3e907df2944524659d5e",
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtHGeB_izsaNPUIG6Y0fme5bMnMUXBQbc",
  authDomain: "chat-nexus-2.firebaseapp.com",
  projectId: "chat-nexus-2",
  storageBucket: "chat-nexus-2.appspot.com",
  messagingSenderId: "541621716328",
  appId: "1:541621716328:web:241ef8cc380da096a142dd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
