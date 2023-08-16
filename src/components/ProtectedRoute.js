import React from "react";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  //const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated); // Add this log

  if (!isAuthenticated) {
    alert("You must log in to access this page.");
    window.location.replace(`http://localhost:3000/login`);
    return;
  }
  return <Element {...rest} />;
};

export default ProtectedRoute;
