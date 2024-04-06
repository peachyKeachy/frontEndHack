import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const { updateSite } = require('./scenes/updater/updater.js')

// FIREBASE SETUP------------------------------
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, onValue, get } = require("firebase/database");

// The app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCFyDc88KX70VqY7BYx2TlNt6le0xHfwpc",
	authDomain: "ide-analytics.firebaseapp.com",
	databaseURL: "https://ide-analytics-default-rtdb.firebaseio.com/",
	projectId: "ide-analytics",
	storageBucket: "ide-analytics.appspot.com",
	messagingSenderId: "242405334050",
	appId: "1:242405334050:web:c3528d0ce2534fb585be7b",
	measurementId: "G-9KCDZRQ9C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

// FIREBASE SETUP END-------------------------




// Render the site
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



// DATA OPERATION START-------------------------------------
var userRef = ref(database, 'users/' );  // The path that will be listened to


// Imports the data from the database
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  updateSite( data );
});



// DATA OPERATION END-------------------------------------
