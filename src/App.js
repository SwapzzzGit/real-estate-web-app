import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import GlobalStyles from "./components/GlobalStyles";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import ProductListing from "./pages/productLisiting";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/listings" element={<ProtectedRoute element={ProductListing} />} />
      </Routes>
    </div>
  );
}

export default App;
