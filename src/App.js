import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import GlobalStyles from "./components/GlobalStyles";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductListing from "./pages/productLisiting";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/a" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
