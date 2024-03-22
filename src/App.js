import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.js'; 
import home from './pages/home.js'; 
import Register from  './pages/Register.js';
import ResumeMaker from './pages/ResumeMaker.js';
import forgotPass from './pages/forgotPass.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/ResumeMaker" exact element={<ResumeMaker />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/forgotPass" exact element={<forgotPass />} />
      </Routes>
    </Router>
  );
}

export default App;
