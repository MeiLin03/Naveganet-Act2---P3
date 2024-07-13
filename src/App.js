import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/Assets/LoginSignUp/LoginSignup';
import Registro from './Components/Assets/LoginSignUp/Registro';
import Home from './Components/Assets/LoginSignUp/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
