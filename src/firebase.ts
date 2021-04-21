import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAMkgS8gakKHkUjW1b2W_gWyomqV7jtke4",
  authDomain: "todoist-dad7e.firebaseapp.com",
  projectId: "todoist-dad7e",
  storageBucket: "todoist-dad7e.appspot.com",
  messagingSenderId: "802114518305",
  appId: "1:802114518305:web:a63ad44b10ca2c13265260",
});

export { firebaseConfig as firebase };