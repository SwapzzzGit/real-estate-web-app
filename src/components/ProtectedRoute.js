import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated); // Add this log

  if (!isAuthenticated) {
    console.log("ProtectedRoute - User not authenticated"); // Add this logg
    alert("You must log in to access this page.");
    return navigate("/login");
  }

  console.log("ProtectedRoute - User authenticated"); // Add this log

  return <Element {...rest} />;
};

export default ProtectedRoute;
