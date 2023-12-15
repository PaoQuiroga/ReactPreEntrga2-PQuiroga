import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCgg7XcBO0lW-fK12pgB1b4jFQIBQXgEus",
  authDomain: "tumundodecorado.firebaseapp.com",
  projectId: "tumundodecorado",
  storageBucket: "tumundodecorado.appspot.com",
  messagingSenderId: "819614178397",
  appId: "1:819614178397:web:1674b209d168ecbc3c41b4",
  measurementId: "G-PHPYDY8PK9" 
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
