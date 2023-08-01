import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase";
import logo from "../img/google.png";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const [sign, setSignIn] = useState();

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;

        localStorage.setItem("user", JSON.stringify(user));

        setSignIn(true);
      })
      .catch((error) => {
        // console.error(error.code)

        // console.error(error.message)

        // console.error(error.customData.email)

        // console.error(GoogleAuthProvider)

        const errorCode = error.code;

        const errorMessage = error.message;

        // The email of the user's account used.

        const email = error.customData.email;

        // The AuthCredential type that was used.

        // const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  if (sign) {
    return navigate("/listings");
  }

  return (
    <div
      style={{
        display: "inline-block",
        borderRadius: "50px",
        overflow: "hidden",
      }}
    >
      <button
        onClick={handleSignIn}
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          backgroundColor: "#80D4FF",
          color: "white",
          padding: "4px 8px",
        }}
      >
        <img
          src={logo}
          alt="Google Logo"
          style={{ marginRight: "8px", width: "22px", height: "22px" }}
        />

        <p style={{ margin: 0 }}>Continue with Google</p>
      </button>
    </div>
  );
};

// const Divv = Styled.div`

// display:flex;

// flex-direction:row;

// `

// const Button = Styled.button`

// `

export default GoogleSignIn;
