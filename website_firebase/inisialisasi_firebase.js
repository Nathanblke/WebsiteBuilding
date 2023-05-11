// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPR_A_lbYBtBZ-FkYdzqFqR97NcSpaTNs",
  authDomain: "gas-array-chart.firebaseapp.com",
  databaseURL: "https://gas-array-chart-default-rtdb.firebaseio.com",
  projectId: "gas-array-chart",
  storageBucket: "gas-array-chart.appspot.com",
  messagingSenderId: "1050254980851",
  appId: "1:1050254980851:web:88b8f7e2d241fdb9d6a986",
  measurementId: "G-C1RWD5JYYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);