import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      signInWithEmailAndPassword(auth, email.value, password.value);
      setLogin(true);
    } catch (error) {
      alert(error.message);
    }
  };
  if (login) {
    return navigate("/signup");
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
    </>
  );
};

export default Login;
