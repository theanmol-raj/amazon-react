// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbeadBq3lpQKhpb3WXsc0FV4HrklflZUE",
  authDomain: "backend-ae20d.firebaseapp.com",
  projectId: "backend-ae20d",
  storageBucket: "backend-ae20d.appspot.com",
  messagingSenderId: "93559548802",
  appId: "1:93559548802:web:65c47fc98763547cbf7d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app