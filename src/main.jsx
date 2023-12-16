import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgg7XcBO0lW-fK12pgB1b4jFQIBQXgEus",
  authDomain: "tumundodecorado.firebaseapp.com",
  projectId: "tumundodecorado",
  storageBucket: "tumundodecorado.appspot.com",
  messagingSenderId: "819614178397",
  appId: "1:819614178397:web:1674b209d168ecbc3c41b4"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
