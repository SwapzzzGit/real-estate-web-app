import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        alert(`${user.email} Signout Succesfully`);
        localStorage.removeItem("user");
        setAuthUser(true);
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

// import React, { useState } from 'react'
// import { signOut } from 'firebase/auth'
// import auth from '../firebaseConfig'
// import { useNavigate } from 'react-router-dom'

// const Page = () => {
//     const data=JSON.parse(localStorage.getItem('user'))
//     console.log(data)
//     const[next,setNext]=useState(null)
//     const navigate=useNavigate()
//     const handleLogOut =()=>{
//         signOut(auth).then(() => {
//         const user=JSON.parse(localStorage.getItem('user'))
//             alert(`Signed out of: ${user.email}`)
//             localStorage.removeItem('user')
//             setNext(true)

//     }).catch((error) => {
//         console.error(error)
//     })
//     }
//     if (next) {
//         return navigate('/')
//     }

//     return (<>

//         <button onClick={handleLogOut}>Log Out</button>
//     </>)
// }

// export default Page;
