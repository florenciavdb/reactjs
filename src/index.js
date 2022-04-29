import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzQb1vqN9fkP2WYNYsmJRNny2-q9Hpi7o",
  authDomain: "reactjs-8c324.firebaseapp.com",
  projectId: "reactjs-8c324",
  storageBucket: "reactjs-8c324.appspot.com",
  messagingSenderId: "734091852799",
  appId: "1:734091852799:web:d22be56f92de48469685ca",
  measurementId: "G-R4TWHQR8J6"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/

reportWebVitals();