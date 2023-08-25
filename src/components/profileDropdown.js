import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../state/Actions/actions";

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        alert(`${user.email} Signout Successfully`);
        localStorage.removeItem("user");
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dropdown>
      <Arrow />
      <ul>
        <li>Account Settings</li>
        <li>Saved Homes</li>
        <li>Contact History</li>
        <StyledLink to="/" onClick={handleLogOut}>
          Logout
        </StyledLink>
      </ul>
    </Dropdown>
  );
};

const Dropdown = styled.div`
  position: absolute;
  display: inline-block;
  top: 2.9rem;
  right: -1.2rem;
  width: 150px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid grey;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 145px;

    li {
      margin: 4px 4px 4px 4px;
      padding: 8px 5px 8px 5px;
      text-align: center;
      border-radius: 14px;
      transition: background-color 0.5s ease;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
`;
const StyledLink = styled(Link)`
  display: block;
  margin: 4px 4px 4px 4px;
  padding: 8px 5px 8px 5px;
  text-align: center;
  border-radius: 14px;
  transition: background-color 0.5s ease;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Arrow = styled.div`
  content: "";
  position: absolute;
  top: -0.65rem;
  right: 1.5rem;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  background-color: white;
  border-left: 1px solid grey;
  border-top: 1px solid grey;
  /* border-right: 5px solid transparent;
  border-bottom: 10px solid grey;
  z-index: 1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
`;

export default ProfileDropdown;
