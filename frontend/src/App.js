import "./App.css";

import Login from "./componenet/login/login";
import Header from "./componenet/header/Header.js";
import Home from "./componenet/Home/Home.js";
import Sidebar from "./componenet/SideBar/Sidebar";
import React, { useState } from "react";



import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./componenet/signup/signup"

function App() {
  const [sideClick, setSideClick] = useState(true);
  const menu = document.querySelector("#menu");

  const sidebar = document.querySelector(".sidebar");

  const showSide = function () {
    sidebar.classList.toggle("show-sidebar");
  };
  return (
    <div className="App">

      <Header setSideClick={setSideClick} sideClick={sideClick} />
      <div className="mainBody">
        <Sidebar sideClick={sideClick} />

        <Home />
        {/* <Login /> */}
      </div>

      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
