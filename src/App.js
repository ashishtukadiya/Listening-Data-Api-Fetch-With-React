import "./App.css";
import Home from "./pages/Home/home";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/AboutUs/aboutus";
import Sidebar from "./components/Siderbar/sidebar";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
