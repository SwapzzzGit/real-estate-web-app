import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";
import GoogleSign from "./googleSignIn";
//Redux Login
import { useDispatch } from "react-redux";
import { loginSuccess } from "../state/Actions/actions";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  const dispatch = useDispatch(); //REDUX DISPATCH

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      const userCredentails = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      setLogin(true);
      const user = userCredentails.user;
      //console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(loginSuccess(user)); //Dispatched to Actions
    } catch (error) {
      alert(error.message);
    }
  };
  if (login) {
    return navigate("/listings");
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <h1>Log In</h1>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" name="email" />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Submit</button>
      </form>
      <GoogleSign />
    </>
  );
};

export default Login;
