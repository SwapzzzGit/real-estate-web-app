import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase";

const SignUp = () => {
  const navigate = useNavigate();
  //A current user variable has initital value null.
  // setCurrentUser function will change current user value when it triggers to true.
  const [currentUser, setCurrentUser] = useState(null);
  //haven't use async yet in handle submit
  //When We submit normal form a normal browser behaves
  //like it submits text in field and box becomes blank
  //but in our case we have to validate the user
  //that's why we have to stop that submit before validation.
  const handleSubmit = async (e) => {
    e.preventDefault();
    //now extracting the values inserted by user such as email and password
    const { email, password } = e.target.elements;

    //After extracting we need to validate email and password.if not then throw error.
    try {
      // Use 'createUserWithEmailAndPassword' directly with the 'auth' object
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error.message);
    }
  };
  // now if true then return redirect
  if (currentUser) {
    return navigate("/homePage");
  }
  //now create normal form and and functionality.
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default SignUp;
