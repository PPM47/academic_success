import React from "react";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="mainbackground2"/>
        <div className="mainbackground"/>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
