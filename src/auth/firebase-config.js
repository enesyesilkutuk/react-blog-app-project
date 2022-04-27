import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyALMBxkkvi3eq0mYDF1E4T1IysAicJygtw",
  authDomain: "blog-app-milestone-f4a2b.firebaseapp.com",
  projectId: "blog-app-milestone-f4a2b",
  storageBucket: "blog-app-milestone-f4a2b.appspot.com",
  messagingSenderId: "161399597206",
  appId: "1:161399597206:web:c607da017e0310933e3ab7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);