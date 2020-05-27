import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';

const App = () => {
  const APP_ID = "654b72c8";
  const APP_KEY = "52bf4de528ce81f33d422f9a9dc066ac";
    
  const url =  "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"


    return (
      <div className="App">
        <h1>Food Search App</h1>
      </div>
    );
  }

export default App;