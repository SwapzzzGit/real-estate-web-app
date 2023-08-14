import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    // Display an alert and then redirect to login
    alert("You must log in to access this page.");
    return navigate("/login");
  }

  return <Element {...rest} />;
};

export default ProtectedRoute;
