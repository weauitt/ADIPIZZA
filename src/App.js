import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";
import Header from "./pages/MainPage/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Korzina from "./pages/Korzina/Korzina";
import Login from "./pages/Login/Login";


function App() {
    return (
      <div className="background">
        <div className="wrapper">
            <Router>
            <Header />
              <Routes>
                <Route path="/*" element={<MainPage />}/> 
                <Route path="/Korzina" element={<Korzina />}/> 
                <Route path="/Back" element={<MainPage/>}/> 
                <Route path="/Login" element={<Login/>}/> 
                <Route path="/Back from Login" element={<MainPage/>}/> 
              </Routes>
            </Router>
        </div>
      </div>
    );
}

export default App;
