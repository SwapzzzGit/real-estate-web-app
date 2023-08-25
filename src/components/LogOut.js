import React, { useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase";
import { useNavigate } from "react-router-dom";
//Redux Login
import { useDispatch } from "react-redux";
import { logout } from "../state/Actions/actions";

const LogOut = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(false); // Initialize with false

  const dispatch = useDispatch(); //REDUX DISPATCH

  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        alert(`${user.email} Signout Succesfully`);
        localStorage.removeItem("user");
        setAuthUser(true); // Set authUser to true after successful logout
        dispatch(logout()); //Dispatched to Actions
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (authUser) {
    return navigate("/");
  }
  return (
    <>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default LogOut;
