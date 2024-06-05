import "./App.css";
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Login/>}/>
      <Route path="/Dashboard" element = {<Dashboar/>}/>
    </Routes>
  )
}

export default App;
