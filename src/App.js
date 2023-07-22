import React from "react";
//COMPONENTS AND PAGES
import NavBar from "./components/NavBar";
import HomePage from "./pages/homePage";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
