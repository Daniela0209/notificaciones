import React from "react";
import Vista from "./pages/Vista";
import firebase from 'firebase/app';

firebase.initializeApp({
  apiKey: "AIzaSyBHq9LCXTvKWv8a5giOFY1T7cI3ETYnSW4",
  authDomain: "notification-d3d10.firebaseapp.com",
  projectId: "notification-d3d10",
  storageBucket: "notification-d3d10.appspot.com",
  messagingSenderId: "34715758033",
  appId: "1:34715758033:web:efbc6b2a0a0ddf285644f0"
});

function App() {
  return (
    <div className="App">
        <Vista/>

    </div>
  );
}




export default App;
