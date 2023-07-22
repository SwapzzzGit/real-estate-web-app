import React from "react";
import styled from "styled-components";

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
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </StyledNav>
  );
};

//Styled Component

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6rem;
  position: absolute;
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

export default NavBar;
