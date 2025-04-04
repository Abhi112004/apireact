import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import AddDate from "./AddDate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditDate from "./EditDate";
import Header from "./Header";
import Login from "./Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      {
      localStorage.getItem("email") && 
      <Route path="/View" element={<Home />} />
      }
      <Route path="/insert" element={<AddDate />} />
      {
      localStorage.getItem("email") && 
      <Route path="/edit/:id" element={<EditDate />} />
      }
    </Routes>
  </BrowserRouter>
);
