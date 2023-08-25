import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "../components/profileDropdown";
import profileIcon from "../img/profileIcon.png";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownVisible(!isProfileDropdownVisible);
  };

  return (
    <StyledNav isAuthenticated={isAuthenticated}>
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
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
      {isAuthenticated && (
        <StyledProfileIconContainer>
          <StyledProfileIcon
            src={profileIcon}
            alt="Profile"
            onClick={toggleProfileDropdown}
          />
          {isProfileDropdownVisible && <ProfileDropdown />}
        </StyledProfileIconContainer>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: ${({ isAuthenticated }) => (isAuthenticated ? "12vh" : "10vh")};
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;

  a {
    color: white;
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

const StyledProfileIconContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const StyledProfileIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export default NavBar;
