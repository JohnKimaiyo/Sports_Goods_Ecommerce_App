import { Home } from "./component/Home";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
