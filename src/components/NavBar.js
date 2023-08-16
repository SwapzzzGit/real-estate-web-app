import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfileDropdown from "../components/profileDropdown";
import profileIcon from "../img/profileIcon.png";

const NavBar = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#">Haily Dior</a>
      </h1>
      <ul>
        <li>
          <a href="#">Buy</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <StyledProfileIcon src={profileIcon} alt="Profile" />
      <ProfileDropdown />
    </StyledNav>
  );
};

// Styled Component

const StyledNav = styled.div`
  min-height: 10vh;
  border: 5px solid black;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
  }

  li {
    position: relative;
    padding-left: 6rem;
  }

  h1 {
    padding-right: 650px;
  }
`;

const StyledProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover ~ ${ProfileDropdown} {
    display: block;
  }
`;

export default NavBar;
