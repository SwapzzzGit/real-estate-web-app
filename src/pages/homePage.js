import React from "react";
import home from "../img/home.png";
import NavBar from "../components/NavBar";

//import Styled
import styled from "styled-components";

const HomePage = () => {
  return (
    <MainHome>
      <NavBar />
      <Hide>
        <div className="hide">
          <h2>We Work to make</h2>
        </div>
        <div className="hide">
          <h2>
            Your <span>Dreams </span>come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
        <button>Join Now</button>
      </Hide>
    </MainHome>
  );
};

//Styled Component
const MainHome = styled.div`
  background-image: url(${home});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  //width: 100vh;
`;
// const Image = styled.div`
//   img {
//     width: 100%;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     min-height: 100vh;
//   }
// `;
const Hide = styled.div`
  position: absolute;
  top: 175px;
  left: 100px;
  button {
  }
`;
export default HomePage;
